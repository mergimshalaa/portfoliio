import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 77vh;
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
  color: #F2F2F2;
  margin-bottom: 1rem;
  vertical-align: top;
  font-weight: 700;
  -webkit-text-stroke: 2px #000;
  font-family: "Source Sans Pro", sans-serif;
  opacity: 0.9;
  background-color: rgba(0, 0, 0, 0.3);

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
  color: #F2F2F2;
  margin: 0;
  height: 4.5rem;
  vertical-align: top;
  font-family: "Source Sans Pro", sans-serif;

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
  color: #F2F2F2;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  filter: brightness(50%);
`;


