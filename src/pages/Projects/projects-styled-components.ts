import styled from "styled-components";

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 50px;
  margin-bottom: 30px;
`;

export const CardDeck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;
  width: 100%;
`;

export const StyledIntro = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40rem;
  text-align: center;
  color: #fff;
`;

export const StyledLine = styled.hr`
  margin-top: 46rem;
  color: #fff;
`;
