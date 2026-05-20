import employeeSystemImg from '../assets/employee-system.png';
import stockMarketImg from '../assets/stock-market.png';
import portfolioCmsImg from '../assets/portfolio-cms.png';

export const projects = [
  {
    id: 1,
    title: "Employee Management System",
    description: "Backend CRUD application with REST API integration, robust database schema management, and persistent storage implementation.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
    image: employeeSystemImg
  },
  {
    id: 2,
    title: "Stock Market Prediction System",
    description: "Time-series stock prediction using Machine Learning with historical data preprocessing and visual predictions.",
    tech: ["Python", "Machine Learning"],
    liveLink: "#",
    githubLink: "#",
    image: stockMarketImg
  },
  {
    id: 3,
    title: "AI Automation & Business Solutions Website",
    description: "AI-powered business website with an automation-focused UI/UX, responsive SaaS design, and scalable frontend architecture.",
    tech: ["React.js", "JavaScript", "AI APIs"],
    liveLink: "#",
    githubLink: "#",
    image: null
  },
  {
    id: 4,
    title: "College Portfolio Website with CMS",
    description: "Dynamic CMS-driven portfolio featuring API integrations, scalable frontend architecture, and content management workflows.",
    tech: ["React.js", "Sanity CMS"],
    liveLink: "#",
    githubLink: "#",
    image: portfolioCmsImg
  }
];
