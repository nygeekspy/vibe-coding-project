import { useState } from "react";
import { ArrowRight, Clock, Search, X } from "lucide-react";

const filters = ["All", "Beginner", "Middle", "Glossary", "Cases", "Playbooks"];

interface Material {
  title: string;
  tag: string;
  desc: string;
}

const materials: Material[] = [
  { title: "RTB auction explained in plain English", tag: "Beginner", desc: "Step-by-step breakdown of how real-time bidding works." },
  { title: "Core metrics: CPM, CPC, CPA, CR, ROAS", tag: "Beginner", desc: "Definitions, formulas, and when to use each metric." },
  { title: "Why discrepancy happens and how to read it", tag: "Middle", desc: "Common causes and a diagnostic framework." },
  { title: "Supply chain: DSP / SSP / Exchanges", tag: "Beginner", desc: "Who does what and where money flows." },
  { title: "Campaign launch checklist", tag: "Playbooks", desc: "Pre-flight checks before going live." },
  { title: "Optimization: from red to green", tag: "Middle", desc: "A practical guide to improving underperforming campaigns." },
  { title: "Segmentation by GEO and sources", tag: "Middle", desc: "How to slice data for smarter decisions." },
  { title: "Brand safety: the essentials", tag: "Cases", desc: "What to watch for and how to set guardrails." },
  { title: "Mini case: 'no traffic' — diagnosis flow", tag: "Cases", desc: "Walk through a real troubleshooting scenario." },
];

const tagColor: Record<string, string> = {
  Beginner: "bg-primary/10 text-primary",
  Middle: "bg-secondary/15 text-secondary",
  Cases: "bg-accent/15 text-accent",
  Playbooks: "bg-primary/10 text-primary",
  Glossary: "bg-muted text-muted-foreground",
};

export default function MaterialsLibrary() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = materials.filter((m) => {
    const matchesTag = active === "All" || m.tag === active;
    const query = search.toLowerCase();
    const matchesSearch =
      !query ||
      m.title.toLowerCase().includes(query) ||
      m.desc.toLowerCase().includes(query) ||
      m.tag.toLowerCase().includes(query);
    return matchesTag && matchesSearch;
  });

  return (
    <section id="materials" className="py-20 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="mb-8 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Materials & starter notes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A curated starter set (5–10) with navigation — the list will grow over time.
          </p>
        </div>

        {/* Search */}
        <div className="scroll-reveal relative mb-6 max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search materials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="scroll-reveal flex gap-2 mb-10 overflow-x-auto pb-2 -mx-1 px-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`filter-chip whitespace-nowrap ${active === f ? "filter-chip-active" : "filter-chip-inactive"}`}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((m, i) => (
              <div
                key={m.title}
                className="scroll-reveal bg-card border border-border rounded-2xl p-6 card-hover flex flex-col"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className={`self-start px-2.5 py-0.5 rounded-md text-xs font-medium mb-4 ${tagColor[m.tag] || ""}`}>
                  {m.tag}
                </span>
                <h3 className="text-base font-semibold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{m.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} /> ~5 min read • updated recently
                  </span>
                  <button className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                    Open <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search size={40} className="text-muted-foreground/40 mb-4" />
            <p className="text-foreground font-medium mb-1">No materials found</p>
            <p className="text-muted-foreground text-sm">
              Try adjusting your search or selecting a different filter.
            </p>
            <button
              onClick={() => { setSearch(""); setActive("All"); }}
              className="mt-4 text-primary text-sm font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
