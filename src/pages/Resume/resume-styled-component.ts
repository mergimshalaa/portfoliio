import styled from "styled-components";

export const Styledh2 = styled.h2`
  margin: 2rem 0 1rem 0;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 10px 16px;
  }

  @media (max-width: 380px) {
    font-size: 20px;
    padding: 6px 12px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-right: 1rem;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 10px;
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const StyledButton = styled.button`
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: #1D1D1D;
  padding: 1.2rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  text-align: center;
  border: 2px solid #2196f3;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #2196f3;
    border-color: #2196f3;
  }
  
  &:focus {
    outline: none;
  }
  
  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 14px 1rem;
    font-size: 16px;
    margin-top: 2.3rem;
    margin-bottom: 2.3rem;
  }
`;
