import { ProjectsData } from "../../data/ProjectsList";
import { StyledVideoCard } from "./ProjectCards/project-card-styled-components";
import { CardDeck, ProjectCard } from "./projects-styled-components";

export function ProjectsPage() {
  return (
    <>
      <h2>Projects</h2>
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

