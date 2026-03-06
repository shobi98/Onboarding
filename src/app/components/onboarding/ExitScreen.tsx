import { motion } from 'motion/react';
import { TreeDeciduous } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface ExitScreenProps {
  educatorMode: "planter" | "reuser" | "explorer";
  onEnterCommunity: () => void;
}

export function ExitScreen({ educatorMode, onEnterCommunity }: ExitScreenProps) {
  const message =
    educatorMode === "planter"
      ? "Nice. Your Seed is ready to share — others can now preview, reuse, and build on it."
      : educatorMode === "reuser"
        ? "Great. Reuse nurtures growth — you’re helping Seeds reach another classroom."
        : "Perfect. Explore a few Seeds, react to one you like, and you’ll start contributing right away.";

  return (
    <div className="min-h-[560px] sm:min-h-[620px] bg-[#F5F3EF] flex flex-col px-6 py-8 sm:px-10 sm:py-10 pb-14 sm:pb-16">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 sm:mb-5 text-[11px] font-medium tracking-[0.18em] text-neutral-500"
        >
          <b>PrepAI</b> Community
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <TreeDeciduous className="w-16 h-16 sm:w-20 sm:h-20 text-neutral-700" strokeWidth={1.5} />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-md px-4"
        >
          <p className="text-lg sm:text-xl text-neutral-900 leading-relaxed">
            {message}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 sm:mt-12"
        >
          <Button
            onClick={onEnterCommunity}
            className="px-8 sm:px-10 py-4 sm:py-5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full shadow-md"
          >
            Enter Community
          </Button>
        </motion.div>
      </div>
    </div>
  );
}