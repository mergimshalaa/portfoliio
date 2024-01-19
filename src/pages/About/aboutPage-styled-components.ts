import styled from 'styled-components';

export const TextWrapper = styled.div`
  flex: 1;
  margin-right: 2rem;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    margin-right: 0;
  }

  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const StyledText = styled.p`
  color: white;
  font-size: 1.1rem;
  line-height: 1.5;

  @media (max-width: 520px) {
    font-size: 1rem;
    margin-left: 10px;
  }
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

  @media (max-width: 520px) {
    margin-top: 40rem;
  }
`;
