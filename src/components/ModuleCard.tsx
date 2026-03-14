import { ArrowRight } from "lucide-react";

interface ModuleCardProps {
  number: number;
  title: string;
  description: string;
  inside: string[];
  delay?: number;
}

export default function ModuleCard({ number, title, description, inside, delay = 0 }: ModuleCardProps) {
  return (
    <div
      className="scroll-reveal bg-card border border-border rounded-2xl p-6 card-hover flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold mb-4">
        {number}
      </span>
      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <div className="mb-5 mt-auto">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Inside</p>
        <ul className="space-y-1">
          {inside.map((item) => (
            <li key={item} className="text-sm text-foreground flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:gap-2.5 transition-all">
        Open module <ArrowRight size={14} />
      </button>
    </div>
  );
}
