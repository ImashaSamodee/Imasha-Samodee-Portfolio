import { 
  FaCode, 
  FaDesktop, 
  FaMicrochip, 
  FaMobile, 
  FaReact, 
  FaSchool, 
  FaDatabase, 
  FaCloud, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaLocationDot, 
  FaBriefcase, 
  FaGraduationCap, 
  FaAward,
  FaServer,
  FaNetworkWired,
  FaMobileScreen,
  FaLaptopCode,
  FaLock,
  FaShieldHalved,
  FaJava,
  FaRobot
} from 'react-icons/fa6'
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiMariadb,
  SiApache,
  SiXampp,
  SiFontawesome,
  SiGooglefonts,
  SiIonic,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiNginx,
  SiPostman,
  SiAndroid,
  SiFlutter,
  SiDart,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiSupabase,
  SiGooglegemini,
  SiApachemaven,
  SiMaterialdesign,
  SiJsonwebtokens,
  SiVite,
  SiSqlite,
  SiNetlify,
  SiReactrouter,
  SiJest
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { FaProjectDiagram } from 'react-icons/fa'

import profileImg from '../assets/profile.avif'
import aboutImg from '../assets/aboutimg.avif'
import project01 from "./project-01.png"
import project02 from "./project-02.png"
import project03 from "./project-03.png"
import project04 from "./project-04.png"
import project05 from "./project-05.png"
import project06 from "./project-06.png"
import project07 from "./project-07.png"
import project08 from "./project-08.png"

export const assets = {
  profileImg,
  aboutImg
}

export const navMenu = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ImashaSamodee',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/imashasamodee',
    icon: FaLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:imashasamodee@gmail.com',
    icon: FaEnvelope,
  }
]

export const contactInfo = {
  email: 'imashasamodee@gmail.com',
  location: 'Colombo, Sri Lanka',
  status: 'Open to Work / Freelance',
  github: 'https://github.com/ImashaSamodee',
  linkedin: 'https://linkedin.com/in/imashasamodee'
}

export const skillCategories = ['Frontend', 'Backend', 'Mobile & AI', 'Database & Cloud', 'Tools & Platforms']

export const skillsData = [
  {
    category: 'Frontend',
    title: 'Frontend Development',
    icon: FaDesktop,
    description: 'Modern component libraries, responsive styling frameworks, and client-side web technologies.',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript ES6+', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'React Router', icon: SiReactrouter, color: '#CA4245' },
      { name: 'Bootstrap 5', icon: SiBootstrap, color: '#7952B3' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Responsive Design', icon: FaMobileScreen, color: '#06B6D4' },
      { name: 'Font Awesome', icon: SiFontawesome, color: '#528DD7' },
    ]
  },
  {
    category: 'Backend',
    title: 'Backend & Server Architecture',
    icon: FaServer,
    description: 'Enterprise server frameworks, secure RESTful APIs, and authentication mechanisms.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'Java', icon: FaJava, color: '#EA2D2E' },
      { name: 'Spring Boot 3', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Spring Security', icon: SiSpring, color: '#6DB33F' },
      { name: 'PHP 8.x', icon: SiPhp, color: '#777BB4' },
      { name: 'REST APIs', icon: TbApi, color: '#0284C7' },
      { name: 'JWT & BCrypt', icon: SiJsonwebtokens, color: '#D63AFF' },
      { name: 'TCP Sockets', icon: FaNetworkWired, color: '#0284C7' },
      { name: 'Apache Server', icon: SiApache, color: '#D22128' },
    ]
  },
  {
    category: 'Mobile & AI',
    title: 'Mobile & AI Integration',
    icon: FaMobile,
    description: 'Cross-platform mobile applications, Google Gemini AI, and intelligent prescription analysis.',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'Google Gemini AI', icon: SiGooglegemini, color: '#4E88D4' },
      { name: 'Gemini Vision AI', icon: SiGooglegemini, color: '#1A73E8' },
      { name: 'Material Design 3', icon: SiMaterialdesign, color: '#757575' },
      { name: 'Prescription AI OCR', icon: FaRobot, color: '#8B5CF6' },
      { name: 'Android', icon: SiAndroid, color: '#3DDC84' },
    ]
  },
  {
    category: 'Database & Cloud',
    title: 'Databases & Cloud Storage',
    icon: FaDatabase,
    description: 'Relational database systems, cloud databases, and data persistence layers.',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
      { name: 'MariaDB', icon: SiMariadb, color: '#003545' },
      { name: 'Hibernate & JPA', icon: SiHibernate, color: '#59666C' },
      { name: 'Database Design', icon: FaDatabase, color: '#0D9488' },
    ]
  },
  {
    category: 'Tools & Platforms',
    title: 'Development Tools & Platforms',
    icon: FaCloud,
    description: 'Version control, build automation, API testing tools, and local development environments.',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Apache Maven', icon: SiApachemaven, color: '#C71A36' },
      { name: 'Jest', icon: SiJest, color: '#C21325' },
      { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
      { name: 'VS Code', icon: FaLaptopCode, color: '#007ACC' },
    ]
  }
]

