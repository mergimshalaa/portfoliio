import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%) rotate(0deg);
  animation: ${spinAnimation} 1s linear infinite;
`;

export const StyledContainer = styled.div`
  height: 100vh;
  background-color: #000;
`;