import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { tributes } from "@/data/posts";

const Tributes = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleTributes = tributes.slice(0, visibleCount);

  return (
    <Layout>
      <PageHeader
        title="Memories & Tributes"
        subtitle="A collection of memories and tributes from those whose lives were touched by Dean Pamela Tumwebaze."
      />
      <section className="memorial-section">
        <div className="memorial-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTributes.map((tribute, i) => (
              <ScrollReveal key={tribute.id} delay={i * 0.08}>
                <div className="memorial-card h-full flex flex-col">
                  <p className="text-muted-foreground leading-relaxed italic flex-1">
                    "{tribute.text}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-border flex justify-between items-end">
                    <div>
                      <p className="font-semibold text-sm text-primary">{tribute.name}</p>
                      {tribute.relationship && (
                        <p className="text-xs text-muted-foreground">{tribute.relationship}</p>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{tribute.date}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {visibleCount < tributes.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((c) => c + 4)}
                className="btn-memorial-outline"
              >
                Load More Tributes
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Tributes;
