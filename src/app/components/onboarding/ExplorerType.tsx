import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";

interface ExplorerTypeProps {
  onExploreSeeds: () => void;
  onSkip: () => void;
}

export function ExplorerType({ onExploreSeeds, onSkip }: ExplorerTypeProps) {
  return (
    <div className="min-h-[560px] sm:min-h-[620px] bg-[#F5F3EF] flex flex-col px-6 py-8 sm:px-10 sm:py-10 pb-14 sm:pb-16">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-3 text-[11px] font-medium tracking-[0.18em] text-neutral-500">
          <b>PrepAI</b> Community
        </div>

        {/* Field of small sprouts (minimal motion) */}
        <div className="pointer-events-none mx-auto mb-5">
          {/* <div className="w-28 h-28 rounded-3xl bg-gradient-to-b from-[#FDFDFB] via-[#F5F8F4] to-[#D9E9D6] border border-[#E4E7EC] relative overflow-hidden">
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-18 h-2 rounded-full bg-[#C7D2C5]" />
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -2 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3"
            >
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-1 h-8 rounded-full bg-[#5B8F63]" />
                  <div className="flex gap-0.5 mt-0.5">
                    <div className="w-2.5 h-3.5 rounded-full bg-[#78B27A]" />
                    <div className="w-2.5 h-3.5 rounded-full bg-[#78B27A]" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div> */}
          <img
              src="/3_rd_slide.png"
              alt="Seeds being planted and growing"
              className="w-[200px] h-[200px] object-contain mx-auto animate-grow"
            />
        </div>

        <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-3">
          Begin by exploring.
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md px-4 ">
          Preview how educators design assessments.
          <br />
          React to one Seed you find useful.
          <br />
          Even small actions help Seeds take root.
        </p>

        <div className="mt-8 sm:mt-10">
          <Button
            onClick={onExploreSeeds}
            className="px-8 py-4 sm:py-5 rounded-full bg-[#1F6A52] hover:bg-[#195845] text-white shadow-md"
          >
            Explore Seeds
          </Button>
        </div>

        {/* <div className="mt-6 text-[11px] text-neutral-500">Step 3 of 3</div> */}
      </div>
    </div>
  );
}

