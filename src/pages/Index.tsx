import { useState } from "react";

const STEPS = [
  {
    id: 1,
    title: "Welcome to Programmatic Onboarding",
    description:
      "This guided flow will walk you through everything you need to get started. It only takes a few minutes.",
    cta: "Get Started",
  },
  {
    id: 2,
    title: "Set Up Your Profile",
    description:
      "Tell us a bit about yourself so we can personalise your experience and suggest the most relevant content.",
    cta: "Continue",
  },
  {
    id: 3,
    title: "Choose Your Path",
    description:
      "Select the workflow that best matches your goals. You can always change this later from your settings.",
    cta: "Continue",
  },
  {
    id: 4,
    title: "You're All Set!",
    description:
      "Your account is ready. Explore the dashboard or dive straight into your first task.",
    cta: "Go to Dashboard",
  },
];

export default function Index() {
  const [step, setStep] = useState(0);

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  function handleNext() {
    if (!isLast) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === step
                  ? "w-8 bg-primary"
                  : i < step
                  ? "w-2 bg-primary/40"
                  : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Card */}
        <div
          key={step}
          className="bg-card border border-border rounded-2xl p-8 shadow-sm animate-fade-up"
        >
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Step {current.id} of {STEPS.length}
          </span>

          <h1 className="mt-3 text-2xl font-semibold text-foreground">
            {current.title}
          </h1>

          <p className="mt-3 text-muted-foreground leading-relaxed">
            {current.description}
          </p>

          <div className="mt-8 flex items-center justify-between">
            {step > 0 ? (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back
              </button>
            ) : (
              <span />
            )}

            <button
              onClick={handleNext}
              disabled={isLast}
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium
                         hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed
                         transition-colors"
            >
              {current.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
