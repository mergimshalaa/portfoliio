import { paragraphs } from "../../data/AboutTxt";
import { BackendList } from "./DevStack/BackendList";
import { FrontendList } from "./DevStack/FrontendList";
import { StyledText, TextWrapper, Wrapper } from "./aboutPage-styled-components";


export function AboutPage() {
  return (
    <>
      <h2>Hey there!</h2>
      <Wrapper>
        <TextWrapper>
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
