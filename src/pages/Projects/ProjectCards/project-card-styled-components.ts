import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
import { VideoCard } from "./ProjectCard";


export const Video = styled.video`
  width: 100%;
`;

export const StyledTitle = styled(Card.Title)`
  color: white;
  font-size: 23px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const StyledText = styled(Card.Text)`
  color: white;
  font-size: 17px;

  @media (max-width: 668px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const StyledCard = styled(Card)`
  height: 24.5rem;
  width: 20rem;
  border: solid 2px gray;
  box-shadow: 0px 4px 6px rgba(255, 255, 255, 0.2);

  > div {
    background-color: #000000;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  @media (max-width: 668px) {
    width: 16rem;
    height: 22.5rem;
  }

  @media (max-width: 500px) {
    width: 15rem;
    height: 19.5rem;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 15px;
  padding: 10px 20px;
  background-color: black;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 15px;
    margin-top: 5px;
  }

  @media (max-width: 600px) {
    padding: 5px 15px;
    margin-top: 11px;
  }
`;

export const StyledVideoCard = styled(VideoCard)`
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;