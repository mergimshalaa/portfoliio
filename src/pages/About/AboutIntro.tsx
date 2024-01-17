import { introTxt } from "../../data/IntroTxt";
import { StyledIntro } from "./aboutPage-styled-components";


export default function AboutIntro() {
  return (
    <>
      <StyledIntro data-testid="styled-intro">
        <h2>ABOUT ME</h2>
        <hr />
        <span>
          {introTxt[0].AboutPageText}
        </span>
      </StyledIntro>
    </>
  );
}
