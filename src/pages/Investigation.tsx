import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/data/posts";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const Investigation = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <PageHeader
        title="Justice & Investigation Updates"
        subtitle="Verified information and developments regarding the events of February 11, 2026."
      />
      <section className="memorial-section">
        <div className="memorial-container">
          {/* Disclaimer */}
          <ScrollReveal>
            <div className="memorial-card bg-gold-light mb-10 border-l-4 border-gold">
              <p className="text-sm text-primary leading-relaxed">
                <strong>Information Disclaimer:</strong> This page publishes only verified
                information from official sources. We do not engage in speculation. If you have
                relevant information, please contact the appropriate authorities.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Posts */}
          <div className="space-y-6">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.08}>
                <article className="memorial-card">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="category-badge">{post.category}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">By {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {expandedPost === post.id ? post.content : post.excerpt}
                  </p>
                  <button
                    onClick={() =>
                      setExpandedPost(expandedPost === post.id ? null : post.id)
                    }
                    className="gold-link text-sm"
                  >
                    {expandedPost === post.id ? "Read less" : "Read more →"}
                  </button>
                  {expandedPost === post.id && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      {/* Comment Demo */}
                      <CommentSection postId={post.id} />
                    </div>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const CommentSection = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setComments([...comments, { name, text }]);
    setName("");
    setText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="mt-6">
      <h4 className="font-semibold text-sm mb-4">Comments</h4>
      <p className="text-xs text-muted-foreground mb-4 italic">
        Comments are moderated before appearing publicly.
      </p>
      {comments.map((c, i) => (
        <div key={i} className="bg-muted rounded p-3 mb-2">
          <p className="font-semibold text-xs text-primary">{c.name}</p>
          <p className="text-sm text-muted-foreground">{c.text}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="space-y-3 mt-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded text-sm bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow duration-200"
        />
        <textarea
          placeholder="Your comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-border rounded text-sm bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow duration-200 resize-none"
        />
        <button type="submit" className="btn-memorial text-sm px-4 py-2">
          Post Comment
        </button>
        {submitted && (
          <p className="text-sm text-gold font-medium animate-[fadeIn_0.3s_ease-out]">
            Comment submitted for moderation.
          </p>
        )}
      </form>
    </div>
  );
};

export default Investigation;
