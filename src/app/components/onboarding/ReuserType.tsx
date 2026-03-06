import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";

interface ReuserTypeProps {
  onReuseSeeds: () => void;
  onExploreFirst: () => void;
  onSkip: () => void;
}

export function ReuserType({ onReuseSeeds, onExploreFirst, onSkip }: ReuserTypeProps) {
  return (
    <div className="min-h-[560px] sm:min-h-[620px] bg-[#F5F3EF] flex flex-col px-6 py-8 sm:px-10 sm:py-10 pb-14 sm:pb-16">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-3 text-[11px] font-medium tracking-[0.18em] text-neutral-500">
          <b>PrepAI</b> Community
        </div>

        {/* Subtle sprout → small plant (one-time) */}
        <div className="pointer-events-none mx-auto mb-5">
          {/* <div className="w-28 h-28 rounded-3xl bg-gradient-to-b from-[#FDFDFB] via-[#F5F8F4] to-[#D9E9D6] border border-[#E4E7EC] relative overflow-hidden">
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-[#C7D2C5]" />
            <motion.div
              initial={{ scaleY: 0.7, y: 0 }}
              animate={{ scaleY: 1, y: -3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="origin-bottom absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <div className="w-1.5 h-12 rounded-full bg-[#4D8558]" />
              <div className="flex gap-1 mt-1">
                <div className="w-3 h-5 rounded-full bg-[#78B27A]" />
                <div className="w-3 h-6 rounded-full bg-[#78B27A]" />
                <div className="w-3 h-5 rounded-full bg-[#78B27A]" />
              </div>
            </motion.div>
          </div> */}
          <img
              src="/2nd_slide.png"
              alt="Seeds being planted and growing"
              className="w-[200px] h-[200px] object-contain mx-auto animate-grow"
            />
        </div>

        <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-3">
          Start by reusing strong work.
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md px-4">
          Explore Seeds created by educators in your field.
          <br />
          Reuse one with your class or refine it for your context.
          <br />
          Recognition grows through meaningful reuse.
        </p>

        <div className="mt-8 sm:mt-10 space-y-3">
          <Button
            onClick={onReuseSeeds}
            className="px-8 py-4 sm:py-5 rounded-full bg-[#1F6A52] hover:bg-[#195845] text-white shadow-md"
          >
            Reuse Seeds
          </Button>
          <button
            type="button"
            onClick={onExploreFirst}
           className="block mx-auto text-[9px] text-neutral-500 hover:text-neutral-500 underline underline-offset-4"
          >
            Explore Seeds first
          </button>
        </div>

        {/* <div className="mt-6 text-[11px] text-neutral-500">Step 3 of 3</div> */}
      </div>
    </div>
  );
}

