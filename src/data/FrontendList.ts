import { FaAngular, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { SiBootstrap, SiReact, SiSass, SiTypescript } from "react-icons/si";

interface TechItem {
  image: React.ElementType;
  color: string;
}

export const techItems: TechItem[] = [
  {
    image: SiReact,
    color: "#61DBFB",
  },
  {
    image: FaAngular,
    color: "#DD0031",
  },
  {
    image: SiTypescript,
    color: "#007ACC",
  },
  {
    image: FaJs,
    color: "#F7DF1E",
  },
  {
    image: SiBootstrap,
    color: "#0d6efd",
  },
  {
    image: SiSass,
    color: "#CC6699",
  },
  {
    image: FaCss3Alt,
    color: "#1572B6",
  },
  {
    image: FaHtml5,
    color: "#E34F26",
  },
];
