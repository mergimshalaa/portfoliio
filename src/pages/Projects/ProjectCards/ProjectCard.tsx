import { Card, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledCard, Video, StyledText, StyledButton, StyledTitle } from "./project-card-styled-components";

type VideoCardProps = {
  title: string;
  description: string;
  videoSrc: string;
  link: string;
};

export function VideoCard({
  title,
  description,
  videoSrc,
  link,
}: VideoCardProps) {
  return (
    <StyledCard>
      <Video muted autoPlay loop playsInline>
        <source src={videoSrc} type="video/mp4" />
      </Video>
      <Card.Body>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{description}</StyledText>
        <div className="text-center">
          <Link to={link}>
            <StyledButton >Click Here</StyledButton>
          </Link>
        </div>
      </Card.Body>
    </StyledCard>
  );
}
