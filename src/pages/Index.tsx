import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts, tributes } from "@/data/posts";

const Index = () => {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const recentTributes = tributes.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <header className="bg-grey-50">
        <div className="memorial-container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Remembering{" "}
                <span className="block">Pamela Tumwebaze</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Dean of Students, Uganda Christian University.
                <br />A life of faith, leadership, and unwavering mentorship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/submit-tribute" className="btn-memorial">
                  Share a Tribute
                </Link>
                <Link to="/about" className="btn-memorial-outline">
                  Her Story
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="aspect-[4/5] bg-grey-100 rounded-lg flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <span className="font-serif text-3xl text-primary">PT</span>
                  </div>
                  <p className="text-sm">Photo Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Latest Updates */}
      <section className="memorial-section">
        <div className="memorial-container">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Latest Updates</h2>
              <Link to="/investigation" className="gold-link text-sm">
                View all updates →
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <Link to={`/investigation`} className="memorial-card block h-full">
                  <span className="category-badge">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
                    {post.date}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Tributes */}
      <section className="memorial-section bg-grey-50">
        <div className="memorial-container">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Recent Tributes</h2>
              <Link to="/tributes" className="gold-link text-sm">
                View all tributes →
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentTributes.map((tribute, i) => (
              <ScrollReveal key={tribute.id} delay={i * 0.1}>
                <div className="memorial-card h-full flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed italic flex-1">
                    "{tribute.text.slice(0, 150)}..."
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-semibold text-sm text-primary">{tribute.name}</p>
                    {tribute.relationship && (
                      <p className="text-xs text-muted-foreground">{tribute.relationship}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Memory */}
      <section className="memorial-section">
        <div className="memorial-container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="category-badge">Featured Memory</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
                "She taught us that leadership is service, and service is love."
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dean Pamela's impact extended far beyond the walls of Uganda Christian University.
                She was a mother, a mentor, a counselor, and a friend to thousands. Her legacy is
                measured not in accolades, but in the lives she transformed through her
                unwavering dedication to others.
              </p>
              <Link to="/submit-tribute" className="btn-memorial">
                Share Your Memory
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
