import {
  Cloud, Code2, BarChart3, Wrench,
  Globe, Layout, Users, Database,
  Server, GitBranch, FileCode, FileJson,
  MonitorSmartphone, PenTool, Zap, BookOpen,
} from 'lucide-react'

/* =====================================================
   PERSONAL INFO
   ===================================================== */
export const personalInfo = {
  name: 'Ricalyn Perriras',
  firstName: 'Ricalyn',
  initials: 'RP',
  role: 'Software Engineer | Microsoft Certified: Azure Fundamentals',
  tagline: 'Building Digital Experiences That Matter',
  subTagline:
    'Driven by curiosity and continuous learning, I craft technology solutions that are both functional and impactful. From cloud platforms to data-driven systems, I enjoy turning complex challenges into simple, effective experiences.',
  email: 'perrirasricalyn@gmail.com',
  location: 'Makati, Philippines',
  linkedin: 'https://www.linkedin.com/in/ricalyn-perriras-3a3547209/',
  github: 'https://github.com/rclynn',
  facebook: 'https://www.facebook.com/ricalyn.perreras',
  tiktok: 'https://www.tiktok.com/@rclynn2',
  instagram: 'https://www.instagram.com/_rclyn/',
  youtube: 'https://www.youtube.com/@rclyn',
  resumeUrl: '/Perriras_Ricalyn.pdf',
}

/* =====================================================
   BIO
   ===================================================== */
export const bio = `I am a Software Engineer with a Bachelor of Science in Information Technology from Pangasinan State University, where I graduated with Academic Distinction and received a Special Citation for Leadership.

My journey spans software development, technical support, customer service, and freelance projects - giving me a unique blend of technical expertise and strong communication skills. This diverse experience has strengthened my problem-solving abilities, adaptability, and collaboration with cross-functional teams, allowing me to consistently deliver high-quality solutions in fast-paced environments.

I am a Microsoft Azure Fundamentals certified professional, committed to continuous learning and innovation. I am passionate about leveraging technology to build scalable, efficient, and user-centered solutions that create meaningful business impact and enhance digital experiences.`

/* =====================================================
   EXPERIENCE
   ===================================================== */
export const experience = [
  {
    title: 'Associate Software Engineer',
    company: 'Accenture',
    period: 'Nov 2024 - Present',
    description:
      'Performing frontend testing and troubleshooting on Google Reservations. Working with Salesforce, Google Search & Maps. Mentoring new team members on workflows and processes.',
    current: true,
  },
  {
    title: 'Customer Service Representative',
    company: 'Staff Alliances Inc.',
    period: 'Feb 2024 - Oct 2024',
    description:
      'Handled inbound/outbound calls, resolved complaints efficiently, and maintained high customer satisfaction while managing high call volumes.',
    current: false,
  },
  {
    title: 'Freelancer',
    company: 'Self-Employed',
    period: '2021 - 2023',
    description:
      'Communicated with clients to gather requirements, created project plans and timelines, and coordinated with developers to ensure accurate implementation of system features.',
    current: false,
  },
]

/* =====================================================
   SKILLS
   ===================================================== */
export const skillCategories = [
  {
    title: 'Cloud & Platforms',
    icon: Cloud,
    color: 'from-sky-400 to-blue-500',
    colorLight: 'sky',
    skills: [
      { name: 'Microsoft Azure', level: 85 },
      { name: 'Salesforce', level: 80 },
      { name: 'Google Workspace', level: 90 },
    ],
  },
  {
    title: 'Programming & Development',
    icon: Code2,
    color: 'from-accent-400 to-violet-500',
    colorLight: 'accent',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'JSON', level: 90 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    color: 'from-emerald-400 to-teal-500',
    colorLight: 'emerald',
    skills: [
      { name: 'Data Analysis', level: 80 },
      { name: 'Database Management', level: 85 },
      { name: 'Reporting & Dashboards', level: 75 },
    ],
  },
  {
    title: 'Tools & Collaboration',
    icon: Wrench,
    color: 'from-amber-400 to-orange-500',
    colorLight: 'amber',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Agile Methodology', level: 80 },
      { name: 'Technical Documentation', level: 85 },
    ],
  },
]

/* =====================================================
   CERTIFICATIONS
   ===================================================== */
export const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    description:
      'Validated knowledge of core cloud concepts, Azure services, security, pricing, and governance.',
    link: 'https://learn.microsoft.com/en-us/users/perrirasricalyn-4579/credentials/f2b7c7e1176c3fa9?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
]

/* =====================================================
   PROJECTS
   ===================================================== */
export const projects = [
  {
    id: 1,
    title: 'Fishpond Management System',
    subtitle: 'Project Lead & Client Liaison',
    description:
      'Managed the end-to-end communication lifecycle for a specialized aquaculture software solution. Served as the primary project bridge between the client and the development team.',
    image: null,
    tags: ['PHP', 'TypeScript', 'Shell', 'HTML', 'Dockerfile', 'JavaScript'],
    category: 'Web Apps',
    github: 'https://github.com/avidianity/fishpond',
    demo: '#',
    icon: Globe,
  },
  {
    id: 2,
    title: 'Internship Management System',
    subtitle: 'Capstone Project Leader',
    description:
      'InternshiponGo is a web-based platform that helps students manage their internship requirements through attendance tracking, time-in/time-out logging, activity monitoring, and secure document management in a centralized system.',
    image: null,
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    category: 'Web Apps',
    github: 'https://github.com/rclynn/InternshiponGo',
    demo: null,
    icon: BarChart3,
  },

  {
    id: 4,
    title: 'University Hotel Reservation System',
    subtitle: 'UI/UX Designer',
    description:
      'Designed a modern and user-friendly hotel reservation prototype for a university-owned hotel, focused on simplifying the booking experience for students, faculty, staff, and guests. The project involved user research, wireframing, prototyping, and interface design to create an intuitive reservation flow, improve navigation, and enhance overall user experience across desktop and mobile devices.',
    image: null,
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Design'],
    category: 'Design',
    github: null,
    demo: 'https://www.figma.com/design/Q3usuvVKKt9VhGTaM47OCL/Untitled?node-id=0-1&p=f&t=GIn0T05zumWwLV9v-0',
    icon: Layout,
  },

]

export const projectCategories = ['All', 'Web Apps', 'Design']

/* =====================================================
   EDUCATION
   ===================================================== */
export const education = {
  school: 'Pangasinan State University - Lingayen Campus',
  degree: 'Bachelor of Science in Information Technology',
  honors: 'Academic Distinction · Special Citation for Student Leader',
}

/* =====================================================
   NAV LINKS
   ===================================================== */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contact', href: '#contact' },
]
