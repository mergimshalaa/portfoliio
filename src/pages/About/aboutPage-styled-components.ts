import styled from 'styled-components';

export const TextWrapper = styled.div`
flex: 1;
margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }

  animation: slide-in 1.5s ease-out;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes slide-in {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const StyledText = styled.p`
  color: white;
  font-size: 1.1rem;
  line-height: 1.5;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  margin-top: 1rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  max-width: 100%;
  text-align: center;
  flex: 1;

  img {
    max-width: 100%;
    height: 490px;
  }

  @media (max-width: 768px) {
    img {
      height: auto;
    }
  }
`;

export const Styledh2 = styled.h2`
  font-size: 2rem;
  color: white;
  margin-top: 1rem;

  @media (max-width: 520px) {
    font-size: 1.5rem;
    margin-left: 10px;
  }
`;