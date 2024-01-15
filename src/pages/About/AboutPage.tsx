import { useEffect, useRef } from "react";
import { paragraphs } from "../../data/AboutTxt";
import ManWorkingImage from "../../img/man-office.png";
import { BackendList } from "./DevStack/BackendList";
import { FrontendList } from "./DevStack/FrontendList";
import Intro from "./IntroTxt";
import { ImgContainer, StyledText, Styledh2, TextWrapper, Wrapper } from "./aboutPage-styled-components";

export function AboutPage() {
  const paragraphsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const paragraphsElement = paragraphsRef.current as HTMLElement | null;
  
      if (paragraphsElement) {
        const rect = paragraphsElement.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 470;
  
        if (isVisible) {
          paragraphsElement.classList.add("visible");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <>
      <Intro />
      <Wrapper>
        <ImgContainer>
          <img
            height={700}
            src={ManWorkingImage}
            alt="Man working in an office"
            loading="lazy"
          />
        </ImgContainer>
        <TextWrapper ref={paragraphsRef} className="TextWrapper hidden" data-testid="text-wrapper">
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
