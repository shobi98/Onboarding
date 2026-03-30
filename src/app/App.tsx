import { useState } from 'react';
import { ProgressDots } from '@/app/components/onboarding/ProgressDots';
import { SeedIntro } from '@/app/components/onboarding/SeedIntro';
import { RecognitionModel } from '@/app/components/onboarding/RecognitionModel';
import { EducatorChoice } from '@/app/components/onboarding/EducatorChoice';
import { ExitScreen } from '@/app/components/onboarding/ExitScreen';
import { SeedPath } from '@/app/components/onboarding/SeedPath';
import { PlanterType } from "@/app/components/onboarding/PlanterType";
import { ReuserType } from "@/app/components/onboarding/ReuserType";
import { ExplorerType } from "@/app/components/onboarding/ExplorerType";
import { EmailPreview } from '@/app/components/EmailPreview';
import { OnboardingV2 } from '@/app/components/onboarding-v2/OnboardingV2';
import { CommunityHome } from '@/app/components/community/CommunityHome';
import { AIEnabledEducatorCertificate } from '@/app/components/community/AIEnabledEducatorCertificate';

type EducatorMode = "planter" | "reuser" | "explorer";
type ViewMode = 'onboarding' | 'email' | 'onboardingV2' | 'community' | 'certificate';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [educatorMode, setEducatorMode] = useState<EducatorMode>("planter");
  const [viewMode, setViewMode] = useState<ViewMode>('certificate');

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleSkip = () => {
    // Skip to the final screen
    setCurrentStep(3);
  };

  const handleChoosePlanter = () => {
    setEducatorMode("planter");
    setCurrentStep(2);
  };

  const handleChooseReuser = () => {
    setEducatorMode("reuser");
    setCurrentStep(2);
  };

  const handleChooseExplorer = () => {
    setEducatorMode("explorer");
    setCurrentStep(2);
  };

  const handleEnterCommunity = () => {
    // This would typically navigate to the main app
    console.log('Entering community with mode:', educatorMode);
  };

  const showProgress = viewMode === 'onboarding';

  if (viewMode === 'certificate') {
    return <AIEnabledEducatorCertificate onBack={() => setViewMode('community')} />;
  }

  if (viewMode === 'community') {
    return <CommunityHome onBack={() => setViewMode('onboarding')} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8 sm:px-6 sm:py-10 gap-4">
      {viewMode === 'onboarding' && (
        <div className="relative w-full max-w-2xl sm:max-w-3xl rounded-3xl bg-[#F5F3EF] shadow-2xl border border-white/60 overflow-hidden">
          {/* Progress Dots - bottom of card, same on every page */}
          {showProgress && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
              <ProgressDots total={3} current={currentStep < 3 ? currentStep : 2} />
            </div>
          )}

          {/* Screen Router */}
          {currentStep === 0 && (
            <SeedIntro onNext={handleNext} onSkip={handleSkip} />
          )}
          
          {currentStep === 1 && (
            <EducatorChoice
            onChoosePlanter={handleChoosePlanter}
            onChooseReuser={handleChooseReuser}
            onChooseExplorer={handleChooseExplorer}
              onSkip={handleSkip}
            />
          )}
          
        {currentStep === 2 && educatorMode === "planter" && (
          <PlanterType
            onPlantSeed={() => setCurrentStep(3)}
            onExploreFirst={() => setEducatorMode("explorer")}
            onSkip={handleSkip}
          />
        )}

        {currentStep === 2 && educatorMode === "reuser" && (
          <ReuserType
            onReuseSeeds={() => setCurrentStep(3)}
            onExploreFirst={() => setEducatorMode("explorer")}
            onSkip={handleSkip}
          />
        )}

        {currentStep === 2 && educatorMode === "explorer" && (
          <ExplorerType
            onExploreSeeds={() => setCurrentStep(3)}
            onSkip={handleSkip}
          />
        )}
          
          {currentStep === 3 && (
            <ExitScreen
              educatorMode={educatorMode}
              onEnterCommunity={handleEnterCommunity}
            />
          )}
        </div>
      )}

      {viewMode === 'email' && (
        <EmailPreview onBack={() => setViewMode('onboarding')} />
      )}

      {viewMode === 'onboardingV2' && (
        <OnboardingV2 onBack={() => setViewMode('onboarding')} />
      )}


    </div>
  );
}
