import { Nav, NavLink } from "react-bootstrap";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
display: flex;
align-items: center;
font-weight: 600;
padding: 0 3rem;
color: #333;
text-decoration: none;
letter-spacing: 1px;
text-transform: uppercase;
font-size: 1.2rem;
transition: all 0.7s ease;
font-family: "Source Sans Pro", sans-serif;
outline: none;
position: relative;

:hover {
  color: blue;
}
`;
