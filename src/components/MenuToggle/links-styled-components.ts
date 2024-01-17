import { NavLink } from "react-bootstrap";
import styled from "styled-components";

export const StyledLink = styled(NavLink)<{ exact?: boolean }>`
  color: white;
  margin-right: 10px;
  margin-bottom: 30px;
  letter-spacing: 1px;
  font-weight: 300;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #B3B3B3;

  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.7s ease;
  outline: none;
  position: relative;
  

  &:hover {
    color: white;
  }
`;
