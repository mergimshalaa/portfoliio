import { ProjectsData } from "../../data/ProjectsList";
import { StyledVideoCard } from "./ProjectCards/project-card-styled-components";
import ProjectIntro from "./ProjectIntro";
import { CardDeck, ProjectCard, StyledLine } from "./projects-styled-components";

export function ProjectsPage() {
  return (
    <>
      <ProjectIntro />
      <StyledLine />
      <ProjectCard>
        <CardDeck>
          {ProjectsData.map((project) => (
            <StyledVideoCard
              key={project.title}
              title={project.title}
              description={project.description}
              videoSrc={project.videoSrc}
              link={project.link}
            />
          ))}
        </CardDeck>
      </ProjectCard>
    </>
  );
}

