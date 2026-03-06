import { motion } from 'motion/react';
import { Space, Sprout } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface SeedIntroProps {
  onNext: () => void;
  onSkip: () => void;
}

export function SeedIntro({ onNext, onSkip }: SeedIntroProps) {
  return (
    <div className="min-h-[560px] sm:min-h-[620px] bg-[#F5F3EF] flex flex-col px-6 py-8 sm:px-10 sm:py-10 pb-14 sm:pb-16">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-2 sm:mb-3 text-[11px] font-medium tracking-[0.18em] text-neutral-500"
        >
          <b>PrepAI</b> Community
        </motion.div>

        {/* Image - compact wrapper, no extra vertical space */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center items-center shrink-0 mb-5 sm:mb-6"
        >
          <img
            src="/1st_slide.png"
            alt="Seeds being planted and growing"
            className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] object-contain animate-grow"
          />
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center max-w-md px-4"
        >
          <h1 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-neutral-600 whitespace-nowrap">
            Your assessment work deserves visibility.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-left">
            Every semester, educators design meaningful assessments. Most of that work stays within one classroom.
            <br/>
            <br />
            PrepAI Community helps that work <b>take root beyond it.</b>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-10 sm:mt-12"
        >
          <Button
            onClick={onNext}
            className="px-6 sm:px-8 py-4 sm:py-5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full shadow-md"
          >
            Continue
          </Button>
        </motion.div>

        {/* Step indicator */}
        {/* <div className="mt-6 text-[11px] text-neutral-500">
          Step 1 of 3
        </div> */}
      </div>
    </div>
  );
}