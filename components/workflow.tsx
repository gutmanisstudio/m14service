"use client";

import { useRef, useState } from "react";

export default function Workflow() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="workflow"
      className="relative overflow-hidden bg-off px-5 py-20 md:px-[60px] md:py-[88px]"
    >
      <div className="mx-auto mb-10 max-w-[1200px] md:mb-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="section-tag mb-3">How we work</div>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold leading-[1.15] -tracking-[0.02em] text-ink">
              A look at our workflow.
            </h2>
          </div>
          <p className="max-w-[420px] text-[1rem] leading-[1.7] text-mid md:text-right">
            From walk-in to handover — proper kit, proper process, no shortcuts.
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-ink shadow-[0_20px_60px_-20px_rgba(8,9,26,0.35)]">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src="/images/workflow.mp4"
            playsInline
            preload="metadata"
            onClick={togglePlay}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            controls={playing}
          />
          {!playing && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label="Play workflow video"
              className="absolute inset-0 flex items-center justify-center bg-ink/30 transition hover:bg-ink/40"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-ink shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] transition group-hover:scale-105 md:h-24 md:w-24">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
