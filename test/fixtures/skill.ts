import type { SkillByCategory } from "../../src/types";

export const skillsFixtures = (): SkillByCategory[] => [
  {
    label: "Programming Languages",
    skills: [
      { label: "TypeScript", level: 100 },
      { label: "EcmaScript / JavaScript", level: 100 },
      { label: "PHP", level: 90 },
      { label: "VB / VBA", level: 75 },
      { label: "C#", level: 75 },
      { label: "Java", level: 60 },
      { label: "Python", level: 50 },
      { label: "GoLang", level: 40 },
      { label: "C++", level: 35 },
      { label: "C / GTK+", level: 35 },
    ],
  },
  {
    label: "Back-end",
    skills: [
      { label: "NodeJS", level: 100 },
      { label: "Koa", level: 100 },
      { label: "ExpressJS", level: 100 },
      { label: "GraphQL", level: 90 },
      { label: "Apollo Server", level: 90 },
      { label: "NextJS", level: 90 },
      { label: "XSLT", level: 75 },
      { label: ".NET / WPF", level: 75 },
      { label: "Symfony2", level: 50 },
      { label: "Django", level: 50 },
      { label: "RabbitMQ", level: 50 },
      { label: "Spring Framework", level: 40 },
      { label: "Deno", level: 30 },
    ],
  },
  {
    label: "Front-end",
    skills: [
      { label: "React", level: 100 },
      { label: "Apollo Client", level: 100 },
      { label: "Tailwind CSS", level: 100 },
      { label: "BEM", level: 99 },
      { label: "SASS", level: 99 },
      { label: "HTML5 / SEO", level: 99 },
      { label: "CSS3", level: 99 },
      { label: "Functional CSS", level: 90 },
      { label: "Webpack", level: 90 },
      { label: "Material Design", level: 90 },
      { label: "JQuery", level: 90 },
      { label: "Foundation", level: 80 },
      { label: "Angular 1", level: 80 },
      { label: "Svelte", level: 80 },
      { label: "Rollup", level: 80 },
      { label: "Vite", level: 80 },
      { label: "Bootstrap 3 & 4", level: 75 },
      { label: "VueJS", level: 70 },
    ],
  },
  {
    label: "Quality / Testing",
    skills: [
      { label: "Selenium", level: 100 },
      { label: "Jest", level: 100 },
      { description: "Repo setup", label: "ESLint + Prettier", level: 100 },
      { label: "Cypress", level: 90 },
      { label: "Mocha + Chai", level: 90 },
    ],
  },
  {
    label: "Database",
    skills: [
      { label: "MySQL", level: 100 },
      { label: "MongoDB", level: 100 },
      { label: "Redis", level: 100 },
      { label: "Oracle", level: 75 },
      { label: "MS Access", level: 75 },
      { label: "MS SQLServer", level: 75 },
      { label: "PostgreSQL", level: 60 },
      { label: "Google Firestore", level: 50 },
    ],
  },
  {
    label: "Server setup / maintenance",
    skills: [
      { label: "Nginx", level: 100 },
      { label: "Docker", level: 90 },
      { label: "Shell Script", level: 80 },
      { label: "Apache httpd", level: 70 },
      { label: "Apache Tomcat", level: 50 },
    ],
  },
  {
    label: "Source Control",
    skills: [
      { label: "GIT", level: 100 },
      { label: "Github", level: 100 },
      { label: "Gitlab", level: 100 },
      { label: "Subversion", level: 80 },
      { label: "NX", level: 50 },
      { label: "Lerna", level: 50 },
    ],
  },
  {
    label: "Operating Systems",
    skills: [
      { label: "Windows", level: 100 },
      { label: "Debian / Ubuntu", level: 100 },
      { label: "MacOS", level: 100 },
      { label: "CentOS", level: 80 },
    ],
  },
  {
    label: "Project Management",
    skills: [
      {
        description:
          "Post-conception cost quantification, Optimization of cost and time",
        label: "Planning & cost",
      },
      { label: "Technical specifications" },
      {
        description: "Brainstorming, storyboard, managing graphic design, ...",
        label: "Conception",
      },
      {
        description:
          "Technical expertise, commercial proposal, quotation of cost",
        label: "Pre-sales",
      },
      { label: "SCRUM Management" },
      { label: "MS project" },
      { label: "Jira" },
    ],
  },
  {
    label: "Modelling",
    skills: [{ label: "MERISE2" }, { label: "UML" }, { label: "MERISE" }],
  },
  {
    label: "IDE",
    skills: [
      { label: "VS Code", level: 100 },
      { label: "IntelliJ, PHPStorm", level: 90 },
      { label: "Dev-C++" },
      { label: "Eclipse" },
      { label: "Netbeans" },
      { label: "MS Visual Studio" },
    ],
  },
  {
    label: "Spoken Languages",
    skills: [
      { description: "Native", label: "French - fr_FR", level: 100 },
      { description: "Fluent", label: "English - en_US", level: 100 },
      { description: "Beginner", label: "Vietnamese - vn_VN", level: 10 },
    ],
  },
];
