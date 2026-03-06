import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";

interface RecognitionModelProps {
  onNext: () => void;
  onSkip: () => void;
}

export function RecognitionModel({ onNext, onSkip }: RecognitionModelProps) {
  return (
    <div className="min-h-[560px] sm:min-h-[620px] bg-[#F5F3EF] flex flex-col px-6 py-8 sm:px-10 sm:py-10">
      {/* Skip Button */}
      {/* <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <button
          onClick={onSkip}
          className="text-xs sm:text-sm text-neutral-600 hover:text-neutral-800 transition-colors"
        >
          Skip
        </button>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* GIF illustration */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 sm:mb-12 w-full flex justify-center"
        >
          <div className="w-full max-w-md rounded-2xl overflow-hidden bg-[#CDECF9]">
            <img
              src="/0_Gardening_Planting_1920x1080-ezgif.com-optimize.gif"
              alt="Educator watering a growing field"
              className="w-full h-auto object-cover"
              onLoad={() => {
                // Debug: confirm GIF loaded
                console.log("GIF loaded: /0_Gardening_Planting_1920x1080-ezgif.com-optimize.gif");
              }}
              onError={(e) => {
                console.error("GIF failed to load", {
                  src: (e.target as HTMLImageElement).src,
                });
              }}
            />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-md px-4"
        >
          <h1 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-neutral-900">
            Every reuse helps a Seed grow.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            That impact reaches another classroom.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 sm:mt-12"
        >
          <Button
            onClick={onNext}
            className="px-6 sm:px-8 py-4 sm:py-5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full shadow-md"
          >
            Continue
          </Button>
        </motion.div>
      </div>
    </div>
  );
}