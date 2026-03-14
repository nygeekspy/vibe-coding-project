import ModuleCard from "./ModuleCard";
import { Lightbulb } from "lucide-react";

const modules = [
  { title: "Programmatic 101", desc: "What programmatic is, key players, auction basics, and core metrics.", inside: ["Notes", "Ecosystem diagram", "Mini quiz"] },
  { title: "Inventory & formats", desc: "Display/Video/Native, placements, SSP/DSP, where coverage comes from.", inside: ["Notes", "Key terms", "Checklist"] },
  { title: "Tracking & attribution", desc: "Clicks, postbacks, attribution windows, and why numbers differ.", inside: ["Notes", "Attribution FAQ", "Examples"] },
  { title: "Reporting & basic analysis", desc: "How to read reports and interpret CPM/CPC/CPA/CR by main cuts.", inside: ["Notes", "Question template", "Mini task"] },
  { title: "Beginner optimization", desc: "What to optimize first and how not to break performance.", inside: ["Notes", "Checklist", "Common mistakes"] },
  { title: "Troubleshooting", desc: "What to do when there's 'no traffic', 'high discrepancy', or 'low CR'.", inside: ["Notes", "FAQ", "Action algorithm"] },
];

export default function LearningPathBeginner() {
  return (
    <section id="beginner" className="py-20 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="mb-14 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Learning path: Beginner</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            The minimum you need to understand terms, reports, and core programmatic logic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

        <div className="scroll-reveal flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-xl p-4">
          <Lightbulb size={18} className="text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">Tip:</span> Start with Modules 1 → 4, then return to 2/3 as needed.
          </p>
        </div>
      </div>
    </section>
  );
}
