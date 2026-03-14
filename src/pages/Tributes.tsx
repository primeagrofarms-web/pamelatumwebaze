import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { tributes } from "@/data/posts";
import { Heart, Filter } from "lucide-react";

const Tributes = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const visibleTributes = tributes.slice(0, visibleCount);

  const toggleLike = (id: string) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <Layout>
      <PageHeader
        title="Memories & Tributes"
        subtitle="A collection of memories and tributes from those whose lives were touched by Dean Pamela Tumwebaze."
      />
      <section className="memorial-section">
        <div className="memorial-container">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-muted-foreground">{tributes.length} tributes shared</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTributes.map((tribute, i) => (
              <ScrollReveal key={tribute.id} delay={i * 0.08}>
                <div className="memorial-card h-full flex flex-col group">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-serif font-bold text-lg shrink-0">
                      {tribute.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-primary">{tribute.name}</p>
                      {tribute.relationship && (
                        <p className="text-xs text-muted-foreground">{tribute.relationship}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic flex-1">
                    "{tribute.text}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">{tribute.date}</p>
                    <button
                      onClick={() => toggleLike(tribute.id)}
                      className={`flex items-center gap-1 text-xs transition-all duration-200 hover:scale-110 ${
                        liked.has(tribute.id) ? "text-destructive" : "text-muted-foreground hover:text-destructive"
                      }`}
                    >
                      <Heart size={14} fill={liked.has(tribute.id) ? "currentColor" : "none"} />
                      {liked.has(tribute.id) ? "Loved" : "Love this"}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {visibleCount < tributes.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((c) => c + 4)}
                className="btn-memorial-outline hover:scale-105 transition-transform duration-200"
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
