import { StyledIntro } from "./aboutPage-styled-components";

export default function Intro() {
  return (
    <>
      <StyledIntro data-testid="styled-intro">
        <h1>ABOUT ME</h1>
        <hr />
        <span>
          Here you will find information about me, my current skills mostly in
          terms of programming and technology and what I like to do in my free
          time.
        </span>
      </StyledIntro>
    </>
  );
}
