import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiFramer,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiVite,
  SiPostman,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

export const skillCategories = [
  {
    category: "Languages",
    items: [
      {
        name: "HTML5",
        active: true,
        icon: SiHtml5,
        color: "#E34F26",
        desc: "Semantic, accessible markup",
      },
      {
        name: "CSS3",
        active: true,
        icon: FaCss3Alt,
        color: "#1572B6",
        desc: "Grid, flexbox, animations",
      },
      {
        name: "JavaScript",
        active: true,
        icon: SiJavascript,
        color: "#F7DF1E",
        desc: "ES2023+, async/await, DOM",
      },
      {
        name: "TypeScript",
        active: true,
        icon: SiTypescript,
        color: "#3178C6",
        desc: "Strict mode, generics, types",
      },
    ],
  },

  {
    category: "Frameworks & Libraries",
    items: [
      {
        name: "React",
        active: true,
        icon: SiReact,
        color: "#61DAFB",
        desc: "Hooks, context, RSC",
      },
      {
        name: "Framer Motion",
        active: true,
        icon: SiFramer,
        color: "#FFFFFF",
        desc: "Animations, gestures",
      },
      {
        name: "Tailwind CSS",
        active: true,
        icon: SiTailwindcss,
        color: "#06B6D4",
        desc: "Utility-first styling",
      },
      {
        name: "Node.js",
        active: true,
        icon: SiNodedotjs,
        color: "#339933",
        desc: "Backend development and APIs",
      },
    ],
  },

  {
    category: "Tools & Platforms",
    items: [
      {
        name: "Git",
        active: true,
        icon: SiGit,
        color: "#F05032",
        desc: "Version control, branching",
      },
      {
        name: "Vite",
        active: true,
        icon: SiVite,
        color: "#646CFF",
        desc: "Build tool, HMR, bundling",
      },
      {
        name: "VS Code",
        active: true,
        icon: DiVisualstudio,
        color: "#007ACC",
        desc: "Primary dev environment",
      },
      {
        name: "REST APIs",
        active: true,
        icon: SiPostman,
        color: "#FF6C37",
        desc: "API design & testing",
      },
    ],
  },
];
