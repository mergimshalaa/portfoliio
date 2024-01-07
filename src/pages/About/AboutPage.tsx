import { techItems } from "../../data/FrontendList";

export function AboutPage() {
  return (
    <>
      <div>about me</div>
      <div className="tech-items-container">
        {techItems.map((tech, index) => (
          <div key={index} className="tech-item" style={{ backgroundColor: tech.color }}>
            {<tech.image />}
          </div>
        ))}
      </div>
    </>
  );
}