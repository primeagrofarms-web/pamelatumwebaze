export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  featured?: boolean;
}

export interface Tribute {
  id: string;
  name: string;
  text: string;
  date: string;
  relationship?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "legacy-of-mentorship",
    title: "The Legacy of Mentorship",
    author: "UCU Community",
    date: "February 15, 2026",
    category: "Reflections",
    tags: ["legacy", "mentorship", "students"],
    excerpt: "How Dean Pamela shaped a generation of UCU students through unwavering guidance and compassion.",
    content: "Dean Pamela Tumwebaze dedicated her career to nurturing the next generation of leaders at Uganda Christian University. Her office was always open, her counsel always available, and her belief in every student unwavering. She understood that education extended far beyond the classroom — it was about shaping character, instilling values, and building confidence.\n\nStudents who passed through her care speak of a woman who remembered names, followed up on struggles, and celebrated every achievement as if it were her own. Her mentorship was not performative; it was deeply personal and rooted in genuine love for young people.\n\nThe programs she established — from peer counseling initiatives to leadership development workshops — continue to operate today, a testament to the systems she built and the people she trained to carry them forward.",
    featured: true,
  },
  {
    id: "investigation-update-feb",
    title: "Update on the Investigation",
    author: "Editorial Team",
    date: "February 12, 2026",
    category: "Updates",
    tags: ["investigation", "official"],
    excerpt: "Official statements and developments regarding the events of February 11, 2026.",
    content: "Following the tragic events of February 11, 2026, authorities have launched a thorough investigation into the circumstances surrounding the passing of Dean Pamela Tumwebaze. This page will serve as a repository for verified information and official statements.\n\nWe are committed to sharing only confirmed information from official sources. Speculation and unverified claims will not be published on this platform. We ask the community to exercise patience and restraint as the investigation proceeds.\n\nAnyone with relevant information is encouraged to contact the appropriate authorities.",
    featured: true,
  },
  {
    id: "community-mourns",
    title: "A Community in Mourning",
    author: "UCU Alumni Association",
    date: "February 13, 2026",
    category: "Reflections",
    tags: ["community", "mourning", "tribute"],
    excerpt: "The UCU community comes together to honour a woman who gave so much of herself to others.",
    content: "The halls of Uganda Christian University feel different now. The absence of Dean Pamela Tumwebaze is felt in every corridor, every gathering, every quiet moment where her presence once brought comfort and direction.\n\nFaculty, students, and alumni have come together in an extraordinary display of solidarity and love. Memorial services, prayer vigils, and quiet gatherings have been held across campus and in communities where her influence reached.\n\nHer colleagues describe a professional who led with integrity, advocated tirelessly for student welfare, and maintained the highest standards while never losing her warmth and humanity.",
  },
  {
    id: "faith-and-service",
    title: "A Life Rooted in Faith and Service",
    author: "Campus Ministry",
    date: "February 14, 2026",
    category: "Reflections",
    tags: ["faith", "service", "values"],
    excerpt: "Exploring the spiritual foundation that guided Dean Pamela's life and work at UCU.",
    content: "For Dean Pamela, faith was not a separate compartment of life — it was the foundation upon which everything else was built. Her work at Uganda Christian University was, in her own words, a calling rather than merely a career.\n\nShe integrated spiritual guidance into her counseling, led by example in campus worship, and encouraged students to develop their own relationship with God alongside their academic pursuits. Her approach was inclusive and compassionate, welcoming students of all backgrounds while maintaining the Christian values that defined the institution.",
  },
  {
    id: "student-welfare-programs",
    title: "The Programs She Built",
    author: "Student Affairs Office",
    date: "February 16, 2026",
    category: "Legacy",
    tags: ["programs", "welfare", "innovation"],
    excerpt: "A look at the student welfare initiatives Dean Pamela championed during her tenure.",
    content: "Under Dean Pamela's leadership, the Student Affairs office at UCU underwent a transformation. She introduced peer mentorship programs, mental health awareness campaigns, and emergency support systems that continue to serve students today.\n\nHer vision was holistic — she believed that students could not succeed academically if their basic needs and emotional wellbeing were not addressed. She fought for increased funding for student services and built partnerships with organizations that could provide additional support.",
  },
];

