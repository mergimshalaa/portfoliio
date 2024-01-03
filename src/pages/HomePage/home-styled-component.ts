import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 77vh;

  @media (max-width: 560px) {
    height: 78vh;
  }
`;

export const Content = styled.div`
  margin-right: 50px;
  margin-top 12rem;
  z-index: 1;

  @media (max-width: 767px) {
    margin-right: 0;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 2px;
  color: #000;
  margin-bottom: 1rem;
  vertical-align: top;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 875px) {
    font-size: 3rem;
  }

  @media (max-width: 575px) {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    margin-left: 3px;
  }

  @media (max-width: 380px) {
    font-size: 2.8rem;
  }
`;

export const Subtitle = styled.h2`
  letter-spacing: 1.5px;
  font-size: 3rem;
  color: #000;
  margin: 0;
  height: 4.5rem;
  vertical-align: top;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 875px) {
    font-size: 2.5rem;
    height: 3.5rem;
  }

  @media (max-width: 575px) {
    font-size: 2rem;
    height: auto;
    margin-left: 3px;
    height: 3.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }

  @media (max-width: 380px) {
    font-size: 1.5rem;
  }
`;

export const FirstLetterStyle = styled.span`
  color: #003;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;


