import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaAws, FaGithub, FaLinux } from "react-icons/fa";
import { SiJavascript, SiRedux, SiSpringboot, SiPostgresql, SiMongodb, SiMysql, SiPython } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiJava } from "react-icons/di";
import { BiNetworkChart, BiData, BiMicrochip } from "react-icons/bi";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: DiJava, color: "#007396" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "REST APIs", icon: BiNetworkChart, color: "#38bdf8" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGithub, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" }
    ]
  },
  {
    category: "Concepts",
    items: [
      { name: "OOP", icon: BiMicrochip, color: "#38bdf8" },
      { name: "DBMS", icon: BiData, color: "#38bdf8" },
      { name: "Data Structures", icon: BiNetworkChart, color: "#38bdf8" },
      { name: "Operating Systems", icon: FaLinux, color: "#38bdf8" },
      { name: "Software Engineering", icon: BiMicrochip, color: "#38bdf8" }
    ]
  },
  {
    category: "Cloud & AI",
    items: [
      { name: "AWS Fundamentals", icon: FaAws, color: "#FF9900" },
      { name: "Cloud Computing Basics", icon: FaAws, color: "#38bdf8" },
      { name: "GitHub Copilot", icon: FaGithub, color: "#ffffff" },
      { name: "ChatGPT", icon: BiMicrochip, color: "#10a37f" },
      { name: "Claude AI", icon: BiMicrochip, color: "#d97757" }
    ]
  }
];
