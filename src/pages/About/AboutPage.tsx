import { paragraphs } from "../../data/AboutTxt";
import ManWorkingImage from "../../img/man-office.png";
import { BackendList } from "./DevStack/BackendList";
import { FrontendList } from "./DevStack/FrontendList";
import { ImgContainer, StyledText, TextWrapper, Wrapper, Styledh2 } from "./aboutPage-styled-components";

export function AboutPage() {
  return (
    <>
      <Wrapper>
        <ImgContainer>
          <img height={700} src={ManWorkingImage} alt="Man working in an office" loading="lazy"/>
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
