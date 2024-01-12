import { paragraphs } from "../../data/AboutTxt";
import ManWorkingImage from "../../img/man-office.png";
import { BackendList } from "./DevStack/BackendList";
import { FrontendList } from "./DevStack/FrontendList";
import {
  ImgContainer,
  StyledText,
  TextWrapper,
  Wrapper,
  Styledh2,
  StyledIntro,
} from "./aboutPage-styled-components";

export function AboutPage() {
  return (
    <>
      <StyledIntro>
        <h1>ABOUT ME</h1>
        <hr/>
        <span>
          Here you will find information about me, my my current skills mostly in terms of programming and technology, and
          what I like to do in my free time.
          technology
        </span>
      </StyledIntro>

      <Wrapper>
        <ImgContainer>
          <img
            height={700}
            src={ManWorkingImage}
            alt="Man working in an office"
            loading="lazy"
          />
        </ImgContainer>
        <TextWrapper>
          <Styledh2>Get to know me!</Styledh2>
          {paragraphs.map((paragraph, index) => (
            <StyledText key={index}>{paragraph.text}</StyledText>
          ))}
        </TextWrapper>
      </Wrapper>

      <FrontendList />
      <BackendList />
    </>
  );
}