export const projectCategories = ['Fullstack', 'Mobile', 'Game', 'Frontend']

export const projectData = [
  {
    id: "medicare-lk",
    title: "MediCare LK – AI-Powered E-Pharmacy & Prescription System",
    description: "An AI-powered e-pharmacy and prescription fulfillment platform designed for Sri Lanka, enabling patients to digitize medical prescriptions, compare medicine availability and prices across registered pharmacies, and manage medicine orders and deliveries.",
    longDescription: "MediCare LK is a cross-platform digital healthcare and e-pharmacy solution developed to simplify prescription processing and medicine purchasing in Sri Lanka. The platform uses Google Gemini Vision AI to recognize handwritten prescriptions and extract medicine names, strengths, dosages, frequencies, and treatment durations. It calculates the required medicine quantities, matches prescriptions against registered pharmacy inventories, and generates transparent, itemized quotations in Sri Lankan Rupees. Patients can browse medicine categories, compare pharmacies, upload prescriptions, manage delivery addresses, select online card payments or Cash on Delivery, and track orders through a five-step fulfillment process. The system also includes role-based access for patients, pharmacists, and administrators, a pharmacist dashboard for prescription verification and stock management, and secure JWT authentication. The mobile and cross-platform application is built with Flutter and Dart, supported by a Spring Boot REST API, Supabase PostgreSQL database, and Google Gemini Vision AI integration.",
    image: project05,
    tech: [
      "Flutter",
      "Dart",
      "Material Design 3",
      "Java",
      "Spring Boot 3",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "Supabase",
      "Google Gemini Vision AI",
      "REST API",
      "JWT",
      "BCrypt",
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "Maven"
    ],
    category: ["Mobile"],
    displayCategory: "Mobile",
    role: "Full-Stack Developer",
    duration: "2026",
    features: [
      "Cross-platform Flutter application for Android, iOS, web, and Windows",
      "AI-powered prescription image scanning and handwriting recognition",
      "Google Gemini Vision AI integration for medicine and dosage extraction",
      "Prescription recognition confidence indicators",
      "Automatic prescribed medicine quantity calculation",
      "Medicine catalog with categories, search, and filters",
      "Real-time medicine stock and price information",
      "Registered pharmacy discovery and comparison",
      "Transparent itemized quotations in Sri Lankan Rupees",
      "Automatic medicine unit-price and total-cost calculation",
      "Direct contact with dispensing pharmacists",
      "Role-based access for patients, pharmacists, and administrators",
      "JWT authentication and BCrypt password hashing",
      "Patient registration, login, and profile management",
      "Prescription upload and pharmacist review workflow",
      "Pharmacist dashboard for prescription verification and order processing",
      "Pharmacy inventory and medicine price management",
      "Shopping cart and medicine order placement",
      "Online card payment and Cash on Delivery options",
      "Delivery address management",
      "Five-step order tracking from placement to delivery",
      "Order history with status filters and reorder options",
      "REST API integration using Spring Boot",
      "Supabase-hosted PostgreSQL database",
      "AI model fallback handling for prescription recognition",
      "Standalone HTML, CSS, and JavaScript pharmacist web portal",
      "Material Design 3 healthcare-focused interface"
    ],
    highlights: "Developed a full-stack AI-powered e-pharmacy solution combining Flutter, Spring Boot, Supabase PostgreSQL, and Google Gemini Vision AI. Key highlights include handwritten prescription recognition, automated dosage-based quantity calculation, real pharmacy stock matching, transparent medicine quotations, secure role-based access, pharmacist operations, and end-to-end order tracking tailored to Sri Lankan healthcare needs.",
    demo: "",
    code: "https://github.com/ImashaSamodee/E-Pharmacy-Prescription-System.git"
  },
  {
    id: "mockmate-ai",
    title: "MockMate AI – AI-Powered Interview Coach & Career Platform",
    description: "A full-stack AI-powered interview preparation platform that helps developers and tech professionals practice realistic interviews, assess technical skills, improve resumes, earn verifiable certificates, and track their career progress through personalized AI feedback.",
    longDescription: "MockMate AI is a comprehensive AI-driven interview preparation and career development platform designed to help candidates prepare for technical interviews and improve their professional skills. It provides AI-powered mock interviews for technical and behavioral roles, including frontend, backend, full-stack development, system design, DevOps, and HR interviews. Google Gemini AI powers intelligent feedback on technical knowledge, communication structure, and problem-solving abilities. The platform also includes timed skill assessments, automated scoring, PDF certificate generation, and a public certificate verification portal. Its AI Resume Reviewer analyzes uploaded PDF resumes, evaluates compatibility with selected job roles, identifies missing keywords, and recommends improvements. In addition, users can explore technical interview articles, categorized practice questions, answer frameworks, and code examples. A personalized dashboard and profile management system help candidates organize their preparation and monitor their progress. The frontend is built with React 19, Vite, and Tailwind CSS 4, while the Node.js and Express backend supports API operations, certificate management, and persistent data using Supabase.",
    image: project06,
    tech: [
      "React 19",
      "JavaScript ES6+",
      "Tailwind CSS 4",
      "Vite 8",
      "React Router v7",
      "Lucide React",
      "Recharts",
      "Node.js",
      "Express.js 5",
      "Google Gemini AI",
      "Supabase",
      "Supabase Storage",
      "Multer",
      "PDF-Parse",
      "PDFKit",
      "REST API",
      "HTML5",
      "CSS3"
    ],
    category: ["Fullstack"],
    displayCategory: "Fullstack",
    role: "Full-Stack Developer",
    duration: "2026",
    features: [
      "AI-powered live mock interview preparation",
      "Technical and behavioral interview practice",
      "Interview categories for frontend, backend, full-stack, system design, DevOps, and HR",
      "Interview scenarios tailored to candidate seniority",
      "Google Gemini AI-powered interview feedback",
      "Evaluation of technical knowledge and communication skills",
      "Structured feedback based on the STAR method",
      "Timed technical skill assessment challenges",
      "Automated assessment scoring",
      "Digital certificate generation in PDF format",
      "Public certificate verification portal",
      "AI-powered resume reviewer and ATS analyzer",
      "PDF resume upload and parsing",
      "Job-role compatibility scoring",
      "Missing keyword detection and resume improvement recommendations",
      "Technical interview preparation library",
      "Engineering articles and system design guides",
      "Categorized interview questions with hints and sample answers",
      "Programming practice questions and code snippets",
      "Personalized candidate dashboard",
      "Candidate profile and account settings",
      "Secure account and session management",
      "Certificate and assessment history",
      "Backend API built with Node.js and Express",
      "Supabase database and storage integration",
      "Local JSON fallback for supported data persistence",
      "Responsive user interface built with React and Tailwind CSS",
      "Data visualization using Recharts"
    ],
    highlights: "Designed and developed a full-stack AI interview preparation ecosystem integrating React 19, Node.js, Express.js, Supabase, and Google Gemini AI. The platform combines AI-assisted interview practice, technical assessments, resume and ATS analysis, PDF certificates, public credential verification, and structured learning resources in one career development solution.",
    demo: "",
    code: "https://github.com/ImashaSamodee/MockMate-AI.git"
  },
  {
    id: "santa-tic-tac-toe",
    title: "Kids Play with Santa – Tic-Tac-Toe & Chat",
    description:
      "A festive Christmas-themed desktop game where kids can play Tic-Tac-Toe against friends or AI, enjoy animated victory celebrations, chat in real time, and track game results on a leaderboard.",
    longDescription:
      "Kids Play with Santa is a Java Swing desktop game that transforms classic Tic-Tac-Toe into an interactive Christmas experience. Players can compete in local two-player mode, challenge an AI opponent with Easy, Medium, and Hard difficulty levels, or connect with another player through TCP socket multiplayer. The game includes animated snowfall when Santa wins, colorful gift-box celebrations when the Kid wins, a 10-second turn countdown timer, real-time in-game chat, background music, and sound effects. An SQLite database stores wins, losses, and ties, while a dedicated leaderboard dashboard displays player statistics. The project demonstrates desktop GUI development, game logic, socket-based networking, event handling, multimedia integration, and database operations using Java.",
    image: project07,
    tech: [
      "Java",
      "Java Swing",
      "JDBC",
      "SQLite",
      "TCP Sockets",
      "Client-Server Networking",
      "javax.sound.sampled",
      "JProgressBar",
      "JLayeredPane",
      "JTable",
      "Object-Oriented Programming"
    ],
    category: ["Game"],
    displayCategory: "Desktop Game",
    role: "Java Developer",
    duration: "2026",
    features: [
      "Christmas-themed Tic-Tac-Toe gameplay",
      "Offline two-player mode",
      "AI opponent with Easy, Medium, and Hard difficulty levels",
      "Online multiplayer using TCP sockets",
      "Real-time in-game chat",
      "10-second turn countdown timer",
      "Automatic turn passing when the timer expires",
      "Animated snowfall celebration when Santa wins",
      "Animated gift-box celebration when the Kid wins",
      "Player name entry and avatar selection",
      "Background music and interactive sound effects",
      "SQLite database integration",
      "Automatic tracking of wins, losses, and ties",
      "Dedicated leaderboard dashboard",
      "Swing-based desktop user interface",
      "Client-server game synchronization"
    ],
    highlights:
      "Developed an interactive Java desktop game combining Swing-based UI design, AI gameplay, TCP socket multiplayer, real-time chat, animated Christmas victory effects, audio integration, countdown-based turn management, and persistent SQLite leaderboard statistics.",
    demo: "",
    code: "https://github.com/ImashaSamodee/Kids-Play-With-Santa-Tic-Tac-Toe-Chat.git"
  },
  {
    id: "velora-luxury-store",
    title: "VELORA – Luxury Fashion & Lifestyle Store",
    description: "A modern, responsive luxury fashion e-commerce website featuring premium product collections, category-based shopping, product details, a dynamic shopping cart, and authentication pages.",
    longDescription: "VELORA is a luxury fashion and lifestyle e-commerce frontend built with React 19. The platform offers a premium shopping experience with dedicated collections for men, women, and kids, along with new arrivals, sale items, product galleries, size selection, product descriptions, and related-product suggestions. The shopping cart supports adding and removing products, adjusting quantities, and calculating totals through React Context API. Login and signup interfaces, breadcrumb navigation, promotional banners, popular collections, and newsletter subscription UI enhance the shopping experience. React Router DOM enables smooth client-side navigation, while responsive CSS layouts support desktop, tablet, and mobile devices. The project is deployed on Netlify.",
    image: project08,
    tech: [
      "React 19",
      "JavaScript ES6+",
      "CSS3",
      "React Router DOM 7",
      "React Context API",
      "HTML5",
      "React Scripts",
      "Create React App",
      "React Testing Library",
      "Jest",
      "Netlify"
    ],
    category: ["Frontend"],
    displayCategory: "E-Commerce",
    role: "Frontend Developer",
    duration: "2026",
    features: [
      "Premium fashion store homepage",
      "Men's, women's, and kids' collections",
      "New arrivals and sale pages",
      "Product details and image gallery",
      "Product size selection",
      "Product description tabs",
      "Related-product recommendations",
      "Dynamic shopping cart",
      "Add and remove cart items",
      "Product quantity controls",
      "Live cart total calculation",
      "Global cart state using React Context API",
      "Login and signup user interfaces",
      "Breadcrumb navigation",
      "Promotional banners and special offers",
      "Popular product collections",
      "Newsletter subscription interface",
      "Responsive desktop, tablet, and mobile layouts",
      "Single-page navigation with React Router DOM",
      "Netlify deployment"
    ],
    highlights:
      "Developed a premium, responsive fashion e-commerce frontend using React 19, reusable components, React Context API for shopping cart state management, and React Router DOM 7 for navigation. Created dedicated product collections, detailed product views, related-product suggestions, and a streamlined shopping experience.",
    demo:
      "https://6a7c59cde1ab519a17824495--fastidious-toffee-6b753f.netlify.app",
    code:
      "https://github.com/ImashaSamodee/VELORA-Luxury-Fashion-Lifestyle-Store.git"
  },
  {
    id: "wildhaven",
    title: "WildHaven – Wildlife Conservation & Charity Website",
    description: "A modern, responsive wildlife conservation and charity website designed to raise awareness about endangered species, support environmental protection, and encourage community participation in conservation activities.",
    longDescription: "WildHaven is a modern responsive wildlife conservation and charity web platform created to promote awareness and generate support for wildlife protection and environmental preservation. The website provides an immersive user experience focused on animal welfare, ecosystem restoration, community involvement, and transparent fundraising. It includes a responsive navigation system, wildlife-focused hero section, conservation service modules, interactive mission and vision content, donation campaigns with progress tracking, upcoming conservation events, testimonials, partner organizations, and an Instagram-style wildlife gallery. The project was developed using semantic HTML5, custom Vanilla CSS3, and modular JavaScript with a mobile-first responsive approach. Ionicons are used for interface icons, Google Fonts provide the typography, and native lazy loading is used to improve image performance.",
    image: project01,
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "Ionicons",
      "Google Fonts",
      "Responsive Web Design"
    ],
    category: ["Frontend"],
    displayCategory: "Frontend",
    role: "Frontend Developer",
    duration: "2026",
    features: [
      "Responsive wildlife conservation landing page",
      "Sticky glassmorphic navigation header",
      "Mobile off-canvas navigation drawer",
      "English and Sinhala language selector",
      "Wildlife-focused hero section with donation CTA",
      "Safe Shelter, Safe Water, Ecology Save, and Clean Environment pillars",
      "Mission, Vision, and Next Plan content sections",
      "Wildlife conservation service modules",
      "Interactive donation campaign progress indicators",
      "Fundraising goal, raised amount, and remaining target displays",
      "Upcoming conservation events section",
      "Wildlife conservation testimonials",
      "International partner organization showcase",
      "Responsive wildlife Instagram-style gallery",
      "Mobile-first responsive design",
      "Semantic HTML5 structure",
      "Custom CSS design system using CSS variables",
      "Scroll-aware navigation interactions",
      "Native lazy loading for images"
    ],
    highlights: "Designed and developed a complete responsive wildlife conservation and charity website using semantic HTML5, modern Vanilla CSS3, and JavaScript ES6+. The project focuses on creating an engaging conservation experience through wildlife awareness content, donation campaigns, environmental services, community events, testimonials, partner showcases, and responsive wildlife galleries.",
    demo: "",
    code: "https://github.com/ImashaSamodee/WildHaven_Webaite.git"
  },
  {
    id: "food-ordering-system",
    title: "Food Ordering System",
    description: "A modern and responsive food ordering web application designed for restaurants, cafes, and food delivery businesses, featuring interactive menus, food galleries, customer reviews, chef profiles, and an online ordering form.",
    longDescription: "Food Ordering System is a modern front-end web application designed to provide an engaging digital dining experience for restaurants, cafes, food trucks, and culinary delivery businesses. The website allows users to explore a visually rich food menu, view detailed dishes with prices and ratings, browse a food showcase gallery, read customer testimonials, explore professional chef profiles, and submit food orders through a dedicated ordering form. The application uses a warm culinary-inspired design with a yellow-gold accent color, smooth scrolling, responsive layouts, interactive hover effects, custom styling, and mobile-friendly navigation. It was developed using semantic HTML5 and modern CSS3 with Flexbox and CSS Grid, supported by Font Awesome icons and Google Fonts.",
    image: project02,
    tech: [
      "HTML5",
      "CSS3",
      "Google Fonts",
      "Font Awesome 6.5.2",
      "Responsive Web Design"
    ],
    category: ["Frontend"],
    displayCategory: "Frontend",
    role: "Frontend Developer",
    duration: "2026",
    features: [
      "Responsive restaurant landing page",
      "Sticky navigation header",
      "Smooth scrolling navigation",
      "Interactive food menu catalog",
      "12+ food menu items",
      "Food cards with prices and star ratings",
      "Wishlist and favorite heart buttons",
      "Food showcase gallery",
      "Image hover and overlay animations",
      "Customer testimonial section",
      "Online food ordering form",
      "Customer name and contact information fields",
      "Food item and quantity selection",
      "Delivery address input",
      "Professional chef and team showcase",
      "Chef social media links",
      "Restaurant service and location information",
      "24/7 service and fast delivery highlights",
      "Custom yellow-gold theme and scrollbar",
      "Responsive mobile-friendly interface",
      "Modern card-based UI design",
      "Flexbox and CSS Grid layouts"
    ],
    highlights: "Designed and developed a complete responsive food ordering website using HTML5 and CSS3, focusing on modern UI design, intuitive navigation, attractive food presentation, customer engagement, and online ordering. The project demonstrates frontend development skills through responsive layouts, custom styling, food cards, gallery interactions, testimonials, chef profiles, and a structured order form.",
    demo: "",
    code: "https://github.com/ImashaSamodee/FoodOrderingSystem.git"
  },
  {
    id: "student-event-management",
    title: "Student Event Management System",
    description: "A full-stack university event management web application developed for the Institute of Technology, University of Moratuwa (ITUM), enabling students to discover and register for events while allowing administrators to manage events, users, and registrations.",
    longDescription: "The Student Event Management System is a university academic project developed for the Institute of Technology, University of Moratuwa (ITUM) to digitize and simplify campus event coordination. The system provides a public event discovery portal where students, faculty, and visitors can explore workshops, seminars, hackathons, cultural events, and other university activities. Authenticated students can register for events, manage their profiles, and view their registration activities, while administrators have access to a role-protected dashboard for managing events, user accounts, and event registrations. The application follows a full-stack architecture using HTML5, CSS3, JavaScript, PHP, and MySQL/MariaDB. It includes session-based authentication, role-based access control, event CRUD operations, user management, registration tracking, duplicate registration prevention, prepared SQL statements, responsive layouts, and embedded Google Maps campus navigation.",
    image: project03,
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript ES6",
      "PHP 8.x",
      "MySQL",
      "MariaDB",
      "Apache",
      "XAMPP",
      "Font Awesome"
    ],
    category: ["Fullstack"],
    displayCategory: "Fullstack",
    role: "Full-Stack Developer",
    duration: "2025",
    features: [
      "Public university event discovery portal",
      "Student and administrator authentication",
      "Role-based access control",
      "Student registration and profile management",
      "Interactive event showcase",
      "One-click event registration",
      "Duplicate event registration prevention",
      "Personalized student dashboard",
      "Event details with dates, venues, and descriptions",
      "Administrator dashboard",
      "Complete event CRUD management",
      "Create, edit, and delete university events",
      "User account CRUD management",
      "Student and administrator role management",
      "Event registration tracking",
      "Real-time registration records with timestamps",
      "Session-based authentication and protection",
      "Prepared SQL statements for database operations",
      "Responsive mobile, tablet, and desktop UI",
      "Modern cards, modals, transitions, and icons",
      "Embedded Google Maps campus navigation",
      "MySQL/MariaDB relational database",
      "Apache/XAMPP local server environment"
    ],
    highlights: "Designed and developed a complete full-stack university event management platform for ITUM, combining a responsive public event portal with secure student and administrator workflows. The system demonstrates practical full-stack development through PHP backend processing, MySQL database integration, session authentication, role-based access control, event and user CRUD operations, event registration management, duplicate prevention, prepared SQL statements, and responsive frontend design.",
    demo: "",
    code: "https://github.com/ImashaSamodee/event_management_system.git"
  },
  {
    id: "itum-library-management",
    title: "ITUM Library Management System",
    description: "A full-stack web-based library management system developed for the Institute of Technology, University of Moratuwa (ITUM), providing digital book catalog management, borrowing and returning, member management, fines, and circulation reporting.",
    longDescription: "The ITUM Library Management System is a full-stack web application designed to digitize and automate day-to-day library operations at the Institute of Technology, University of Moratuwa. The system provides separate role-based experiences for Students/Members and Library Administrators. Students can register accounts, securely log in, browse available books, issue books, return borrowed books, and manage their library activities. Administrators can manage the complete book catalog, add and update book records, monitor book availability, manage registered members, oversee fines, and view circulation reports. The system also includes an automated 14-day lending period, real-time book availability updates, circulation transaction tracking, Bcrypt password hashing, session-based authentication, role-based access control, and prepared SQL statements for improved security. The application is built using PHP, MySQL, Bootstrap, Vanilla CSS, JavaScript, and Apache through XAMPP.",
    image: project04,
    tech: [
      "PHP 8.2+",
      "MySQL 8.0+",
      "Bootstrap 5.3",
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "Font Awesome",
      "Google Fonts",
      "Apache",
      "XAMPP"
    ],
    category: ["Fullstack"],
    displayCategory: "Fullstack",
    role: "Full-Stack Developer",
    duration: "2026",
    features: [
      "Role-based Student and Administrator system",
      "Secure user registration and authentication",
      "Bcrypt password hashing",
      "Session-based access protection",
      "Role-based access control",
      "Centralized library dashboard",
      "Responsive book catalog",
      "Real-time book availability tracking",
      "Complete book CRUD management",
      "Add books with ISBN, title, and author",
      "Update book information and circulation status",
      "Delete obsolete book records",
      "Book issue and borrowing system",
      "Automated 14-day lending period",
      "Automated due-date calculation",
      "Book return management",
      "Automatic availability status updates",
      "Member directory and management",
      "Issue and return transaction history",
      "Fine management interface",
      "Library circulation reports",
      "Prepared SQL statements for SQL injection prevention",
      "Responsive Bootstrap and CSS interface",
      "Modern modal-based interactions",
      "Asia/Colombo timezone support"
    ],
    highlights: "Designed and developed a complete full-stack library management solution for ITUM, combining PHP, MySQL, Bootstrap, JavaScript, and Apache to digitize library operations. The system provides separate workflows for students and administrators, including secure authentication, book catalog CRUD, automated 14-day circulation, issue and return tracking, member management, fine oversight, and circulation reporting. Security features include Bcrypt password hashing, protected sessions, role-based access control, and prepared SQL statements.",
    demo: "",
    code: "https://github.com/ImashaSamodee/ITUM_Library_Management_System_Software.git"
  },

]

