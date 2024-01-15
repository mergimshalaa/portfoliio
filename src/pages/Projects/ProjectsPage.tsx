import { ProjectsData } from '../../data/ProjectsList';
import { Container } from 'react-bootstrap';


export function ProjectsPage() {
  return (
    <>
      <div>
        <h2>Projects</h2>
        {ProjectsData.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Container>
              <video width="320" height="240" controls>
                <source src={project.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Container>
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
