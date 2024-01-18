import Typewriter from "typewriter-effect";
import { videoData } from "../../data/HomePageEarth";
import { BackgroundVideo, Container, Content, FirstLetterStyle, Subtitle, Title } from "./home-styled-component";

export function Home() {
  return (
    <>
      <Container>
        <BackgroundVideo muted autoPlay loop playsInline preload="metadata">
          <source src={videoData.videoSrc} type="video/mp4" />
        </BackgroundVideo>
        <Content>
          <Title data-testid="full-name">
            <FirstLetterStyle>M</FirstLetterStyle>ergim{" "}
            <FirstLetterStyle>S</FirstLetterStyle>hala
          </Title>
          <Subtitle>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "HTML & CSS",
                  "Javascript/Typescript",
                  "React & Angular",
                  "Node & GIT",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 35,
                delay: 150,
              }}
              onInit={(typewriter) => {
                typewriter.changeDeleteSpeed(20).start();
              }}
            />
          </Subtitle>
        </Content>
      </Container>
    </>
  );
}