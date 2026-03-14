import ModuleCard from "./ModuleCard";

const modules = [
  { title: "Supply Path & transparency", desc: "Reduce unnecessary hops, understand the flow, and improve buying transparency.", inside: ["Notes", "Audit checklist", "Case"] },
  { title: "Signal-based optimization", desc: "Segments, frequency, bids, rules — do it systematically, not by gut.", inside: ["Notes", "Signals table", "Mini task"] },
  { title: "Discrepancy & debugging", desc: "Diagnose gaps: clicks/revenue/geo/sources and isolate the cause.", inside: ["Playbook", "Analysis template", "FAQ"] },
  { title: "Quality & compliance", desc: "Fraud signals, brand safety, and what to check before scaling.", inside: ["Notes", "Checklist", "Cases"] },
  { title: "Experiments & growth", desc: "Hypotheses, A/B testing, control groups, and how to document learnings.", inside: ["Framework", "Report template", "Case"] },
];

const notes = [
  "What exactly am I optimizing?",
  "What's the main signal?",
  "What's the risk?",
  "How do I measure success?",
];

export default function LearningPathMiddle() {
  return (
    <section id="middle" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Learning path: Middle</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Deeper work: transparency, quality, systematic optimization, and confident debugging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {modules.map((m, i) => (
            <ModuleCard
              key={i}
              number={i + 1}
              title={`Module ${i + 1}: ${m.title}`}
              description={m.desc}
              inside={m.inside}
              delay={i * 60}
            />
          ))}
        </div>

        <div className="scroll-reveal bg-card border border-border rounded-2xl p-6">
          <h3 className="text-base font-semibold text-foreground mb-4">📝 Personal notes</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {notes.map((n) => (
              <div key={n} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
