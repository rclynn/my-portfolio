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
  resumeUrl: '/Perriras_Ricalyn.png',
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
    category: 'Professional',
  },
  {
    title: 'Responsible Use of AI',
    issuer: 'Professional Certification',
    description: 'Completed training on the responsible, ethical, and secure use of Artificial Intelligence technologies.',
    link: '/certifications/Responsible Use of AI.png',
    category: 'Basic',
  },
  {
    title: 'Being an Effective Team Member',
    issuer: 'Professional Certification',
    description: 'Developed strong teamwork and collaboration skills, contributing effectively to shared objectives and team success.',
    link: '/certifications/Being an Effective Team Member.png',
    category: 'Basic',
  },
  {
    title: 'Contributing as a Virtual Team Member',
    issuer: 'Professional Certification',
    description: 'Learned best practices for effective communication and productivity in remote and virtual team environments.',
    link: '/certifications/Contributing as a Virtual Team Member.png',
    category: 'Basic',
  },
  {
    title: 'Effective Team Communication',
    issuer: 'Professional Certification',
    description: 'Mastered effective workplace communication, fostering clear, concise, and professional interactions within cross-functional teams.',
    link: '/certifications/Effective Team Communication.png',
    category: 'Basic',
  },
  {
    title: 'Getting Started with GitHub Copilot',
    issuer: 'Professional Certification',
    description: 'Gained practical knowledge in using GitHub Copilot to accelerate software development and coding tasks.',
    link: '/certifications/Getting Started with GitHub Copilot.png',
    category: 'Basic',
  },
  {
    title: 'Psychological Safety: Building a Culture of Inclusion and Innovation',
    issuer: 'Professional Certification',
    description: 'Explored strategies to foster inclusive, safe, and innovative workplace cultures.',
    link: '/certifications/Psychological Safety_ Building a Culture of Inclusion and Innovation.png',
    category: 'Basic',
  },
  {
    title: 'CompTIA Cloud Essentials+: Essential Cloud Principles',
    issuer: 'CompTIA',
    description: 'Validated foundational knowledge of cloud computing principles and business practices.',
    link: '/certifications/CompTIA Cloud Essentials+_ Essential Cloud Principles.png',
    category: 'Professional',
  },
  {
    title: 'Data Access & Governance Policies',
    issuer: 'Professional Certification',
    description: 'Developed an understanding of robust data governance, security policies, and encryption monitoring.',
    link: '/certifications/Data Access & Governance Policies_ Data Classification, Encryption, & Monitoring.png',
    category: 'Professional',
  },
  {
    title: 'Git & GitHub: Introduction',
    issuer: 'Professional Certification',
    description: 'Mastered the fundamentals of version control using Git and collaborative development with GitHub.',
    link: '/certifications/Git & GitHub_ Introduction.png',
    category: 'Basic',
  },
  {
    title: 'Leading Security Teams for GenAI Solutions',
    issuer: 'Professional Certification',
    description: 'Explored security considerations and leadership strategies when deploying Generative AI solutions.',
    link: '/certifications/Leading Security Teams for GenAI Solutions_ Use of Generative AI.png',
    category: 'Professional',
  },
  {
    title: 'Software Product Management',
    issuer: 'Professional Certification',
    description: 'Gained a solid understanding of software product lifecycles, Agile methodologies, and management principles.',
    link: '/certifications/Software Product Management_ Foundational Concepts.png',
    category: 'Professional',
  },
  {
    title: 'Testing Methods',
    issuer: 'Professional Certification',
    description: 'Learned fundamental software testing strategies and quality assurance practices.',
    link: '/certifications/Testing Methods.png',
    category: 'Basic',
  },
  {
    title: 'Advanced Features of JavaScript, CSS3, & HTML5',
    issuer: 'Professional Certification',
    description: 'Advanced web development techniques and modern browser features.',
    link: '/certifications/Advanced Features of JavaScript, CSS3, & HTML5.png',
    category: 'Basic',
  },
  {
    title: 'Angular 11: Directives & Pipes',
    issuer: 'Professional Certification',
    description: 'Mastered Angular directives, custom pipes, and DOM manipulation.',
    link: '/certifications/Angular 11_ Directives & Pipes.png',
    category: 'Basic',
  },
  {
    title: 'Angular 11: Getting Started with Angular',
    issuer: 'Professional Certification',
    description: 'Foundational concepts for building single-page applications using Angular 11.',
    link: '/certifications/Angular 11_ Getting Started with Angular.png',
    category: 'Basic',
  },
  {
    title: 'Angular 11: Introduction to Components',
    issuer: 'Professional Certification',
    description: 'Component-based architecture and state management in Angular.',
    link: '/certifications/Angular 11_ Introduction to Components.png',
    category: 'Basic',
  },
  {
    title: 'Angular 11: Working With Angular Modules',
    issuer: 'Professional Certification',
    description: 'Advanced routing, lazy loading, and module organization in Angular.',
    link: '/certifications/Angular 11_ Working With Angular Modules.png',
    category: 'Basic',
  },
  {
    title: 'AngularJS & TypeScript',
    issuer: 'Professional Certification',
    description: 'Integration of TypeScript for robust, type-safe Angular development.',
    link: '/certifications/AngularJS & TypeScript.png',
    category: 'Basic',
  },
  {
    title: 'Artificial Intelligence and Machine Learning',
    issuer: 'Professional Certification',
    description: 'Fundamental concepts, algorithms, and applications of AI and ML.',
    link: '/certifications/Artificial Intelligence and Machine Learning.png',
    category: 'Professional',
  },
  {
    title: 'Automation Design & Robotics',
    issuer: 'Professional Certification',
    description: 'Principles of industrial automation, robotic process design, and efficiency.',
    link: '/certifications/Automation Design & Robotics.png',
    category: 'Professional',
  },
  {
    title: 'CCSP 2019: Identity & Access Management',
    issuer: 'Professional Certification',
    description: 'Cloud security protocols, IAM solutions, and access control.',
    link: '/certifications/CCSP 2019_ Identity & Access Management.png',
    category: 'Professional',
  },
  {
    title: 'CCSP 2022: Cloud Security Concepts',
    issuer: 'Professional Certification',
    description: 'Advanced design principles for secure cloud architecture and computing.',
    link: '/certifications/CCSP 2022_ Cloud Security Concepts & Design Principles.png',
    category: 'Professional',
  },
  {
    title: 'Code Quality, Testing, & Development',
    issuer: 'Professional Certification',
    description: 'Best practices for software quality assurance, testing strategies, and TDD.',
    link: '/certifications/Code Quality, Testing, & Development.png',
    category: 'Professional',
  },
  {
    title: 'Exploring Business Process Automation',
    issuer: 'Professional Certification',
    description: 'Analyzing and automating workflows to improve organizational efficiency.',
    link: '/certifications/Exploring Business Process Automation.png',
    category: 'Professional',
  },
  {
    title: 'FSD Front-End Development: Frameworks',
    issuer: 'Professional Certification',
    description: 'Comprehensive overview of modern front-end web frameworks.',
    link: '/certifications/FSD Front-End Development_ Frameworks.png',
    category: 'Basic',
  },
  {
    title: 'FSD Front-End Development: UI with ReactJS',
    issuer: 'Professional Certification',
    description: 'Building interactive and dynamic user interfaces using ReactJS.',
    link: '/certifications/FSD Front-End Development_ UI Development with ReactJS.png',
    category: 'Basic',
  },
  {
    title: 'FSD Front-End Development: JavaScript Functions',
    issuer: 'Professional Certification',
    description: 'Deep dive into functional programming patterns in JavaScript.',
    link: '/certifications/FSD Front-End Development_ Using JavaScript Functions.png',
    category: 'Basic',
  },
  {
    title: 'FSD Front-End Development: Writing Code with jQuery',
    issuer: 'Professional Certification',
    description: 'Legacy web development, DOM traversal, and AJAX using jQuery.',
    link: '/certifications/FSD Front-End Development_ Writing Code with jQuery.png',
    category: 'Basic',
  },
  {
    title: 'FSD Front-end Development: Advanced CSS',
    issuer: 'Professional Certification',
    description: 'Complex CSS layouts, animations, and modern browser APIs.',
    link: '/certifications/FSD Front-end Development_ Advanced CSS Browser Features.png',
    category: 'Basic',
  },
  {
    title: 'FSD Front-end Development: Build Tools',
    issuer: 'Professional Certification',
    description: 'Webpack, Vite, Babel, and configuring modern build pipelines.',
    link: '/certifications/FSD Front-end Development_ Build Tools.png',
    category: 'Basic',
  },
  {
    title: 'FSD Front-end Development: Server Tools',
    issuer: 'Professional Certification',
    description: 'Node.js, Express, and connecting front-end applications to servers.',
    link: '/certifications/FSD Front-end Development_ Server Tools.png',
    category: 'Basic',
  },
  {
    title: 'FSD Front-end Development: Testing Tools',
    issuer: 'Professional Certification',
    description: 'Jest, Cypress, and implementing comprehensive front-end testing.',
    link: '/certifications/FSD Front-end Development_ Testing Tools.png',
    category: 'Basic',
  },
  {
    title: 'Faust: Stream Processing Introduction',
    issuer: 'Professional Certification',
    description: 'Getting started with Python-based stream processing and Kafka.',
    link: '/certifications/Faust_ Getting Started with Stream Processing.png',
    category: 'Professional',
  },
  {
    title: 'Faust: Operations & State Using Tables',
    issuer: 'Professional Certification',
    description: 'Managing distributed state and performing operations with Faust tables.',
    link: '/certifications/Faust_ Performing Operations & Maintaining State Using Tables.png',
    category: 'Professional',
  },
  {
    title: 'Faust: Models, Agents, & Channels',
    issuer: 'Professional Certification',
    description: 'Advanced Faust architecture for scalable event-driven applications.',
    link: '/certifications/Faust_ Stream Processing Using Models, Agents, & Channels.png',
    category: 'Professional',
  },
  {
    title: 'Faust: Stream Processing Windowing',
    issuer: 'Professional Certification',
    description: 'Time-series analysis and windowing operations on data streams.',
    link: '/certifications/Faust_ Stream Processing Using Windowing Operations.png',
    category: 'Professional',
  },
  {
    title: 'Final Exam: Front-end Developer',
    issuer: 'Professional Certification',
    description: 'Comprehensive assessment of full-stack front-end engineering skills.',
    link: '/certifications/Final Exam_ Front-end Developer.png',
    category: 'Professional',
  },
  {
    title: 'Final Exam: Resource Optimization',
    issuer: 'Professional Certification',
    description: 'Python algorithms for performance optimization and resource management.',
    link: '/certifications/Final Exam_ Resource Optimization with Python.png',
    category: 'Professional',
  },
  {
    title: 'OpenCV: Advanced Image Operations',
    issuer: 'Professional Certification',
    description: 'Computer vision, feature detection, and advanced image processing.',
    link: '/certifications/OpenCV_ Advanced Image Operations.png',
    category: 'Professional',
  },
  {
    title: 'OpenCV: Manipulating Images',
    issuer: 'Professional Certification',
    description: 'Core operations for image manipulation and filtering using OpenCV.',
    link: '/certifications/OpenCV_ Manipulating Images.png',
    category: 'Professional',
  },
  {
    title: 'Pythonista to Python Master',
    issuer: 'Professional Certification',
    description: 'Advanced Python idioms, metaprogramming, and expert-level design.',
    link: '/certifications/Pythonista to Python Master.png',
    category: 'Professional',
  },
  {
    title: 'Software Design and Development',
    issuer: 'Professional Certification',
    description: 'Mastering Design Patterns and SOLID Principles',
    link: '/certifications/Software Design and Development_ Design Patterns & SOLID Principles.png',
    category: 'Professional',
  },
  {
    title: 'Strategies for Building a Cohesive Team',
    issuer: 'Professional Certification',
    description: 'Leadership training for fostering teamwork and organizational unity.',
    link: '/certifications/Strategies for Building a Cohesive Team.png',
    category: 'Basic',
  },
  {
    title: 'Case Studies in Prompt Engineering',
    issuer: 'Professional Certification',
    description: 'Analyzing real-world applications and outcomes of prompt engineering strategies.',
    link: '/certifications/Case Studies in Prompt Engineering.png',
    category: 'Professional',
  },
  {
    title: 'Dash Python Framework: Creating Widgets',
    issuer: 'Professional Certification',
    description: 'Building interactive widgets for data visualization dashboards in Dash.',
    link: '/certifications/Dash Python Framework_ Creating Widgets in Dash Apps.png',
    category: 'Basic',
  },
  {
    title: 'Dash Python Framework: Interactive Web Apps',
    issuer: 'Professional Certification',
    description: 'Developing responsive web applications and dashboards using Python and Dash.',
    link: '/certifications/Dash Python Framework_ Dash for Interactive Web Apps.png',
    category: 'Basic',
  },
  {
    title: 'Dash Python Framework: User Input & DataTable',
    issuer: 'Professional Certification',
    description: 'Managing application state and complex tabular data within Dash.',
    link: '/certifications/Dash Python Framework_ Leveraging Dash with User Input & Dash DataTable.png',
    category: 'Basic',
  },
  {
    title: 'Exploring Prompt Engineering Techniques',
    issuer: 'Professional Certification',
    description: 'Mastering advanced techniques for interacting with large language models.',
    link: '/certifications/Exploring Prompt Engineering Techniques.png',
    category: 'Professional',
  },
  {
    title: 'Exploring the OpenAI Playground',
    issuer: 'Professional Certification',
    description: 'Hands-on experience configuring and testing models in the OpenAI environment.',
    link: '/certifications/Exploring the OpenAI Playground.png',
    category: 'Professional',
  },
  {
    title: 'Final Exam: Data Visualization for Web Apps',
    issuer: 'Professional Certification',
    description: 'Comprehensive exam covering web-based data visualization in Python.',
    link: '/certifications/Final Exam_ Data Visualization for Web Apps Using Python.png',
    category: 'Professional',
  },
  {
    title: 'Final Exam: Dynamic Data Handling',
    issuer: 'Professional Certification',
    description: 'Testing proficiency in handling dynamic datasets and complex data operations in Python.',
    link: '/certifications/Final Exam_ Dynamic Data Handling with Python.png',
    category: 'Professional',
  },
  {
    title: 'Final Exam: Prompt Engineering for Programmers',
    issuer: 'Professional Certification',
    description: 'Assessment of utilizing Generative AI for accelerated learning and code generation.',
    link: '/certifications/Final Exam_ Prompt Engineering for Programmers to Learn Python.png',
    category: 'Professional',
  },
  {
    title: 'Final Exam: Prompt Engineering',
    issuer: 'Professional Certification',
    description: 'Comprehensive evaluation of prompt engineering strategies with Generative AI tools.',
    link: '/certifications/Final Exam_ Prompt Engineering with Generative AI Tools.png',
    category: 'Professional',
  },
  {
    title: 'Final Exam: Python for Developers',
    issuer: 'Professional Certification',
    description: 'Final evaluation of core Python programming, data structures, and best practices.',
    link: '/certifications/Final Exam_ Python for Developers.png',
    category: 'Professional',
  },
  {
    title: 'Flask-RESTful: Getting Started',
    issuer: 'Professional Certification',
    description: 'Building RESTful APIs quickly and efficiently using the Flask-RESTful extension.',
    link: '/certifications/Flask-RESTful_ Getting Started with Flask-RESTful to Build APIs.png',
    category: 'Basic',
  },
  {
    title: 'Flask-RESTful: Integrating with MySQL',
    issuer: 'Professional Certification',
    description: 'Connecting and managing a MySQL database backend for a Flask API server.',
    link: '/certifications/Flask-RESTful_ Integrating the API Server with a MySQL Database.png',
    category: 'Professional',
  },
  {
    title: 'Flask-RESTful: Parsing & Validating Input',
    issuer: 'Professional Certification',
    description: 'Implementing robust request parsing, validation, and error handling for APIs.',
    link: '/certifications/Flask-RESTful_ Parsing & Validating Input Requests.png',
    category: 'Professional',
  },
  {
    title: 'Generative AI APIs for Practical Applications',
    issuer: 'Professional Certification',
    description: 'Introduction to integrating Generative AI models into practical software solutions.',
    link: '/certifications/Generative AI APIs for Practical Applications_ An Introduction.png',
    category: 'Professional',
  },
  {
    title: 'Getting Started with Prompt Engineering',
    issuer: 'Professional Certification',
    description: 'Foundational concepts for communicating effectively with Large Language Models.',
    link: '/certifications/Getting Started with Prompt Engineering.png',
    category: 'Basic',
  },
  {
    title: 'HTTP Requests with HTTPX: Advanced Topics',
    issuer: 'Professional Certification',
    description: 'Advanced asynchronous HTTP requests, connection pooling, and timeouts with HTTPX.',
    link: '/certifications/HTTP Requests with HTTPX_ Advanced Topics.png',
    category: 'Professional',
  },
  {
    title: 'HTTP Requests with HTTPX: Introduction',
    issuer: 'Professional Certification',
    description: 'Fundamentals of making synchronous and asynchronous HTTP requests in Python.',
    link: '/certifications/HTTP Requests with HTTPX_ Introduction.png',
    category: 'Basic',
  },
  {
    title: 'Leveraging Prompts for Python Analysis',
    issuer: 'Professional Certification',
    description: 'Using AI prompts to generate classes, scripts, and perform data analysis in Python.',
    link: '/certifications/Leveraging Prompts for Python Classes, Scripts, & Data Analysis.png',
    category: 'Professional',
  },
  {
    title: 'Molten Framework: Advanced Features',
    issuer: 'Professional Certification',
    description: 'Dependency injection, middleware, and advanced routing in the Molten framework.',
    link: '/certifications/Molten Framework_ Advanced Features.png',
    category: 'Professional',
  },
  {
    title: 'Molten Framework: Building HTTP APIs',
    issuer: 'Professional Certification',
    description: 'Building fast, robust, and strongly-typed HTTP APIs using Molten in Python.',
    link: '/certifications/Molten Framework_ Building HTTP APIs.png',
    category: 'Basic',
  },
  {
    title: 'Operations with petl: Advanced Transformations',
    issuer: 'Professional Certification',
    description: 'Complex data extractions, transformations, and loading (ETL) using petl.',
    link: '/certifications/Operations with petl_ Advanced Extractions & Transformations.png',
    category: 'Professional',
  },
  {
    title: 'Operations with petl: Basic Transformations',
    issuer: 'Professional Certification',
    description: 'Fundamental data manipulation, filtering, and table transformations with petl.',
    link: '/certifications/Operations with petl_ Basic Data Transformations.png',
    category: 'Basic',
  },
  {
    title: 'Operations with petl: Introduction',
    issuer: 'Professional Certification',
    description: 'Getting started with Python ETL processes using the petl library.',
    link: '/certifications/Operations with petl_ Introduction.png',
    category: 'Basic',
  },
  {
    title: 'Prompt Engineering to Learn Python',
    issuer: 'Professional Certification',
    description: 'Accelerated learning of Python fundamentals using AI prompting.',
    link: '/certifications/Prompt Engineering for Programmers to Learn Python.png',
    category: 'Basic',
  },
  {
    title: 'Prompt Engineering for Python Loops',
    issuer: 'Professional Certification',
    description: 'Utilizing AI to master control flow, loops, and functions in Python.',
    link: '/certifications/Prompt Engineering to Learn Python Loops & Functions.png',
    category: 'Basic',
  },
  {
    title: 'Prompt Engineering with Generative AI Tools',
    issuer: 'Professional Certification',
    description: 'Applying advanced prompt techniques across various generative AI platforms.',
    link: '/certifications/Prompt Engineering with Generative AI Tools.png',
    category: 'Professional',
  },
  {
    title: 'Python: Classes, Errors, & Modules',
    issuer: 'Professional Certification',
    description: 'Object-oriented programming, exception handling, and code organization in Python.',
    link: '/certifications/Python Development_ Creating Classes, Handling Errors, & Importing Modules.png',
    category: 'Basic',
  },
  {
    title: 'Python: Defining & Invoking Functions',
    issuer: 'Professional Certification',
    description: 'Comprehensive guide to function arguments, scope, and execution in Python.',
    link: '/certifications/Python Development_ Defining, Configuring, & Invoking Functions.png',
    category: 'Basic',
  },
  {
    title: 'Python Development: Getting Started',
    issuer: 'Professional Certification',
    description: 'Core concepts, syntax, and programming paradigms for beginning Python developers.',
    link: '/certifications/Python Development_ Getting Started with Programming in Python.png',
    category: 'Basic',
  },
  {
    title: 'Python: Advanced Functions',
    issuer: 'Professional Certification',
    description: 'Mastering lambdas, generators, closures, and decorators for functional programming.',
    link: '/certifications/Python Development_ Leveraging Functions with Lambdas, Generators, Closures, & Decorators.png',
    category: 'Professional',
  },
  {
    title: 'Python: Complex Data Types',
    issuer: 'Professional Certification',
    description: 'Manipulating lists, dictionaries, sets, and tuples for complex data operations.',
    link: '/certifications/Python Development_ Performing Operations with Complex Data Types.png',
    category: 'Professional',
  },
  {
    title: 'Python: If Statements & Comprehensions',
    issuer: 'Professional Certification',
    description: 'Control flow structures and Pythonic list, set, and dictionary comprehensions.',
    link: '/certifications/Python Development_ Working with If Statements, Loops, & Comprehensions.png',
    category: 'Basic',
  },
  {
    title: 'Seaborn: Time Series & Regression',
    issuer: 'Professional Certification',
    description: 'Visualizing temporal data and statistical regression models using Seaborn.',
    link: '/certifications/Python Statistical Plots_ Time Series Data & Regression Analysis in Seaborn.png',
    category: 'Professional',
  },
  {
    title: 'Python Statistical Plots: Visualizing & Analyzing data Using Seaborn',
    issuer: 'Professional Certification',
    description: 'Creating informative statistical plots and exploratory data analysis graphics.',
    link: '/certifications/Python Statistical Plots_ Visualizing & Analyzing Data Using Seaborn.png',
    category: 'Professional',
  },
  {
    title: 'Python with Altair: An Introduction to Altair',
    issuer: 'Professional Certification',
    description: 'Declarative statistical visualization for Python using the Altair library.',
    link: '/certifications/Python with Altair_ An Introduction to Altair.png',
    category: 'Basic',
  },
  {
    title: 'Python with Altair: Plotting Fundamental Graphs',
    issuer: 'Professional Certification',
    description: 'Building core charts, scatter plots, and histograms using declarative syntax.',
    link: '/certifications/Python with Altair_ Plotting Fundamental Graphs.png',
    category: 'Basic',
  },
  {
    title: 'Python with Altair: Working with Specialized Graphs',
    issuer: 'Professional Certification',
    description: 'Creating advanced visualizations, heatmaps, and layered charts in Altair.',
    link: '/certifications/Python with Altair_ Working with Specialized Graphs.png',
    category: 'Professional',
  },
  {
    title: 'SQL Databases Using SQLAlchemy: Chaining Joins, Views, & Indexes',
    issuer: 'Professional Certification',
    description: 'Advanced database schema design, querying, and performance tuning.',
    link: '/certifications/SQL Databases Using SQLAlchemy_ Chaining Joins, Views, & Indexes.png',
    category: 'Professional',
  },
  {
    title: 'SQL Databases Using SQLAlchemy: Getting Started',
    issuer: 'Professional Certification',
    description: 'Connecting to databases and executing fundamental SQL commands in Python.',
    link: '/certifications/SQL Databases Using SQLAlchemy_ Getting Started.png',
    category: 'Basic',
  },
  {
    title: 'SQL Databases Using SQLAlchemy: Manipulating Data',
    issuer: 'Professional Certification',
    description: 'CRUD operations, database transactions, and data integrity using SQLAlchemy.',
    link: '/certifications/SQL Databases Using SQLAlchemy_ Manipulating Data.png',
    category: 'Basic',
  },
  {
    title: 'SQL Databases Using SQLAlchemy: Querying Data',
    issuer: 'Professional Certification',
    description: 'Writing complex queries, filters, and aggregations using Python and SQLAlchemy.',
    link: '/certifications/SQL Databases Using SQLAlchemy_ Querying Data.png',
    category: 'Basic',
  },
  {
    title: 'SQL Databases Using SQLAlchemy: Using Triggers, Stored Procedures, & Transactions',
    issuer: 'Professional Certification',
    description: 'Managing database-level logic, stored procedures, and transactions.',
    link: '/certifications/SQL Databases Using SQLAlchemy_ Using Triggers, Stored Procedures, & Transactions.png',
    category: 'Professional',
  },
  {
    title: 'SQL Databases Using SQLAlchemy: Using the SQLAlchemy ORM',
    issuer: 'Professional Certification',
    description: 'Mapping Python classes to database tables using the SQLAlchemy Object Relational Mapper.',
    link: '/certifications/SQL Databases Using SQLAlchemy_ Using the SQLAlchemy ORM.png',
    category: 'Professional',
  },
  {
    title: 'Using Generative AI Tools to Learn Python',
    issuer: 'Professional Certification',
    description: 'Leveraging AI tools as a pair programmer for Python development.',
    link: '/certifications/Using Generative AI Tools to Learn Python.png',
    category: 'Basic',
  },
  {
    title: 'Web Applications with Django: Building Multiple Apps in a Project',
    issuer: 'Professional Certification',
    description: 'Structuring complex web applications and integrating multiple Django apps.',
    link: '/certifications/Web Applications with Django_ Building Multiple Apps in a Project.png',
    category: 'Professional',
  },
  {
    title: 'Web Applications with Django: Introduction to the Django Web Framework',
    issuer: 'Professional Certification',
    description: 'Fundamentals of the Django MTV architecture and rapid web development.',
    link: '/certifications/Web Applications with Django_ Introducing the Django Web Framework.png',
    category: 'Basic',
  },
  {
    title: 'Web Applications with Django: Models and Class-based Views',
    issuer: 'Professional Certification',
    description: 'Advanced routing and object-oriented views for scalable web architecture.',
    link: '/certifications/Web Applications with Django_ Models and Class-based Views.png',
    category: 'Professional',
  },
  {
    title: 'Web Application with Django: Using Built-in and Custom Applications',
    issuer: 'Professional Certification',
    description: 'Extending the Django admin interface and leveraging built-in authentication.',
    link: '/certifications/Web Applications with Django_ Using Built-in and Custom Applications.png',
    category: 'Professional',
  },
  {
    title: 'Web Applications with Django: Working with Models',
    issuer: 'Professional Certification',
    description: 'Designing database schemas, models, and utilizing the Django ORM.',
    link: '/certifications/Web Applications with Django_ Working with Models.png',
    category: 'Professional',
  },
]

export const certificationCategories = ['All', 'Professional', 'Basic']

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
  { label: 'Certifications', href: '#certifications' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contact', href: '#contact' },
]
