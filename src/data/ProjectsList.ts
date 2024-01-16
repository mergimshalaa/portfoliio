import codewaveVideo from "../Projects/codewave.mp4";
import codifywebsiteVideo from "../Projects/codifywebsite.mp4";
import dictionaryAppVideo from "../Projects/dictionaryapp.mp4";
import filmflixVideo from "../Projects/filmflix.mp4";
import ilpizzenzaVideo from "../Projects/ilpizzenza.mp4";
import palimedaVideo from "../Projects/palimedashoes.mp4";
import savegbgVideo from "../Projects/savegbg.mp4";
import todolistVideo from "../Projects/todolist.mp4";
import weatherAppVideo from "../Projects/weatherApp.mp4";
import weatherappreactVideo from "../Projects/weatherappreact.mp4";

interface ProjectsCards {
  title: string;
  description: string;
  videoSrc: string;
  link: string;
}

export const ProjectsData: ProjectsCards[] = [
  {
    title: "Filmflix",
    description:"Group project where we created a 'Netflix', focus was writing tests for the application.",
    videoSrc: filmflixVideo,
    link: "https://filmfliix.netlify.app/",
  },
  {
    title: "Dictionary App",
    description:"School project were the task was to create a dictionary app with API writing tests. This project was created with React.",
    videoSrc: dictionaryAppVideo,
    link: "https://ms-dictionary-app.netlify.app/",
  },
  {
    title: "CodeWave",
    description:"Group project where the focus was working agile with scrum. This project was created with React.",
    videoSrc: codewaveVideo,
    link: "https://codewavedev.netlify.app/",
  },
  {
    title: "Il' Pizzenza",
    description:"This project was created out of focusing on mockups & design that I created with illustrator & Photoshop. Created in React.",
    videoSrc: ilpizzenzaVideo,
    link: "https://ilpizzenza.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "This was my first project working with API, I created a weather app displaying current weather with the date.",
    videoSrc: weatherAppVideo,
    link: "https://mergimshalaa.github.io/weatherApp/",
  },
  {
    title: "Palimeda Shoes",
    description:
      "School project that was created by a group of four people using React, React Bootstrap and TypeScript to build an e-commerce platform.",
    videoSrc: palimedaVideo,
    link: "https://github.com/plugga-tech/react-webshop-ts-parham-mergim-daniel-linus",
  },
  {
    title: "Save Gothenburg",
    description:
      "School project where we as a group of six persons created a game with OOP and with library p5.js and Typescript.",
    videoSrc: savegbgVideo,  
    link: "https://save-gothenburg.netlify.app/",
  },
  {
    title: "STORM by PAMEDA",
    description:
      "Miniproject, we created a web application working with API and functionality. This was created with React and Typescript.",
    videoSrc: weatherappreactVideo,
    link: "https://stormweatherappbypameda.netlify.app/",
  },
  {
    title: "Todo List",
    description:
      "Created a todo list to manage and practice Vanilla Javascript. This project was created with HTML & CSS and Javascript.",
    videoSrc: todolistVideo,
    link: "https://mergimshalaa.github.io/Todo-list/",
  },
  {
    title: "Codify - Still in process",
    description:
      "Created a startup for a website and it is still in process. This project is created with HTML, CSS and Vanilla Javascript.",
    videoSrc: codifywebsiteVideo,
    link: "https://mergimshalaa.github.io/Codify-website/",
  },
];
