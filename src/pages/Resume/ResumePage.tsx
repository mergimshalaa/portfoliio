import PageOne from '../Resume/cvimg/Page1.jpeg'
import PageTwo from '../Resume/cvimg/Page2.jpeg'
import resumePDF from '../Resume/mergimshala.pdf';
import { GridContainer, StyledButton, StyledImage, Styledh2, Container } from './resume-styled-component';

function downloadResume() {
  const link = document.createElement('a');
  link.href = resumePDF;
  link.download = 'mergimshalaCV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function ResumePage() {
  return (
    <>
      <Styledh2>RESUME</Styledh2>
      <GridContainer>
        <StyledImage src={PageOne} alt="Page One" />
        <StyledImage src={PageTwo} alt="Page Two" />
      </GridContainer>
      <Container>
        <StyledButton onClick={downloadResume}>DOWNLOAD CV</StyledButton>
      </Container>
    </>
  );
}