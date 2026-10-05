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
  FaShieldHalved
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
  SiFlutter
} from 'react-icons/si'

import profileImg from '../assets/profile.avif'
import aboutImg from '../assets/aboutimg.avif'
import project01 from "./project-01.png"
import project02 from "./project-02.png"
import project03 from "./project-03.png"
import project04 from "./project-04.png"
import { FaProjectDiagram } from 'react-icons/fa'

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

export const statsData = [
  { number: '10+', label: 'Projects Completed' },
  { number: '3+', label: 'Years Learning & Building' },
  { number: '15+', label: 'Technologies Mastered' },
  { number: '100%', label: 'Responsive Design' },
]

export const skillCategories = ['Frontend', 'Backend', 'Database', 'Tools & Environment']

export const skillsData = [
  {
    category: 'Frontend',
    title: 'Frontend Development',
    icon: FaDesktop,
    description: 'Languages, UI styling frameworks, and web technologies used across portfolio projects.',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript ES6+', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Bootstrap 5', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Font Awesome', icon: SiFontawesome, color: '#528DD7' },
      { name: 'Ionicons', icon: SiIonic, color: '#3880FF' },
      { name: 'Google Fonts', icon: SiGooglefonts, color: '#4285F4' },
      { name: 'Responsive Design', icon: FaMobileScreen, color: '#06B6D4' },
    ]
  },
  {
    category: 'Backend',
    title: 'Backend & Server Logic',
    icon: FaServer,
    description: 'Server-side processing, session management, and authentication architecture.',
    skills: [
      { name: 'PHP 8.x', icon: SiPhp, color: '#777BB4' },
      { name: 'Apache Server', icon: SiApache, color: '#D22128' },
      { name: 'Session & Auth', icon: FaLock, color: '#10B981' },
      { name: 'Prepared SQL', icon: FaShieldHalved, color: '#6366F1' },
    ]
  },
  {
    category: 'Database',
    title: 'Databases & Storage',
    icon: FaDatabase,
    description: 'Relational database management systems and schema design.',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MariaDB', icon: SiMariadb, color: '#003545' },
      { name: 'Database Design', icon: FaDatabase, color: '#0D9488' },
    ]
  },
  {
    category: 'Tools & Environment',
    title: 'Development Tools & Environment',
    icon: FaCloud,
    description: 'Local server environments, version control, and development software.',
    skills: [
      { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'VS Code', icon: FaLaptopCode, color: '#007ACC' },
    ]
  }
]

export const projectCategories = ['Web Apps', 'Systems', 'Full Stack']

export const projectData = [
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
    category: ["Web Apps", "Web Application"],
    displayCategory: "Web Application",
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
    category: ["Web Apps", "Web Application"],
    displayCategory: "Web Application",
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
    category: ["Systems", "Full Stack", "University Project"],
    displayCategory: "University Project",
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
    category: ["Systems", "Full Stack", "University Project"],
    displayCategory: "University Project",
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

export const profileData = [
  {
    icon: FaCode,
    title: 'Core Stack',
    technologies: ['PHP', 'MySQL', 'JavaScript ES6+', 'Bootstrap', 'HTML5/CSS3']
  },
  {
    icon: FaSchool,
    title: 'Education',
    technologies: ['National Diploma in Technology (NDT)', 'Information Technology']
  },
  {
    icon: FaProjectDiagram,
    title: 'Experience',
    technologies: ['Built 10+ web and system applications']
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