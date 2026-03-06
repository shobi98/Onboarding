import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";

type BehaviourType = "planter" | "reuser" | "explorer" | null;

interface OnboardingV2Props {
  onBack: () => void;
}

export function OnboardingV2({ onBack }: OnboardingV2Props) {
  const [step, setStep] = useState(0);
  const [behaviour, setBehaviour] = useState<BehaviourType>(null);

  const goTo = (nextStep: number) => setStep(nextStep);

  const renderStepIndicator = () => (
    <div className="mt-6 flex justify-center text-[11px] text-neutral-500">
      <span>Step {step + 1} of 3</span>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl bg-[#F5F3EF] shadow-2xl border border-white/60 px-6 sm:px-10 py-6 sm:py-8">
      {/* Top header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-[11px] font-medium tracking-[0.18em]  text-neutral-500">
          PrepAI Community
        </div>
        <button
          type="button"
          onClick={onBack}
          className="text-xs text-neutral-500 hover:text-neutral-800 underline underline-offset-4"
        >
          ← Back to v1
        </button>
      </div>

      {/* Soft step bar */}
      <div className="flex items-center gap-2 mb-4 text-[11px] text-neutral-500">
        <span
          className={`h-1 flex-1 rounded-full ${
            step >= 0 ? "bg-[#71CEB5]" : "bg-neutral-200"
          }`}
        />
        <span
          className={`h-1 flex-1 rounded-full ${
            step >= 1 ? "bg-[#71CEB5]" : "bg-neutral-200"
          }`}
        />
        <span
          className={`h-1 flex-1 rounded-full ${
            step >= 2 ? "bg-[#71CEB5]" : "bg-neutral-200"
          }`}
        />
      </div>

      {/* Slide 1 — Anchor identity */}
      {step === 0 && (
        <motion.div
          key="step-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 pt-2"
        >
          <div className="flex-1 text-center sm:text-left space-y-3">
            <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
              Your assessment work
              <br />
              deserves visibility.
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Every semester, educators design meaningful assessments.
              <br />
              Most of that work stays within one classroom.
              <br />
              PrepAI Community helps that work take root beyond it.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => goTo(1)}
                className="px-7 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 shadow-md"
              >
                Continue
              </Button>
            </div>
          </div>

          {/* Subtle sprout animation */}
          <div className="flex-1 flex justify-center sm:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{
                opacity: 1,
                y: [4, 0, 4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-b from-[#FDFDFB] via-[#F5F8F4] to-[#D9E9D6] border border-[#E4E7EC] flex items-end justify-center"
            >
              <div className="w-28 h-2 rounded-full bg-[#C7D2C5] mb-4" />
              <div className="absolute flex flex-col items-center mb-6">
                <div className="w-1 h-8 rounded-full bg-[#5B8F63]" />
                <div className="flex gap-1 mt-1">
                  <div className="w-3 h-4 rounded-full bg-[#78B27A]" />
                  <div className="w-3 h-4 rounded-full bg-[#78B27A]" />
                </div>
              </div>
            </motion.div>
          </div>

          {renderStepIndicator()}
        </motion.div>
      )}

      {/* Slide 2 — Behaviour framing */}
      {step === 1 && (
        <motion.div
          key="step-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="pt-2"
        >
          <div className="text-center space-y-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              How do you usually work with assessments?
            </h2>
            <p className="text-sm text-neutral-600">
              Choose the behaviour that feels closest. This only helps us guide your first steps.
            </p>
          </div>

          <div className="mx-auto max-w-3xl grid sm:grid-cols-3 gap-4 mb-6">
            {/* Planter / designer */}
            <button
              type="button"
              onClick={() => {
                setBehaviour("planter");
                goTo(2);
              }}
              className={`group rounded-2xl border px-5 py-5 text-left text-sm transition-all shadow-sm min-h-[210px] ${
                behaviour === "planter"
                  ? "border-[#71CEB5] bg-white shadow-md shadow-[#71CEB5]/20"
                  : "border-neutral-200 bg-[#F9FAFB]"
              }`}
            >
              <div className="flex items-start gap-2 mb-3">
                <span className="text-xl" aria-hidden="true">
                  📝
                </span>
                <div className="font-medium text-neutral-900 leading-snug">
                  I design and refine my
                  <br />
                  own question papers
                </div>
              </div>
              <div className="text-xs text-neutral-600 leading-relaxed">
                → I&apos;d like to share
                <br />
                and get peer input
              </div>
            </button>

            {/* Reuser */}
            <button
              type="button"
              onClick={() => {
                setBehaviour("reuser");
                goTo(2);
              }}
              className={`group rounded-2xl border px-5 py-5 text-left text-sm transition-all shadow-sm min-h-[210px] ${
                behaviour === "reuser"
                  ? "border-[#71CEB5] bg-white shadow-md shadow-[#71CEB5]/20"
                  : "border-neutral-200 bg-[#F9FAFB]"
              }`}
            >
              <div className="flex items-start gap-2 mb-3">
                <span className="text-xl" aria-hidden="true">
                  🔍
                </span>
                <div className="font-medium text-neutral-900 leading-snug">
                  I prefer exploring and
                  <br />
                  adapting strong assessments
                </div>
              </div>
              <div className="text-xs text-neutral-600 leading-relaxed">
                → I&apos;d like to reuse and
                <br />
                build on others&apos; work
              </div>
            </button>

            {/* Explorer */}
            <button
              type="button"
              onClick={() => {
                setBehaviour("explorer");
                goTo(2);
              }}
              className={`group rounded-2xl border px-5 py-5 text-left text-sm transition-all shadow-sm relative overflow-hidden min-h-[210px] ${
                behaviour === "explorer"
                  ? "border-[#71CEB5] bg-white shadow-md shadow-[#71CEB5]/20"
                  : "border-neutral-200 bg-[#F9FAFB]"
              }`}
            >
              <div className="flex items-start gap-2 mb-3">
                <span className="text-xl" aria-hidden="true">
                  🌱
                </span>
                <div className="font-medium text-neutral-900 leading-snug">
                  I&apos;m just exploring
                  <br />
                  for now
                </div>
              </div>
              <div className="text-xs text-neutral-600 leading-relaxed mb-5">
                → I&apos;d like to see
                <br />
                what&apos;s possible
              </div>
              {/* tiny seed sprout in bottom-right, closer to reference */}
              <div className="pointer-events-none absolute bottom-3 right-4 flex flex-col items-center">
                <div className="w-6 h-1 rounded-full bg-[#C7D2C5]" />
                <div className="mt-1 w-1.5 h-4 rounded-full bg-[#5B8F63]" />
                <div className="flex gap-0.5 mt-0.5">
                  <div className="w-2 h-3 rounded-full bg-[#78B27A]" />
                  <div className="w-2 h-3 rounded-full bg-[#78B27A]" />
                </div>
              </div>
            </button>
          </div>

          <div className="text-xs text-neutral-500 text-center">
            You can always change this later.
          </div>

          {renderStepIndicator()}
        </motion.div>
      )}

      {/* Slide 3 variants based on behaviour */}
      {step === 2 && behaviour === "planter" && (
        <motion.div
          key="step-2-planter"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="pt-2 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="flex-1 text-center space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Plant your first Seed.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Share one recent assessment you&apos;ve designed.
              <br />
              Others can preview, reuse, and refine it.
              <br />
              Recognition begins when work takes root.
            </p>

            <div className="mt-4 space-y-2">
              <Button
                className="px-7 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 shadow-md"
                onClick={() => {
                  // TODO: route to Seed creation
                  onBack();
                }}
              >
                Plant a Seed
              </Button>
              <button
                type="button"
                className="block w-full text-xs text-neutral-500 hover:text-neutral-800 underline underline-offset-4"
                onClick={onBack}
              >
                Explore Seeds first
              </button>
            </div>
          </div>

          {/* Seed → Sprout animation (one-time) */}
          <div className="flex-1 flex justify-center sm:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-b from-[#FDFDFB] via-[#F5F8F4] to-[#D9E9D6] border border-[#E4E7EC] flex items-end justify-center overflow-hidden"
            >
              <div className="w-28 h-2 rounded-full bg-[#C7D2C5] mb-4" />
              <motion.div
                initial={{ scaleY: 0.2, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="origin-bottom absolute bottom-6 flex flex-col items-center"
              >
                <div className="w-1 h-10 rounded-full bg-[#5B8F63]" />
                <div className="flex gap-1 mt-1">
                  <div className="w-3 h-4 rounded-full bg-[#78B27A]" />
                  <div className="w-3 h-4 rounded-full bg-[#78B27A]" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {renderStepIndicator()}
        </motion.div>
      )}

      {step === 2 && behaviour === "reuser" && (
        <motion.div
          key="step-2-reuser"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="pt-2 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="flex-1 text-center space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Start by reusing strong work.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Explore Seeds created by educators in your field.
              <br />
              Reuse one with your class or refine it for your context.
              <br />
              Recognition grows through meaningful reuse.
            </p>

            <div className="mt-4 space-y-2">
              <Button
                className="px-7 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 shadow-md"
                onClick={onBack}
              >
                Reuse Seeds
              </Button>
              <button
                type="button"
                className="block w-full text-xs text-neutral-500 hover:text-neutral-800 underline underline-offset-4"
                onClick={onBack}
              >
                Explore Seeds first
              </button>
            </div>
          </div>

          {/* Sprout → small plant animation */}
          <div className="flex-1 flex justify-center sm:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-b from-[#FDFDFB] via-[#F5F8F4] to-[#D9E9D6] border border-[#E4E7EC] flex items-end justify-center overflow-hidden"
            >
              <div className="w-28 h-2 rounded-full bg-[#C7D2C5] mb-4" />
              <motion.div
                initial={{ scaleY: 0.7, opacity: 1 }}
                animate={{ scaleY: 1, y: -4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="origin-bottom absolute bottom-6 flex flex-col items-center"
              >
                <div className="w-1.5 h-12 rounded-full bg-[#4D8558]" />
                <div className="flex gap-1 mt-1">
                  <div className="w-3 h-5 rounded-full bg-[#78B27A]" />
                  <div className="w-3 h-6 rounded-full bg-[#78B27A]" />
                  <div className="w-3 h-5 rounded-full bg-[#78B27A]" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {renderStepIndicator()}
        </motion.div>
      )}

      {step === 2 && behaviour === "explorer" && (
        <motion.div
          key="step-2-explorer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="pt-2 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="flex-1 text-center space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Begin by exploring.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Preview how educators design assessments.
              <br />
              React to one Seed you find useful.
              <br />
              Even small actions help Seeds take root.
            </p>

            <div className="mt-4 space-y-2">
              <Button
                className="px-7 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 shadow-md"
                onClick={onBack}
              >
                Explore Seeds
              </Button>
            </div>
          </div>

          {/* Field of small sprouts */}
          <div className="flex-1 flex justify-center sm:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-b from-[#FDFDFB] via-[#F5F8F4] to-[#D9E9D6] border border-[#E4E7EC] flex items-end justify-center overflow-hidden"
            >
              <div className="w-32 h-2 rounded-full bg-[#C7D2C5] mb-4" />
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -3 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute bottom-6 flex gap-4"
              >
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-1 h-8 rounded-full bg-[#5B8F63]" />
                    <div className="flex gap-1 mt-1">
                      <div className="w-3 h-4 rounded-full bg-[#78B27A]" />
                      <div className="w-3 h-4 rounded-full bg-[#78B27A]" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {renderStepIndicator()}
        </motion.div>
      )}
    </div>
  );
}