export const tributes: Tribute[] = [
  {
    id: "1",
    name: "Grace Nakamya",
    text: "Mama Pamela, as we called her, was more than a Dean. She was a mother to every student who walked through her door. She prayed with me during my darkest moments and celebrated my graduation as if I were her own child. Heaven has gained an angel.",
    date: "February 12, 2026",
    relationship: "Former Student, Class of 2022",
  },
  {
    id: "2",
    name: "Dr. James Mugisha",
    text: "A colleague of unmatched integrity. Pamela's commitment to student welfare was not just professional — it was deeply personal. She set a standard that we all aspired to meet. The university will not be the same without her.",
    date: "February 12, 2026",
    relationship: "Faculty Colleague",
  },
  {
    id: "3",
    name: "Sarah Achieng",
    text: "She helped me when no one else would. When I couldn't afford my fees, she didn't just offer words — she found solutions. She taught me that leadership is service, and service is love. I carry her lessons every day.",
    date: "February 13, 2026",
    relationship: "Former Student, Class of 2024",
  },
  {
    id: "4",
    name: "Rev. David Okonkwo",
    text: "Pamela's faith was her compass. Every decision she made was filtered through prayer and scripture. She was a light in our university community, and that light will continue to shine through the lives she touched.",
    date: "February 13, 2026",
    relationship: "University Chaplain",
  },
  {
    id: "5",
    name: "Emmanuel Tumusiime",
    text: "When I was struggling with mental health issues during my second year, Dean Pamela personally ensured I received counseling. She checked on me weekly. That level of care is rare and precious.",
    date: "February 14, 2026",
    relationship: "Current Student",
  },
  {
    id: "6",
    name: "Martha Birungi",
    text: "My mother's legacy is not measured in titles or accolades, but in the thousands of lives she touched with kindness, wisdom, and unwavering love. We miss her beyond words.",
    date: "February 11, 2026",
    relationship: "Family Member",
  },
];

export const prayers = [
  {
    id: "1",
    title: "A Prayer for Peace",
    text: "Lord, grant us peace in this time of sorrow. Comfort those who mourn, strengthen those who seek justice, and guide us all with Your wisdom. May the legacy of love that Pamela built continue to flourish.",
  },
  {
    id: "2",
    title: "A Prayer for the Family",
    text: "Heavenly Father, wrap Your arms around Pamela's family. Give them strength to face each day, comfort in their memories, and hope in Your promises. Let them feel the love of a grateful community surrounding them.",
  },
  {
    id: "3",
    title: "A Prayer for Justice",
    text: "God of justice and mercy, we pray for truth to prevail. Guide the hands of those investigating, protect the integrity of the process, and let righteousness be the foundation of every decision made.",
  },
  {
    id: "4",
    title: "A Prayer for the UCU Community",
    text: "Lord, be with the students, faculty, and staff of Uganda Christian University. Unite them in love, strengthen them in grief, and inspire them to carry forward the values that Pamela championed.",
  },
];

export const scriptures = [
  { reference: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { reference: "John 14:27", text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid." },
  { reference: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
  { reference: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

export const mediaArticles = [
  {
    id: "1",
    title: "Uganda Christian University Mourns Dean of Students",
    source: "Daily Monitor",
    date: "February 12, 2026",
    excerpt: "The university community pays tribute to a beloved leader and mentor.",
    url: "#",
  },
  {
    id: "2",
    title: "Colleagues Remember Pamela Tumwebaze's Impact",
    source: "New Vision",
    date: "February 13, 2026",
    excerpt: "Faculty and staff share memories of a dedicated educator and administrator.",
    url: "#",
  },
  {
    id: "3",
    title: "Students Organize Memorial Service for Dean Pamela",
    source: "Campus Bee",
    date: "February 14, 2026",
    excerpt: "Hundreds gather to honour the legacy of UCU's beloved Dean of Students.",
    url: "#",
  },
  {
    id: "4",
    title: "The Legacy of Student Welfare at UCU",
    source: "The Observer",
    date: "February 16, 2026",
    excerpt: "An in-depth look at the programs and systems Dean Tumwebaze built during her tenure.",
    url: "#",
  },
];
