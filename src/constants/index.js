import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    next,
    heroku,
    carrent,
    Youtube,
    lyrics,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-end Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fullstack web developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Nextjs",
      icon: next,
    },
    {
      name: "Heroku",
      icon: heroku,
    },
  ];
  
  
  
  
 
  
  const projects = [
    {
      name: "Youtube Clone",
      description:
        "It provides users with a familiar interface to search for and watch videos  and interact with content. The project demonstrates my skills in front-end development, including React,Redux and integrating with external APIs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "blue-text-gradient",
        },
      ],
      image: Youtube,
      source_code_link: "https://github.com/anshadanchu368/YoutubeCLone",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/anshadanchu368/CarsPedia",
      hosted_link:"https://cars-pedia-9l6e.vercel.app/"
    },
    {
      name: "Lyrics App",
      description:
        "Spotify. It provides users with a similar experience to search for and listen to their favorite music and discover new songs and artists. The project showcases my skills in front-end development, including React, HTML, CSS, and integrating with APIs.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "frontend",
          color: "blue-text-gradient",
        },
      ],
      image: lyrics,
      source_code_link: "https://github.com/anshadanchu368/LyricsMusicApp",
    },
  ];
  
  export { services, technologies, projects };