import { motion } from "motion/react";
import { useRef, useLayoutEffect } from "react";

interface ScrapingSimulatorProps {
  isActive: boolean;
  profileCount: number;
  onToggle: () => void;
  onProfileCountChange: (count: number) => void;
  onPositionChange?: (position: { x: number; y: number }) => void;
}

export function ScrapingSimulator({ 
  isActive, 
  profileCount,
  onPositionChange,
}: ScrapingSimulatorProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // Send initial position on mount
  useLayoutEffect(() => {
    if (cardRef.current && onPositionChange) {
      const rect = cardRef.current.getBoundingClientRect();
      onPositionChange({ x: rect.left + rect.width / 2, y: rect.top });
    }
  }, []);

  const updatePosition = () => {
    if (cardRef.current && onPositionChange) {
      const rect = cardRef.current.getBoundingClientRect();
      onPositionChange({ x: rect.left + rect.width / 2, y: rect.top });
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      initial={{ x: 0, y: 0 }}
      onDrag={() => {
        // Throttle position updates using requestAnimationFrame
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
          updatePosition();
          rafRef.current = null;
        });
      }}
      onDragEnd={() => {
        // Update position one final time when drag ends
        updatePosition();
      }}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        touchAction: 'none',
      }}
      className="z-50 cursor-grab active:cursor-grabbing"
    >
      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 px-4 py-3 flex items-center gap-3">
        {/* Status Indicator */}
        <div className="relative">
          <motion.div
            animate={isActive ? {
              scale: [1, 1.15, 1],
              opacity: [0.5, 1, 0.5]
            } : {
              opacity: 0.3
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="size-2.5 rounded-full bg-[#f6339a]"
          />
          {isActive && (
            <motion.div
              animate={{
                scale: [1, 2, 2],
                opacity: [0.5, 0, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-[#f6339a]"
            />
          )}
        </div>

        {/* Text & Count */}
        <div className="flex items-center gap-2">
          <span className="font-['Geist:Medium',sans-serif] font-medium text-[13px] text-[#6c737f]">
            Scraping
          </span>
          <div className="h-3 w-px bg-gray-300" />
          <div className="flex items-center gap-1.5">
            <span className="font-['Geist:Regular',sans-serif] text-[12px] text-[#6c737f]">
              Found
            </span>
            <div className="bg-[#f6339a] content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-[5px] py-[1px] rounded-full">
              <span className="font-['Space_Grotesk:Medium',sans-serif] text-[11px] text-white leading-none">
                {profileCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}