// ==========================================
// DYNAMIC PORTFOLIO STATS (Auto-updated from projectData & skillsData)
// ==========================================

// Calculate unique technologies dynamically across all skill domains and project tech stacks
const allTechSet = new Set()
skillsData.forEach(domain => {
  domain.skills?.forEach(skill => {
    if (skill.name) allTechSet.add(skill.name.trim())
  })
})
projectData.forEach(project => {
  project.tech?.forEach(tech => {
    if (tech) allTechSet.add(tech.trim())
  })
})

// Calculate years learning/building dynamically from start year (2023)
const startYear = 2023
const currentYear = new Date().getFullYear()
const yearsLearning = Math.max(3, currentYear - startYear)

// Automatically calculate responsive coverage across projects
const responsiveCount = projectData.filter(project => {
  const hasResponsiveTech = project.tech?.some(t => 
    /responsive|flutter|bootstrap|tailwind|mobile/i.test(t)
  )
  const hasResponsiveFeature = project.features?.some(f => 
    /responsive|cross-platform|mobile/i.test(f)
  )
  return hasResponsiveTech || hasResponsiveFeature
}).length

const responsivePercentage = projectData.length > 0 
  ? Math.round((responsiveCount / projectData.length) * 100) 
  : 100

export const statsData = [
  { 
    number: `${projectData.length}+`, 
    label: 'Projects Completed' 
  },
  { 
    number: `${yearsLearning}+`, 
    label: 'Years Learning & Building' 
  },
  { 
    number: `${allTechSet.size}+`, 
    label: 'Technologies Mastered' 
  },
  { 
    number: `${responsivePercentage}%`, 
    label: 'Responsive Design' 
  },
]

