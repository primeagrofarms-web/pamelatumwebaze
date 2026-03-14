import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const SubmitTribute = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  const inputClass =
    "w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-200";

  return (
    <Layout>
      <PageHeader
        title="Submit a Tribute"
        subtitle="Share your memories, stories, and tributes to honour Dean Pamela Tumwebaze."
      />
      <section className="memorial-section">
        <div className="memorial-container max-w-2xl">
          <ScrollReveal>
            <div className="memorial-card">
              <p className="text-sm text-muted-foreground mb-6 italic">
                All tributes are reviewed before publication. Your submission will be handled
                with care and respect.
              </p>

              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-gold-light rounded-lg p-8 text-center"
                  >
                    <h3 className="text-xl font-bold mb-2">Thank You</h3>
                    <p className="text-muted-foreground text-sm">
                      Your tribute has been submitted and will be reviewed before publication.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="btn-memorial-outline mt-6 text-sm"
                    >
                      Submit Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Your Tribute *
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        rows={6}
                        placeholder="Share your memory or tribute..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Photo (optional)
                      </label>
                      <input type="file" accept="image/*" className="text-sm text-muted-foreground" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Audio Message (optional)
                      </label>
                      <input type="file" accept="audio/*" className="text-sm text-muted-foreground" />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`btn-memorial w-full text-center ${
                        loading ? "opacity-70 cursor-wait" : ""
                      }`}
                    >
                      {loading ? "Submitting..." : "Submit Tribute"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default SubmitTribute;
