import { cn } from "./ui/utils";
import { motion } from "motion/react";

type HeartBeatLoaderProps = {
  /** Pixel width of the icon (height keeps logo aspect ratio). */
  size?: number;
  className?: string;
  /** Accessible label when used as loading indicator. */
  label?: string;
};

/**
 * Infinite LetsMatch heart logo for loading / busy states.
 * Uses Figma SVG logo with pulse animation.
 */
export function HeartBeatLoader({
  size = 32,
  className,
  label = "Loading",
}: HeartBeatLoaderProps) {
  const LOGO_RATIO = 19.7737 / 24.002;
  const height = Math.round(size * LOGO_RATIO);

  return (
    <span
      className={cn("inline-flex items-center justify-center", className)}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <motion.img
        src="/letsmatch-logo.svg"
        alt=""
        width={size}
        height={height}
        aria-hidden
        className="block bg-transparent object-contain"
        animate={{ scale: [1, 1.18, 1, 1.12, 1] }}
        transition={{ duration: 1.15, ease: "easeInOut", repeat: Infinity }}
      />
    </span>
  );
}
