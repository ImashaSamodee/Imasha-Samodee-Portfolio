import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
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


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Python', 'Postgres', 'Redis', 'Next.js']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['React', 'Html', 'Css', 'Tailwindcss']
    },
    {
        icon: FaDesktop,
        title: 'Web',
        technologies: ['Nginx', 'Linux', 'Wsgi', 'Server']
    },
    {
        icon: FaCode ,
        title: 'DevOps',
        technologies: ['Linux', 'Git', 'Github', 'Docker', 'Jenkins', 'CI/CD']
    },
    {
        icon: FaMobile,
        title: 'Mobile',
        technologies: ['React Native', 'Android', 'Flutter', 'Java']
    },
]



export const projectData = [
    {
        title: 'WildHaven Webaite',
        description: 'A wildlife conservation website that provides information about endangered species and promotes conservation efforts.',
        image: project01,
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        githubUrl: "https://github.com/ImashaSamodee/WildHaven_Webaite.git",
        liveUrl: "https://imashasamodee.github.io/WildHaven_Webaite/"
    },
    {
        title: 'Food Ordering App',
        description: 'A food ordering app that allows users to browse menus, place orders, and track delivery status.',
        image: project02,
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        githubUrl: "https://github.com/ImashaSamodee/FoodOrderingSystem.git",
        liveUrl: "https://imashasamodee.github.io/FoodOrderingSystem/"
    },
    {
        title: 'Student Event Management System',
        description: 'An event management system that allows users to create and manage events, send invitations, and track RSVPs.',
        image: project03,
        tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
        githubUrl: "https://github.com/ImashaSamodee/event_management_system.git",
        liveUrl: "https://imashasamodee.github.io/event_management_system/"
    },
    {
        title: 'Library Management System',
        description: 'A library management system that allows users to browse books, manage reservations, and track due dates.',
        image: project04,
        tech: ['HTML', 'CSS', 'JavaScript', 'Rest', 'MySQL', 'Bootstrap'],
        githubUrl: "https://github.com/ImashaSamodee/ITUM_Library_Management_System_Software.git",
        liveUrl: "https://imashasamodee.github.io/ITUM_Library_Management_System_Software/"
    }
]

export const profileData = [
    {
        icon: FaCode ,
        title: 'Language',
        technologies : ['Python', 'Django', 'Rest', 'React', 'Tailwindcss']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['Dip, in Information Technology']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        technologies : ['Built more than 10+']
    },
]