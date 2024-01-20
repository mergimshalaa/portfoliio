import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  --bs-bg-opacity: 1;
  color: #fff;
  left: 0;
  right: 0;
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 5.5rem;
  padding: 1rem 0;
  backdrop-filter: blur(7px) brightness(0.5);
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0.5px 5px #292829;

  @media (max-width: 640px) {
    margin-top: 3.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 0 1rem;
    font-size: 1.3rem;
    color: #fff;
    transition: color 0.3s;

    &:hover {
      color: #b3b3b3;
    }
  }
`;