import { useEffect, useMemo, useState } from "react";
import { Search, Clock3 } from "lucide-react";

type ActiveExtraction = {
  handle: string;
  extracted: number;
  total: number;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function ImportTargetsInstagramMobile({
  onStartExtraction,
}: {
  onStartExtraction?: () => void;
}) {
  const [handle, setHandle] = useState("nasa");
  const [followersToExtract, setFollowersToExtract] = useState("50");
  const [extractAll, setExtractAll] = useState(false);

  const [active, setActive] = useState<ActiveExtraction | null>(null);
  const progressPct = useMemo(() => {
    if (!active || active.total <= 0) return 0;
    return clamp((active.extracted / active.total) * 100, 0, 100);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    if (active.extracted >= active.total) return;

    const id = window.setInterval(() => {
      setActive((prev) => {
        if (!prev) return prev;
        if (prev.extracted >= prev.total) return prev;
        const next = clamp(prev.extracted + Math.max(1, Math.ceil(prev.total / 25)), 0, prev.total);
        return { ...prev, extracted: next };
      });
    }, 180);

    return () => window.clearInterval(id);
  }, [active]);

  const startExtraction = () => {
    const normalized = handle.trim().replace(/^@+/, "");
    const total = extractAll ? 218 : clamp(parseInt(followersToExtract || "0", 10) || 0, 1, 5000);
    setActive({ handle: normalized || "username", extracted: 0, total });
    onStartExtraction?.();
  };

  return (
    <div className="w-full max-w-[375px] mx-auto px-4 py-6">
      <div className="flex items-start justify-between">
        <div className="text-[20px] leading-6 font-semibold text-[#0a0a0a]">
          <div>Import Targets from Instagram Accounts</div>
        </div>
        <div className="h-9 w-9 rounded-full flex items-center justify-center text-[#6c737f]">
          <Clock3 className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-[#f5f5f5] p-4 text-[13px] leading-5">
        <div className="font-semibold text-[#0a0a0a]">
          Step 1:{" "}
          <span className="font-normal text-[#6c737f]">
            Enter IG pages that your ideal dates would follow (i.e. a local business, a mutual friend, an influencer in your area who shares your interests, etc.)
          </span>
        </div>
        <div className="mt-2 font-semibold text-[#0a0a0a]">
          Step 2:{" "}
          <span className="font-normal text-[#6c737f]">
            Extract the followers of those pages for analysis based on your dating preferences!
          </span>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-full bg-[rgba(246,51,154,0.13)] border border-[rgba(246,51,154,0.33)] flex items-center justify-center">
              <span className="text-[11px] font-bold text-[#f6339a] leading-none">1</span>
            </div>
            <div className="font-medium text-[#0a0a0a] leading-5">
              <div>Target account</div>
            </div>
          </div>
          <div className="text-right text-[12px] leading-4 text-[#6c737f]">
            <div>Followers of this account will be extracted</div>
          </div>
        </div>

        <div className="mt-3 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6c737f] text-[16px]">@</span>
          <input
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="h-11 w-full rounded-xl border border-[#e5e5e5] bg-white pl-7 pr-12 text-[16px] text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none focus:ring-2 focus:ring-[#f6339a]/20"
            placeholder="username"
            inputMode="text"
          />
          <div className="absolute right-10 top-1/2 -translate-y-1/2 rounded-full bg-[#0a0a0a] text-white text-[13px] px-3 py-1 leading-4">
            0 already extracted
          </div>
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6c737f]" aria-hidden="true" />
        </div>
      </div>

      {active && (
        <div className="mt-5">
          <div className="text-[13px] font-medium text-[#6c737f]">Active Extractions</div>
          <div className="mt-2 rounded-2xl bg-[#f5f5f5] p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 rounded-full bg-[#e5e5e5] flex items-center justify-center text-[#0a0a0a] font-semibold">
                  {(active.handle[0] || "U").toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#0a0a0a] truncate">@{active.handle}</div>
                </div>
              </div>

              <div className="shrink-0 rounded-full bg-[#2563eb] text-white px-3 py-1 text-[13px] leading-4 flex items-center gap-2">
                <span className="inline-block h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                <span className="tabular-nums">
                  {active.extracted} / {active.total}
                </span>
              </div>
            </div>

            <div className="mt-3 h-1.5 w-full rounded-full bg-white/70 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#5b5cf6] via-[#d946ef] to-[#f6339a] transition-[width] duration-200"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <div className="mt-2 text-right text-[12px] text-[#6c737f] tabular-nums">
              {Math.round(progressPct)}% complete
            </div>
          </div>
        </div>
      )}

      <div className="mt-5">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-full bg-[rgba(246,51,154,0.13)] border border-[rgba(246,51,154,0.33)] flex items-center justify-center">
            <span className="text-[11px] font-bold text-[#f6339a] leading-none">2</span>
          </div>
          <div className="font-medium text-[#0a0a0a]">Followers to Extract</div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <input
            value={followersToExtract}
            onChange={(e) => setFollowersToExtract(e.target.value.replace(/[^\d]/g, ""))}
            className="h-11 flex-1 rounded-xl border border-[#e5e5e5] bg-white px-4 text-[16px] text-[#0a0a0a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none focus:ring-2 focus:ring-[#f6339a]/20 disabled:bg-[#f5f5f5]"
            disabled={extractAll}
            inputMode="numeric"
          />
          <label className="flex items-center gap-2 select-none">
            <input
              type="checkbox"
              checked={extractAll}
              onChange={(e) => setExtractAll(e.target.checked)}
              className="h-5 w-5 rounded-md border border-[#e5e5e5]"
            />
            <span className="text-[14px] text-[#0a0a0a]">Extract All</span>
          </label>
        </div>
      </div>

      <button
        className="mt-6 h-12 w-full rounded-xl bg-[#f6339a] text-white font-medium shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#e02c8b] active:bg-[#d52680] transition-colors"
        onClick={startExtraction}
      >
        {active ? "Continue Extraction" : "Extract Followers"}
      </button>

      <div className="mt-4 flex items-center justify-between text-[14px] text-[#0a0a0a]">
        <div className="text-[#6c737f]">Free Tier (500 extractions)</div>
        <div className="tabular-nums">50 / 500</div>
      </div>
    </div>
  );
}

