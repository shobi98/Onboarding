interface EmailPreviewProps {
  onBack: () => void;
}

export function EmailPreview({ onBack }: EmailPreviewProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-neutral-900">
          Welcome Email Preview
        </h1>
        <button
          onClick={onBack}
          className="text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-4"
        >
          ← Back to onboarding
        </button>
      </div>

      <div className="rounded-2xl bg-[#F4F5F7] p-4 sm:p-6">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white shadow-xl overflow-hidden">
          {/* Header */}
          <div className="border-b border-neutral-100 px-6 py-4 flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#71ceb5]" />
            <span className="text-[13px] font-semibold tracking-[0.16em] uppercase text-neutral-900">
              prepai
            </span>
          </div>

          {/* Hero image */}
          <div className="w-full h-40 sm:h-56 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Educator reviewing AI-generated assessments"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body */}
          <div className="px-6 py-6 sm:py-8 text-[13px] sm:text-[14px] leading-relaxed text-neutral-700">
            <div className="inline-flex items-center rounded-full bg-[#E7F7F2] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#0B3B33] uppercase mb-4">
              Welcome to PrepAI
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2">
              Hi {'{{first_name}}'}, welcome to PrepAI.
            </h2>

            <p className="mb-4">
              PrepAI helps you turn your content into structured assessments — without spending hours
              drafting questions manually.
            </p>

            <p className="mb-3 font-medium text-neutral-900">
              In just a few clicks, you can:
            </p>

            <ul className="mb-4 space-y-1 pl-5 list-disc">
              <li>Convert your notes into ready-to-use quizzes</li>
              <li>Automatically generate answers and distractors</li>
              <li>Run live tests with instant grading</li>
              <li>Export assessments for offline use</li>
            </ul>

            <p className="mb-4">
              Instead of spending time creating questions, you can focus on teaching and student learning.
            </p>

            <div className="bg-neutral-50 rounded-xl px-4 py-3 mb-5">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0B3B33] mb-1">
                Your first step
              </p>
              <p>
                Start with a paragraph, document, or topic — and generate your first quiz in under two minutes.
              </p>
            </div>

            <div className="mb-4">
              <button
                className="inline-flex items-center justify-center rounded-full bg-[#71ceb5] text-[#022C22] text-[13px] font-semibold px-5 py-2 shadow-[0_12px_30px_rgba(6,95,70,0.28)]"
                type="button"
              >
                👉 Create My First Assessment
              </button>
            </div>

            <p className="text-[12px] text-neutral-500">— Team PrepAI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

