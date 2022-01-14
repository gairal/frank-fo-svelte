import type { SkillByCategory } from "../../src/types";

export const skillsFixtures = (): SkillByCategory[] => [
  {
    label: "Back-end development",
    skills: [
      { label: "GoLang", level: 20 },
      { label: "C#/Windows Phone", level: 50 },
      { label: "Java/Android API", level: 25 },
      { label: "Python", level: 50 },
      { label: "Spring Framework", level: 40 },
      { label: "XSLT", level: 75 },
      { label: "C/GTK+", level: 50 },
      { label: "Visual Basic", level: 75 },
      { description: "SFR mobile Meta Language", label: "PML", level: 75 },
      { label: "VBA Excel & Access", level: 75 },
      { description: "Orange mobile Meta Language", label: "OML", level: 75 },
      { label: ".NET/C#/WPF", level: 75 },
      { label: "PHP", level: 75 },
      { label: "Django", level: 50 },
      { label: "Java/J2ee", level: 50 },
      { label: "Flex", level: 25 },
      { label: "C++", level: 50 },
      { label: "XML", level: 100 },
      { label: "NodeJS", level: 85 },
    ],
  },
  {
    label: "Front-end development",
    skills: [
      { label: "Functional CSS", level: 100 },
      { label: "ReactJS/Redux", level: 80 },
      { label: "BEM", level: 100 },
      { label: "Webpack", level: 100 },
      { label: "VueJS", level: 70 },
      { label: "Grunt, Gulp", level: 90 },
      { label: "Foundation", level: 80 },
      { label: "Bootstrap 3 & 4", level: 75 },
      { label: "sass, less", level: 100 },
      { label: "Material Design", level: 90 },
      { label: "HTML 5", level: 100 },
      { label: "JQuery", level: 100 },
      { label: "JavaScript", level: 75 },
      { label: "CSS3", level: 100 },
      { label: "Angular", level: 80 },
    ],
  },
  {
    label: "Server administration",
    skills: [
      { label: "Apache Tomcat", level: 50 },
      { label: "Shell Script", level: 50 },
      { label: "Apache httpd", level: 70 },
    ],
  },
  {
    label: "Source Control",
    skills: [
      { label: "GIT, Gitlab", level: 80 },
      { label: "SVN", level: 80 },
    ],
  },
  {
    label: "Database",
    skills: [
      { label: "SQL", level: 75 },
      { label: "Oracle", level: 75 },
      { label: "MySQL", level: 100 },
      { label: "Access", level: 75 },
      { label: "MS SQLServer", level: 75 },
    ],
  },
  {
    label: "Operating Systems",
    skills: [
      { label: "CentOS", level: 80 },
      { label: "Windows xp, Vista, 7, 8", level: 100 },
      { label: "Ubuntu / Debian", level: 100 },
      { label: "Linux other distributions" },
      { label: "MacOS 10.x", level: 100 },
    ],
  },
  {
    label: "Modelling",
    skills: [{ label: "MERISE2" }, { label: "UML" }, { label: "MERISE" }],
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
      { label: "Team motivation" },
    ],
  },
  {
    label: "IDE",
    skills: [
      { label: "Dev-C++" },
      { label: "Eclipse" },
      { label: "Netbeans" },
      { label: "Expression Blend" },
      { label: "MS Visual Studio" },
      { label: "IntelliJ, PHPStorm", level: 90 },
    ],
  },
  {
    label: "languages",
    skills: [
      { description: "native language", label: "French", level: 100 },
      { description: "fluent - TOEIC: 820pts", label: "English", level: 75 },
      { description: "Learning...", label: "Vietnamese", level: 10 },
    ],
  },
  {
    label: "Miscellaneous",
    skills: [
      { label: "Electronics" },
      { label: "Economics" },
      { label: "Quality control" },
      { label: "Probabilities" },
      { label: "Employment law" },
      { label: "Marketing" },
      { label: "Nano-science" },
    ],
  },
];
