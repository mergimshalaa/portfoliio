import { introTxt } from "../../data/IntroTxt";
import { StyledIntro } from "./projects-styled-components";

export default function ProjectIntro() {
  return (
    <>
      <StyledIntro data-testid="styled-intro">
        <h2>PROJECTS</h2>
        <hr />
        <span>
          {introTxt[0].ProjectPageText}
        </span>
      </StyledIntro>
    </>
  );
}
