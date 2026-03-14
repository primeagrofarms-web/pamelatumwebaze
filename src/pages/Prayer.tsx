import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { prayers, scriptures } from "@/data/posts";
import { Flame, BookOpen } from "lucide-react";
import prayerBg from "@/assets/prayer-bg.jpg";
import scriptureBg from "@/assets/scripture-bg.jpg";

const Prayer = () => {
  const [expandedPrayer, setExpandedPrayer] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={prayerBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="memorial-container relative z-10 py-20 md:py-28 text-center">
          <Flame size={40} className="text-accent mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Prayer & Reflection</h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            A space for prayer, scripture, and quiet reflection in honour of Dean Pamela.
          </p>
        </div>
      </div>

      {/* Scriptures */}
      <section className="memorial-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={scriptureBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="memorial-container max-w-3xl relative z-10">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-8">
              <BookOpen size={20} className="text-accent" />
              <h2 className="text-2xl font-bold text-center">Scripture & Comfort</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {scriptures.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <blockquote className="memorial-card border-l-4 border-accent group hover:border-l-8 transition-all duration-300">
                  <p className="text-foreground leading-relaxed italic mb-3 text-lg group-hover:text-primary transition-colors duration-200">"{s.text}"</p>
                  <cite className="text-sm font-semibold text-accent not-italic">
                    — {s.reference}
                  </cite>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prayers */}
      <section className="memorial-section bg-secondary">
        <div className="memorial-container">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Flame size={20} className="text-accent" />
              <h2 className="text-2xl font-bold text-center">Prayers for This Season</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prayers.map((prayer, i) => (
              <ScrollReveal key={prayer.id} delay={i * 0.1}>
                <div
                  className={`memorial-card h-full cursor-pointer transition-all duration-300 ${
                    expandedPrayer === prayer.id ? "ring-2 ring-accent shadow-lg" : ""
                  }`}
                  onClick={() => setExpandedPrayer(expandedPrayer === prayer.id ? null : prayer.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Flame size={14} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-3">{prayer.title}</h3>
                      <p className={`text-muted-foreground leading-relaxed text-sm transition-all duration-300 ${
                        expandedPrayer === prayer.id ? "" : "line-clamp-3"
                      }`}>
                        {prayer.text}
                      </p>
                      <button className="text-xs text-accent font-semibold mt-2 hover:underline">
                        {expandedPrayer === prayer.id ? "Read less" : "Read full prayer"}
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prayer;
