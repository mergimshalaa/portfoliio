import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import { StyledLink } from "./links-styled-components";

interface NavbarLinksProps {
  handleClose: () => void;
}

export function NavbarLinks({ handleClose }: NavbarLinksProps) {
  return (
    <Nav className="flex-column">
      <StyledLink onClick={handleClose} to="/" exact as={NavLink}>
        Home
      </StyledLink>
      <StyledLink onClick={handleClose} to="/about" as={NavLink}>
        About
      </StyledLink>
      <StyledLink onClick={handleClose} to="/projects" as={NavLink}>
        Projects
      </StyledLink>
      <StyledLink onClick={handleClose} to="/resume" as={NavLink}>
        Resume
      </StyledLink>
    </Nav>
  );
}
