import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

const timeline = [
  { period: "Early Life", title: "Childhood & Foundations", text: "Born and raised in Uganda, Pamela grew up in a family that valued faith, education, and community service. These early influences shaped the leader she would become." },
  { period: "Education", title: "Academic Journey", text: "Pamela pursued her education with determination, earning degrees that would prepare her for a career in student affairs and university administration." },
  { period: "Career", title: "Uganda Christian University", text: "As Dean of Students at UCU, Pamela transformed the student affairs office into a comprehensive support system. She championed mental health awareness, peer mentorship, and holistic student development." },
  { period: "Faith", title: "Faith & Values", text: "Deeply rooted in her Christian faith, Pamela integrated spiritual guidance into her professional work. She led by example, demonstrating that faith and professional excellence could coexist." },
  { period: "Impact", title: "Impact on Students", text: "Thousands of students passed through Pamela's care during her tenure. She was known for remembering names, following up on struggles, and celebrating every student's achievements." },
  { period: "Legacy", title: "An Enduring Legacy", text: "The programs Pamela built, the systems she established, and the values she instilled continue to serve the UCU community. Her legacy lives in every student she mentored." },
];

const About = () => (
  <Layout>
    <PageHeader
      title="About Pamela Tumwebaze"
      subtitle="Mother, mentor, leader, and beloved Dean of Students at Uganda Christian University."
    />
    <section className="memorial-section">
      <div className="memorial-container max-w-3xl">
        <ScrollReveal>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Pamela Tumwebaze dedicated her life to the service of others. As Dean of Students
            at Uganda Christian University, she touched thousands of lives through her
            compassion, wisdom, and unwavering commitment to student welfare. She passed away
            on February 11, 2026, leaving behind a legacy that will endure for generations.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="relative pl-12 md:pl-20 pb-12 last:pb-0">
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-gold-light border-2 border-gold flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>
                <span className="category-badge">{item.period}</span>
                <h3 className="text-xl font-bold mt-1 mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
