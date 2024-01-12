import { Nav, NavLink } from "react-bootstrap";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
display: flex;
align-items: center;
font-weight: 600;
padding: 0 3rem;
color: #fff;
text-decoration: none;
letter-spacing: 1px;
text-transform: uppercase;
font-size: 1.1rem;
transition: all 0.7s ease;
font-family: "Source Sans Pro", sans-serif;
outline: none;
position: relative;

&:hover {
  color: #fff;
}

&:before {
  content: '';
  position: absolute;
  left: 2;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: width 0.3s ease;
}

&:hover:before {
  width: calc(100% - 6rem);
}
`;

export const StyledNav = styled(Nav)`
@media (max-width: 768px) {
  display: none;
}
`;


export const StyledLinkHome = styled(NavLink)`
margin-left: 5rem;
color: #fff;

@media (max-width: 768px) {
  margin-left: 0;
  position: absolute;
  top: 50%;
  right: 0;
  padding-right: 20px;
  transform: translateY(-50%);
}
`;
