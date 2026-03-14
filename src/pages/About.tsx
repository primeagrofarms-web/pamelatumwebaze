import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ucuCampus from "@/assets/ucu-campus.jpg";
import pamelaPortrait from "@/assets/pamela-portrait.jpg";
import { GraduationCap, Heart, Users, BookOpen, Church, Star } from "lucide-react";

const timeline = [
  { period: "Early Life", title: "Childhood & Foundations", text: "Born and raised in Uganda, Pamela grew up in a family that valued faith, education, and community service. These early influences shaped the leader she would become.", icon: Star },
  { period: "Education", title: "Academic Journey", text: "Pamela pursued her education with determination, earning degrees that would prepare her for a career in student affairs and university administration.", icon: GraduationCap },
  { period: "Career", title: "Uganda Christian University", text: "As Dean of Students at UCU, Pamela transformed the student affairs office into a comprehensive support system. She championed mental health awareness, peer mentorship, and holistic student development.", icon: BookOpen },
  { period: "Faith", title: "Faith & Values", text: "Deeply rooted in her Christian faith, Pamela integrated spiritual guidance into her professional work. She led by example, demonstrating that faith and professional excellence could coexist.", icon: Church },
  { period: "Impact", title: "Impact on Students", text: "Thousands of students passed through Pamela's care during her tenure. She was known for remembering names, following up on struggles, and celebrating every student's achievements.", icon: Users },
  { period: "Legacy", title: "An Enduring Legacy", text: "The programs Pamela built, the systems she established, and the values she instilled continue to serve the UCU community. Her legacy lives in every student she mentored.", icon: Heart },
];

const About = () => (
  <Layout>
    {/* Hero with image */}
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={ucuCampus} alt="UCU Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
      </div>
      <div className="memorial-container relative z-10 py-20 md:py-28 text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-accent/40 shadow-2xl">
          <img src={pamelaPortrait} alt="Pamela Tumwebaze" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">About Pamela Tumwebaze</h1>
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
          Mother, mentor, leader, and beloved Dean of Students at Uganda Christian University.
        </p>
      </div>
    </div>

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
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-border" />
          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="relative pl-16 md:pl-20 pb-12 last:pb-0 group">
                <div className="absolute left-2 md:left-4 top-0 w-9 h-9 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                  <item.icon size={16} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <span className="category-badge">{item.period}</span>
                <h3 className="text-xl font-bold mt-1 mb-3 group-hover:text-accent transition-colors duration-200">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Campus image section */}
    <section className="memorial-section bg-secondary">
      <div className="memorial-container">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={ucuCampus} alt="Uganda Christian University Campus" className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">Uganda Christian University, Mukono — where Dean Pamela served</p>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default About;
