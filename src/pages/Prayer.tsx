import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { prayers, scriptures } from "@/data/posts";

const Prayer = () => (
  <Layout>
    <PageHeader
      title="Prayer & Reflection"
      subtitle="A space for prayer, scripture, and quiet reflection in honour of Dean Pamela."
    />

    {/* Scriptures */}
    <section className="memorial-section bg-grey-50">
      <div className="memorial-container max-w-3xl">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-8 text-center">Scripture & Comfort</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {scriptures.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <blockquote className="memorial-card border-l-4 border-gold">
                <p className="text-foreground leading-relaxed italic mb-3">"{s.text}"</p>
                <cite className="text-sm font-semibold text-gold not-italic">
                  — {s.reference}
                </cite>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Prayers */}
    <section className="memorial-section">
      <div className="memorial-container">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-8 text-center">Prayers for This Season</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prayers.map((prayer, i) => (
            <ScrollReveal key={prayer.id} delay={i * 0.1}>
              <div className="memorial-card h-full">
                <h3 className="text-lg font-bold mb-3">{prayer.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{prayer.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Prayer;
