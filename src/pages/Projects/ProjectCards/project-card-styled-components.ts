import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { VideoCard } from "./ProjectCard";


export const Video = styled.video`
  width: 100%;
`;

export const StyledTitle = styled(Card.Title)`
  color: white;
  font-size: 23px;
`;

export const StyledText = styled(Card.Text)`
  color: white;
  font-size: 17px;
`;

export const StyledCard = styled(Card)`
  height: 24.5rem;
  width: 20rem;
  border: solid 2px gray;
  box-shadow: 0px 4px 6px rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 12px rgba(255, 255, 255, 0.4);
    transform: translateY(-7px);
  }

  > div {
    background-color: rgb(5 8 22);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 15px;
  padding: 10px 20px;
  background-color: black;
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