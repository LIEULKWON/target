import { useState, useCallback, useEffect } from "react";
import WDefault from "../../imports/1440WDefault/1440WDefault";
import WDefault375 from "../../imports/375WDefault/375WDefault";
import { NotificationBanner, createExtractionJob, type ExtractionJob } from "./NotificationBanner";
import { HeartBeatLoader } from "./HeartBeatLoader";

export function TargetingDashboard() {
  const [jobs, setJobs] = useState<ExtractionJob[]>([]);
  const [showStartupLoader, setShowStartupLoader] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShowStartupLoader(false);
    }, 1500);
    return () => window.clearTimeout(id);
  }, []);

  const handleExtractionStart = useCallback(() => {
    const newJob = createExtractionJob();
    setJobs((prev) => [...prev, newJob]);
  }, []);

  const handleJobComplete = useCallback((jobId: string) => {
    setJobs((prev) => prev.filter((j) => j.id !== jobId));
  }, []);

  // The Figma components fire onExtractionStateChange(true) on click.
  // We only care about the "true" signal to spawn a new job.
  const handleExtractionStateChange = useCallback(
    (extracting: boolean) => {
      if (extracting) {
        handleExtractionStart();
      }
    },
    [handleExtractionStart]
  );

  return (
    <div className="relative size-full">
      {showStartupLoader && (
        <div className="fixed inset-0 z-[90] bg-[#0A0A0A]/30 flex items-center justify-center pointer-events-auto">
          <div className="flex flex-col items-center gap-3">
            <HeartBeatLoader size={64} label="Loading LetsMatch" />
          </div>
        </div>
      )}

      {/* Notification Banners – stacked, non-blocking */}
      <NotificationBanner jobs={jobs} onJobComplete={handleJobComplete} />

      {/* Desktop */}
      <div className="hidden md:block size-full">
        <WDefault onExtractionStateChange={handleExtractionStateChange} />
      </div>

      {/* Mobile */}
      <div className="block md:hidden w-full h-full overflow-y-auto bg-[#f3f3f3]">
        <div className="min-h-full w-full max-w-[375px] mx-auto">
          <WDefault375 onExtractionStateChange={handleExtractionStateChange} />
        </div>
      </div>
    </div>
  );
}
