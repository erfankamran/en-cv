import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import mapImg from "@/public/map.png";
import yaratubeImg from "@/public/yaratube.png";
import spadanaImg from "@/public/spadana.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "mushroom . news",
    description:
      "I worked as a web developer on this startup project for 1 years. This company is a startup dedicated to modernizing the mushroom industry and providing an integrated platform for this sector.",
    tags: ["Html5", "Css3", "Javascript", "WordPress", "Cpanel"],
    imageUrl: corpcommentImg,
  },
  {
    title: "mushroom map",
    description:
      "I worked as a Php developer on this project for 6 mounths. Users can navigate to the branches of mushroom production factories.",
    tags: ["javascript", "leafletJs", "MySql", "PhP", "Laravel" , "PWA"],
    imageUrl: mapImg,
  },
  {
    title: "Yaratube",
    description:
      "I worked as WordPress developer. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: yaratubeImg,
  },
  {
    title: "Spadana vending",
    description:
      "I worked as E-commerce managmer. This company manufactured vending machines and provided related services.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer" , "Framer"],
    imageUrl: spadanaImg,
  },
] as const;

export const skillsData = [
  "start➡",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Jquery",
  "Bootstrap5",
  "-",
  "Wordpress",
  "WooCommerce",
  "Elementor",
  "SEO",
  "-",
  "PHP",
  "Mysql",
  "Git",
  "Github",
  "Laravel",
  "Redis",
  "Docker",
  "-",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
