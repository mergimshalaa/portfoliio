import { useEffect, useRef } from "react";
import { paragraphs } from "../../data/AboutTxt";
import ManWorkingImage from "../../img/man-office.png";
import { BackendList } from "./DevStack/BackendList";
import { FrontendList } from "./DevStack/FrontendList";
import { ImgContainer, StyledIntro, StyledText, Styledh2, TextWrapper, Wrapper } from "./aboutPage-styled-components";

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
      <StyledIntro>
        <h1>ABOUT ME</h1>
        <hr />
        <span>
          Here you will find information about me, my current skills mostly
          in terms of programming and technology and what I like to do in my
          free time.
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
        <TextWrapper ref={paragraphsRef} className="TextWrapper hidden">
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
