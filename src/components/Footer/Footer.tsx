import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FooterWrapper, IconWrapper } from './footer-styled-component';

export function Footer() {
  return (
    <FooterWrapper data-testid="footer">
      <IconWrapper>
        <a href="https://github.com/mergimshalaa" data-testid="github-icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mergim-shala-230691220/" data-testid="linkedin-icon">
          <FaLinkedin />
        </a>
        <a href="mailto:m3rgiim@hotmail.com" data-testid="email-icon">
          <FaEnvelope />
        </a>
      </IconWrapper>
    </FooterWrapper>
  );
}
