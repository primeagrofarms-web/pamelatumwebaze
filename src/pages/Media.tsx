import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { mediaArticles } from "@/data/posts";
import { ExternalLink } from "lucide-react";

const Media = () => (
  <Layout>
    <PageHeader
      title="Media & Articles"
      subtitle="News coverage and articles related to Dean Pamela Tumwebaze."
    />
    <section className="memorial-section">
      <div className="memorial-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaArticles.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.08}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="memorial-card block h-full group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                      {article.source}
                    </span>
                    <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-gold transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground shrink-0 mt-1" />
                </div>
                <div className="mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
                  {article.date}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Media;
