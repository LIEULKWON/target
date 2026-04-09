import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";

interface ExtractionProgressProps {
  onComplete?: () => void;
}

interface Match {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

// Generate mock profile images
const generateProfileUrl = (seed: number) => 
  `https://i.pravatar.cc/150?img=${(seed % 70) + 1}`;

export function ExtractionProgress({ onComplete }: ExtractionProgressProps) {
  const [progress, setProgress] = useState(0);
  const [totalProfiles, setTotalProfiles] = useState(280);
  const [processedProfiles, setProcessedProfiles] = useState(0);
  const [matches, setMatches] = useState<Match[]>([]);
  const [activityLog, setActivityLog] = useState<string[]>([
    "Connected to Instagram",
    "Retrieved 280 followers",
    "Starting analysis...",
  ]);
  const [rotatingProfiles, setRotatingProfiles] = useState<string[]>([]);
  const lastMatchTimeRef = useRef(0);

  // Initialize rotating profile images
  useEffect(() => {
    const profiles = Array.from({ length: 10 }, (_, i) => generateProfileUrl(i));
    setRotatingProfiles(profiles);
  }, []);

  // Trigger confetti celebration
  const triggerConfetti = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  // Progress simulation
  useEffect(() => {
    const duration = 30000; // 30 seconds to complete
    const updateInterval = 100;
    const increment = (updateInterval / duration) * 100;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + increment, 100);
        const newProcessed = Math.floor((newProgress / 100) * totalProfiles);
        setProcessedProfiles(newProcessed);

        // Update activity log at milestones
        if (newProgress >= 25 && activityLog.length === 3) {
          setActivityLog(prev => [...prev, "Analyzing profile data..."]);
        }
        if (newProgress >= 50 && activityLog.length === 4) {
          setActivityLog(prev => [...prev, "Checking match criteria..."]);
        }
        if (newProgress >= 75 && activityLog.length === 5) {
          setActivityLog(prev => [...prev, "Finalizing results..."]);
        }

        // Random match found events (more frequent for impact)
        const now = Date.now();
        if (newProgress > 10 && newProgress < 95 && Math.random() > 0.97 && now - lastMatchTimeRef.current > 2000) {
          lastMatchTimeRef.current = now;
          const matchId = matches.length + 1;
          const newMatch: Match = {
            id: matchId,
            name: `User ${matchId}`,
            username: `user${matchId}`,
            avatar: generateProfileUrl(matchId + 20)
          };
          
          setMatches(prev => [...prev, newMatch]);
          triggerConfetti();
          
          setActivityLog(prev => {
            const matchLog = `✓ Match found! @${newMatch.username}`;
            return [...prev.slice(-5), matchLog];
          });
        }

        if (newProgress >= 100) {
          clearInterval(interval);
          setActivityLog(prev => [...prev, "Extraction complete!"]);
        }

        return newProgress;
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [totalProfiles, activityLog.length, matches.length]);

  return (
    <div className="w-full h-full flex flex-col bg-white relative overflow-hidden">
      {/* Scanning Profile Images at Top */}
      <div className="relative h-20 border-b border-gray-200 bg-gray-50 overflow-hidden">
        <motion.div 
          className="absolute inset-0 flex items-center gap-3 px-4"
          animate={{ x: [0, -400] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {[...rotatingProfiles, ...rotatingProfiles, ...rotatingProfiles].map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt=""
              className="w-10 h-10 rounded-full border border-gray-200 flex-shrink-0 object-cover"
              style={{ aspectRatio: '1/1' }}
            />
          ))}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 pointer-events-none" />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-['Geist:Medium',sans-serif] bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
          Scanning profiles...
        </div>
      </div>

      {/* Header with progress */}
      <motion.div 
        className="px-6 py-4 border-b border-gray-200"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-blue-500 text-lg"
          >
            ⟳
          </motion.div>
          <div className="flex-1">
            <div className="font-['Geist:SemiBold',sans-serif] font-semibold text-sm text-[#0a0a0a]">
              Extracting from @username
            </div>
            <div className="text-xs font-['Geist:Regular',sans-serif] font-normal text-gray-500">
              Analyzing {totalProfiles} profiles
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/30"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-['Geist:Medium',sans-serif] font-medium text-gray-600">
            {Math.round(progress)}% ({processedProfiles}/{totalProfiles})
          </span>
          {matches.length > 0 && (
            <motion.span
              key={matches.length}
              className="text-xs font-['Geist:SemiBold',sans-serif] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              🎉 {matches.length} {matches.length === 1 ? 'match' : 'matches'}
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Two Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Matches Found */}
        <div className="w-1/2 border-r border-gray-200 flex flex-col">
          <div className="px-4 py-3 bg-green-50 border-b border-green-200">
            <div className="text-xs font-['Geist:SemiBold',sans-serif] font-semibold text-green-700">
              ✓ Matches Found ({matches.length})
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <AnimatePresence>
              {matches.map((match) => (
                <motion.div
                  key={match.id}
                  className="flex items-center gap-3 bg-white rounded-lg p-3 border border-green-200 shadow-sm"
                  initial={{ scale: 0, rotate: -10, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 15,
                    duration: 0.5 
                  }}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: 2,
                    }}
                  >
                    <img
                      src={match.avatar}
                      alt={match.name}
                      className="w-12 h-12 rounded-full border-2 border-green-400 object-cover"
                      style={{ aspectRatio: '1/1' }}
                    />
                    <motion.div
                      className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      ✓
                    </motion.div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="font-['Geist:SemiBold',sans-serif] font-semibold text-sm text-gray-900 truncate">
                      {match.name}
                    </div>
                    <div className="font-['Geist:Regular',sans-serif] font-normal text-xs text-gray-500 truncate">
                      @{match.username}
                    </div>
                  </div>
                  <motion.div
                    className="text-2xl"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.5, repeat: 2 }}
                  >
                    🎯
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
            {matches.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                <div className="text-4xl mb-2">🔍</div>
                <div className="text-sm font-['Geist:Regular',sans-serif]">
                  Searching for matches...
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Activity Log */}
        <div className="w-1/2 flex flex-col">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="text-xs font-['Geist:SemiBold',sans-serif] font-semibold text-gray-700">
              Activity Log
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <AnimatePresence>
              {activityLog.map((log, index) => (
                <motion.div
                  key={`${index}-${log}`}
                  className="text-xs font-['Geist:Regular',sans-serif] font-normal text-gray-600 flex items-start gap-2 py-1.5 px-2 rounded hover:bg-gray-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-gray-400 text-[10px] mt-0.5 font-mono">
                    {new Date().toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit', 
                      second: '2-digit',
                      hour12: false 
                    })}
                  </span>
                  <span className="flex-1">{log}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-['Geist:Bold',sans-serif] font-bold text-gray-900">
              {processedProfiles}
            </div>
            <div className="text-xs font-['Geist:Regular',sans-serif] font-normal text-gray-500">
              Processed
            </div>
          </div>
          <div>
            <motion.div
              key={matches.length}
              className="text-lg font-['Geist:Bold',sans-serif] font-bold text-green-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.3 }}
            >
              {matches.length}
            </motion.div>
            <div className="text-xs font-['Geist:Regular',sans-serif] font-normal text-gray-500">
              Matches
            </div>
          </div>
          <div>
            <div className="text-lg font-['Geist:Bold',sans-serif] font-bold text-gray-900">
              {Math.round(progress)}%
            </div>
            <div className="text-xs font-['Geist:Regular',sans-serif] font-normal text-gray-500">
              Complete
            </div>
          </div>
        </div>
      </div>

      {/* Cancel button */}
      <div className="px-6 py-4 border-t border-gray-200">
        <button
          className="w-full h-10 rounded-lg border border-gray-300 text-sm font-['Geist:Medium',sans-serif] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          onClick={() => {
            if (window.confirm("Are you sure you want to cancel the extraction?")) {
              onComplete?.();
            }
          }}
        >
          Cancel Extraction
        </button>
      </div>
    </div>
  );
}