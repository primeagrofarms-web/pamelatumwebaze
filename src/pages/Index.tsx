import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts, tributes } from "@/data/posts";
import { Heart, ArrowRight, BookOpen, Users, Flame } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import pamelaPortrait from "@/assets/pamela-portrait.jpg";

const Index = () => {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const recentTributes = tributes.slice(0, 3);
  const [litCandles, setLitCandles] = useState(147);
  const [hasLit, setHasLit] = useState(false);

  const lightCandle = () => {
    if (!hasLit) {
      setLitCandles((c) => c + 1);
      setHasLit(true);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCampus} alt="Uganda Christian University campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="memorial-container relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-6">
                1963 — 2026
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
                Remembering{" "}
                <span className="block text-accent">Pamela Tumwebaze</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
                Dean of Students, Uganda Christian University.
                <br />A life of faith, leadership, and unwavering mentorship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/submit-tribute" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 hover:shadow-lg">
                  <Heart size={16} />
                  Share a Tribute
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/20 hover:scale-105">
                  Her Story
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-accent/30">
                  <img src={pamelaPortrait} alt="Pamela Tumwebaze" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-xs font-semibold">Dean of Students</p>
                  <p className="text-xs opacity-80">UCU, Mukono</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground">
        <div className="memorial-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, label: "Students Mentored", value: "5,000+" },
              { icon: BookOpen, label: "Years of Service", value: "15+" },
              { icon: Heart, label: "Tributes Shared", value: `${tributes.length}+` },
              { icon: Flame, label: "Candles Lit", value: litCandles.toString() },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon size={20} className="text-accent mb-2" />
                <p className="text-2xl md:text-3xl font-bold font-serif">{stat.value}</p>
                <p className="text-xs text-primary-foreground/60 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Light a Candle */}
      <section className="memorial-section bg-gradient-to-b from-secondary to-background">
        <div className="memorial-container text-center">
          <ScrollReveal>
            <Flame size={32} className="text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Light a Candle</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Join {litCandles} others in lighting a virtual candle in memory of Dean Pamela.
            </p>
            <button
              onClick={lightCandle}
              disabled={hasLit}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                hasLit
                  ? "bg-accent/20 text-accent cursor-default"
                  : "bg-accent text-accent-foreground hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
              }`}
            >
              <AnimatePresence mode="wait">
                {hasLit ? (
                  <motion.span
                    key="lit"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Flame size={18} className="animate-pulse" /> Thank you for lighting a candle 🕯️
                  </motion.span>
                ) : (
                  <motion.span key="unlit" className="flex items-center gap-2">
                    <Flame size={18} /> Light a Candle
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="memorial-section">
        <div className="memorial-container">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="category-badge">Latest</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1">Updates & Reflections</h2>
              </div>
              <Link to="/investigation" className="gold-link text-sm inline-flex items-center gap-1 group">
                View all
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <Link to="/investigation" className="memorial-card block h-full group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l transition-all duration-300 group-hover:w-1.5" />
                  <div className="pl-4">
                    <span className="category-badge">{post.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-accent transition-colors duration-200">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                      <span>{post.date}</span>
                      <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                        Read more <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Tributes */}
      <section className="memorial-section bg-secondary">
        <div className="memorial-container">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="category-badge">Voices</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1">Recent Tributes</h2>
              </div>
              <Link to="/tributes" className="gold-link text-sm inline-flex items-center gap-1 group">
                View all
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentTributes.map((tribute, i) => (
              <ScrollReveal key={tribute.id} delay={i * 0.1}>
                <div className="memorial-card h-full flex flex-col group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4 font-serif font-bold text-lg">
                    {tribute.name.charAt(0)}
                  </div>
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCampus} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="memorial-container relative z-10 py-20 md:py-28">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-6">
                Featured Memory
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mt-3 mb-6 text-primary-foreground">
                "She taught us that leadership is service, and service is love."
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-8 text-lg">
                Dean Pamela's impact extended far beyond the walls of Uganda Christian University.
                She was a mother, a mentor, a counselor, and a friend to thousands.
              </p>
              <Link to="/submit-tribute" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 hover:shadow-lg">
                <Heart size={16} />
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
