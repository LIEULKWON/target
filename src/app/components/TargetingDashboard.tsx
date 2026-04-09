import { useState, useCallback } from "react";
import WDefault from "../../imports/1440WDefault/1440WDefault";
import WDefault375 from "../../imports/375WDefault/375WDefault";
import { NotificationBanner, createExtractionJob, type ExtractionJob } from "./NotificationBanner";
import { ImportTargetsInstagramMobile } from "./ImportTargetsInstagramMobile";

export function TargetingDashboard() {
  const [jobs, setJobs] = useState<ExtractionJob[]>([]);

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
      {/* Notification Banners – stacked, non-blocking */}
      <NotificationBanner jobs={jobs} onJobComplete={handleJobComplete} />

      {/* Desktop */}
      <div className="hidden md:block size-full">
        <WDefault onExtractionStateChange={handleExtractionStateChange} />
      </div>

      {/* Mobile */}
      <div className="block md:hidden w-full h-full overflow-y-auto bg-[#f3f3f3]">
        <ImportTargetsInstagramMobile onStartExtraction={() => handleExtractionStateChange(true)} />
      </div>
    </div>
  );
}
