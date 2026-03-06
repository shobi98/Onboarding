import { motion } from 'motion/react';
import { Sprout, Search } from 'lucide-react';
import { Button } from '@/app/components/ui/button';


interface EducatorChoiceProps {
  onChoosePlanter: () => void;
  onChooseReuser: () => void;
  onChooseExplorer: () => void;
  onSkip: () => void;
}

export function EducatorChoice({ onChoosePlanter, onChooseReuser, onChooseExplorer, onSkip }: EducatorChoiceProps) {
  return (
    <div className="min-h-[560px] sm:min-h-[620px] bg-[#F5F3EF] flex flex-col px-6 py-8 sm:px-10 sm:py-10 pb-14 sm:pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center text-[11px] font-medium tracking-[0.18em] text-neutral-500"
      >
        <b>PrepAI</b> Community
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl text-neutral-900 mb-4 sm:mb-5 text-center px-4"
        >
          How do you usually work with assessments?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-4xl px-1 sm:px-0"
        >
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {/* Card A - Planter / Seed Path */}
            <motion.button
              onClick={onChoosePlanter}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-neutral-200 hover:border-neutral-400 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 flex flex-col items-center text-center min-h-[220px]"
            >
              <div className="mb-4 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-3 w-full  object-contain mx-auto animate-grow flex items-center justify-center">
                  
                  <img
              src="/image (25).png"
              alt="Seeds being planted and growing"
              className="w-[65px] h-65px] object-contain mx-auto animate-grow"
            />
                </div>
                  
                {/* Title */}
                <h2 className="text-sm sm:text-base font-medium text-neutral-900 leading-snug">
                  I design and refine my own question papers
                </h2>

                {/* Subtext in narrower column */}
                <div className="w-full max-w-[200px] mt-3 text-left">
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    → I&apos;d like to share
                    <br />
                    and get peer input
                  </p>
                </div>

                {/* Bottom label */}
                {/* <div className="mt-4 text-[11px] font-semibold text-neutral-800">
                  Choose Plant a Seed
                </div> */}
              </div>
            </motion.button>

            {/* Card B - Reuser / Nurture Path */}
            <motion.button
              onClick={onChooseReuser}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-neutral-200 hover:border-neutral-400 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 flex flex-col items-center text-center min-h-[220px]"
            >
              <div className="mb-4 flex flex-col items-center text-center">  
                
                
                  <div className="mb-3 w-full  object-contain mx-auto animate-grow flex items-center justify-center">
                  
                  <img
              src="/image (27).png"
              alt="Seeds being planted and growing"
              className="w-[65px] h-[65px] object-contain mx-auto animate-grow"
            />
                </div>
                <h2 className="text-sm sm:text-base font-medium text-neutral-900 leading-snug">
                  I prefer exploring and adapting strong assessments
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                → I&apos;d like to reuse and
                <br />
                build on others&apos; work
              </p>
              {/* <div className="mt-4 text-[11px] font-semibold text-neutral-800">
                Choose Reuse Seeds
              </div> */}
            </motion.button>

            {/* Card C - Explorer */}
            <motion.button
              onClick={onChooseExplorer}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-neutral-200 hover:border-neutral-400 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 flex flex-col items-center text-center min-h-[220px]"
            >
              <div className="mb-4 flex flex-col items-center text-center">
                
                
                  <div className="mb-3 w-full  object-contain mx-auto animate-grow flex items-center justify-center">
                 
                  <img
              src="/image (26).png"
              alt="Seeds being planted and growing"
              className="w-[65px] h-[65px] object-contain mx-auto animate-grow"
            />
                </div>
                <h2 className="text-sm sm:text-base font-medium text-neutral-900 leading-snug">
                  I&apos;m just exploring for now
                </h2>
              </div>
              <br/>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3 leading-snug">
                → I&apos;d like to see
                
                what&apos;s possible
              </p>
              <p className="text-[9px] text-neutral-500">
                You can always change this later.
              </p>
              {/* <div className="mt-3 text-[11px] font-semibold text-neutral-800">
                Choose Explore Seeds
              </div> */}
            </motion.button>
          </div>
        </motion.div>

        {/* Step indicator */}
        {/* <div className="mt-6 text-[11px] text-neutral-500">
          Step 2 of 3
        </div> */}
      </div>
    </div>
  );
}