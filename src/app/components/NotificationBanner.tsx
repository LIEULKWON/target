import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { Check, Loader2 } from "lucide-react";

export interface ExtractionJob {
  id: string;
  sourceName: string;
  totalProfiles: number;
  startedAt: number;
}

interface Match {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

const generateProfileUrl = (seed: number) =>
  `https://i.pravatar.cc/150?img=${(seed % 70) + 1}`;

const MOCK_NAMES = [
  "Sarah Kim", "Alex Chen", "Maria Lopez", "James Park",
  "Emma Wilson", "David Lee", "Sofia Martinez", "Ryan Nguyen",
  "Olivia Brown", "Ethan Davis", "Ava Johnson", "Noah Smith",
];

const MOCK_SOURCES = [
  "@yoga_seoul", "@cafe_hopping_kr", "@travel_korea", "@fitness_daily",
  "@seoul_foodies", "@street_fashion", "@art_gallery_kr", "@music_vibes",
];

let jobCounter = 0;
export function createExtractionJob(): ExtractionJob {
  const idx = jobCounter++ % MOCK_SOURCES.length;
  return {
    id: `extraction-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    sourceName: MOCK_SOURCES[idx],
    totalProfiles: Math.floor(Math.random() * 400) + 100,
    startedAt: Date.now(),
  };
}

// ── Individual job banner item ──────────────────────────────────────
function JobBannerItem({
  job,
  onComplete,
}: {
  job: ExtractionJob;
  onComplete: (jobId: string) => void;
}) {
  type Phase = "scanning" | "match" | "complete";
  const [phase, setPhase] = useState<Phase>("scanning");
  const [progress, setProgress] = useState(0);
  const [processedProfiles, setProcessedProfiles] = useState(0);
  const [matches, setMatches] = useState<Match[]>([]);
  const [currentMatch, setCurrentMatch] = useState<Match | null>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const matchTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const lastMatchTimeRef = useRef(0);
  const dismissTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const [rotatingProfiles] = useState(() =>
    Array.from({ length: 12 }, (_, i) =>
      generateProfileUrl(i + parseInt(job.id.slice(-4), 36) % 30)
    )
  );

  const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

  const triggerLocalizedConfetti = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!bannerRef.current) return;

    try {
      const rect = bannerRef.current.getBoundingClientRect();
      const safeW = window.innerWidth || 1;
      const safeH = window.innerHeight || 1;
      const centerXRaw = (rect.left + rect.width / 2) / safeW;
      const centerYRaw = (rect.top + rect.height / 2) / safeH;
      const centerX = Number.isFinite(centerXRaw) ? clamp01(centerXRaw) : 0.5;
      const centerY = Number.isFinite(centerYRaw) ? clamp01(centerYRaw) : 0.5;

      const defaults = {
        startVelocity: 18,
        spread: 70,
        ticks: 35,
        zIndex: 9999,
        gravity: 0.8,
        scalar: 0.7,
        disableForReducedMotion: true,
      };

      confetti({ ...defaults, particleCount: 20, origin: { x: clamp01(centerX - 0.04), y: centerY }, angle: 60 });
      confetti({ ...defaults, particleCount: 20, origin: { x: clamp01(centerX + 0.04), y: centerY }, angle: 120 });
    } catch {
      // If canvas-confetti throws (e.g. during hot reload), don't break the banner animation loop.
    }
  }, []);

  // Progress simulation
  useEffect(() => {
    const duration = 25000 + Math.random() * 15000; // 25-40s
    const interval = 100;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment * (0.8 + Math.random() * 0.4), 100);
        setProcessedProfiles(Math.floor((next / 100) * job.totalProfiles));

        // Random match events
        const now = Date.now();
        if (
          next > 8 && next < 95 &&
          Math.random() > 0.97 &&
          now - lastMatchTimeRef.current > 3000
        ) {
          lastMatchTimeRef.current = now;
          const matchId = Date.now();
          const idx = Math.floor(Math.random() * MOCK_NAMES.length);
          const newMatch: Match = {
            id: matchId,
            name: MOCK_NAMES[idx],
            username: MOCK_NAMES[idx].toLowerCase().replace(" ", "_"),
            avatar: generateProfileUrl(matchId % 70),
          };
          setMatches((prev) => [...prev, newMatch]);
          setCurrentMatch(newMatch);
          setPhase("match");
          triggerLocalizedConfetti();

          if (matchTimeoutRef.current) clearTimeout(matchTimeoutRef.current);
          matchTimeoutRef.current = setTimeout(() => {
            setPhase("scanning");
            setCurrentMatch(null);
          }, 3000);
        }

        if (next >= 100) {
          clearInterval(timer);
          // Transition to complete phase
          if (matchTimeoutRef.current) clearTimeout(matchTimeoutRef.current);
          setTimeout(() => {
            setPhase("complete");
            setCurrentMatch(null);
          }, 500);
        }
        return next;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      if (matchTimeoutRef.current) clearTimeout(matchTimeoutRef.current);
      if (dismissTimeoutRef.current) clearTimeout(dismissTimeoutRef.current);
    };
  }, [job.totalProfiles, triggerLocalizedConfetti]);

  // Auto-dismiss after complete
  useEffect(() => {
    if (phase === "complete") {
      dismissTimeoutRef.current = setTimeout(() => {
        onComplete(job.id);
      }, 4000);
      return () => {
        if (dismissTimeoutRef.current) clearTimeout(dismissTimeoutRef.current);
      };
    }
  }, [phase, job.id, onComplete]);

  return (
    <motion.div
      ref={bannerRef}
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.3 } }}
      transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 30 }}
    >
      <AnimatePresence mode="wait">
        {phase === "complete" ? (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg border border-green-200 overflow-hidden"
          >
            <div className="px-4 py-3 flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0"
              >
                <span className="text-white text-sm">✓</span>
              </motion.div>
              <div className="flex-1 min-w-0">
                <span className="text-sm text-green-800">
                  {job.sourceName} complete
                </span>
                <div className="text-xs text-green-600">
                  Extraction complete
                </div>
              </div>
            </div>
          </motion.div>
        ) : phase === "match" && currentMatch ? (
          <motion.div
            key={`match-${currentMatch.id}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, type: "spring", stiffness: 400, damping: 25 }}
            className="relative bg-gradient-to-r from-[#FFF8DD] via-[#FFE9A6] to-[#FFD778] rounded-2xl shadow-lg border border-[#E9C85F] overflow-hidden"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(700px 120px at 15% 0%, rgba(255,255,255,0.85), rgba(255,255,255,0) 60%)",
              }}
            />
            <div className="px-4 py-3 flex items-center gap-3">
              <motion.div
                className="relative flex-shrink-0"
                initial={{ scale: 0, rotate: -18 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 18, delay: 0.05 }}
              >
                <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-br from-[#FFE38A] via-[#E3B72C] to-[#B88700] shadow-sm">
                  <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-sm p-[2px]">
                    <img
                      src={currentMatch.avatar}
                      alt={currentMatch.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-gradient-to-b from-[#FFD86B] to-[#B88700] shadow-sm ring-2 ring-white/70 flex items-center justify-center">
                  <Check className="h-3 w-3 text-[#3A2A00]" aria-hidden="true" />
                </div>
              </motion.div>

              <div className="flex-1 min-w-0">
                <div className="text-[13px] leading-4 font-medium text-[#2A1D00]">
                  Match found
                </div>
                <div className="mt-0.5 text-xs text-[#5A3D00] truncate">
                  @{currentMatch.username}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[10px] text-[#6B4A00]/70 bg-white/50 border border-white/40 px-2 py-1 rounded-full">
                  {job.sourceName}
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="scanning"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-3 flex items-center gap-3">
              {/* Scrolling avatars */}
              <div className="relative w-16 h-8 overflow-hidden rounded-full flex-shrink-0">
                <motion.div
                  className="absolute flex items-center gap-1.5"
                  animate={{ x: [0, -160] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  {[...rotatingProfiles, ...rotatingProfiles].map((avatar, i) => (
                    <img key={i} src={avatar} alt="" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                  ))}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-blue-500 flex-shrink-0"
                  >
                    <Loader2 className="h-4 w-4" aria-hidden="true" />
                  </motion.div>
                  <span className="text-sm text-gray-900 truncate">
                    {job.sourceName}
                  </span>
                </div>
                <div className="mt-0.5 text-xs text-gray-500">
                  Scanning…
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main banner container (stacks multiple jobs) ────────────────────
interface NotificationBannerProps {
  jobs: ExtractionJob[];
  onJobComplete: (jobId: string) => void;
}

export function NotificationBanner({ jobs, onJobComplete }: NotificationBannerProps) {
  if (jobs.length === 0) return null;

  return (
    <div className="fixed z-50 left-1/2 -translate-x-1/2 bottom-5 md:top-4 md:bottom-auto w-[calc(100%-2rem)] max-w-md flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {jobs.map((job) => (
          <div key={job.id} className="pointer-events-auto">
            <JobBannerItem job={job} onComplete={onJobComplete} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
