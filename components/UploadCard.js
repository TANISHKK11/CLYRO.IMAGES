"use client";

import DropZone from "@/components/DropZone";
import ProcessingView from "@/components/ProcessingView";
import ResultView from "@/components/ResultView";
import { useBackgroundRemover } from "@/lib/useBackgroundRemover";

const announcements = {
  processing: "Removing background.",
  success: "Background removed. Your PNG is ready to download.",
};

export default function UploadCard() {
  const remover = useBackgroundRemover();
  const { status } = remover;

  return (
    <div id="tool" className="scroll-mt-24">
      <div className="glass rounded-[2rem] p-2.5 shadow-card sm:p-3.5">
        {/* Screen readers hear state changes without the layout moving */}
        <p className="sr-only" aria-live="polite">
          {announcements[status] ?? ""}
        </p>

        {(status === "idle" || status === "error") && (
          <DropZone onFile={remover.process} error={remover.error} />
        )}

        {status === "processing" && (
          <ProcessingView
            originalUrl={remover.originalUrl}
            progress={remover.progress}
            stage={remover.stage}
            onCancel={remover.reset}
          />
        )}

        {status === "success" && (
          <ResultView
            originalUrl={remover.originalUrl}
            resultUrl={remover.resultUrl}
            fileName={remover.fileName}
            onReset={remover.reset}
          />
        )}
      </div>
    </div>
  );
}
