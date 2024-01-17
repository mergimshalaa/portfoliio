import { DiGit, DiVisualstudio } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

interface ToolItem {
 image: React.ElementType;
  color: string;
}

export const toolItems: ToolItem[] = [
  {
    image: DiVisualstudio,
    color: '#007ACC',
  },
  {
    image: DiGit,
    color: 'red',
  },
  {
    image: FaGithub,
    color: '#fff'
  },
  {
    image: FiFigma,
    color: '#F24E1E',
  },
];