export const profileData = [
  {
    icon: FaCode,
    title: 'Core Stack',
    technologies: ['React & Tailwind', 'Node.js & Express', 'Flutter & Dart', 'Java / Spring Boot', 'PHP & MySQL', 'PostgreSQL & Supabase']
  },
  {
    icon: FaSchool,
    title: 'Education',
    technologies: ['National Diploma in Technology (NDT)', 'Information Technology']
  },
  {
    icon: FaProjectDiagram,
    title: 'Experience',
    technologies: [`Built ${projectData.length}+ web and system applications`]
  },
]

export const timelineData = [
  {
    type: 'education',
    title: 'National Diploma in Technology (Information Technology)',
    organization: 'Institute of Technology, University of Moratuwa (ITUM)',
    period: 'Completed',
    description: 'Specialized in Information Technology, Software Engineering, Database Systems, Web Technologies, and Network Architecture.',
    icon: FaGraduationCap
  },
  {
    type: 'experience',
    title: 'Full-Stack Developer & Independent Software Engineer',
    organization: 'Self-Driven Projects & Client Work',
    period: 'Ongoing',
    description: 'Designing and deploying modern full-stack web applications, REST APIs, responsive interfaces, and database-backed management systems.',
    icon: FaBriefcase
  },
  {
    type: 'experience',
    title: 'Software Project Lead & Academic Developer',
    organization: 'ITUM Projects',
    period: 'Academic Tenure',
    description: 'Architected the official ITUM Library Management System and Student Event Management System using PHP, MySQL, and modern frontend practices.',
    icon: FaAward
  }
]