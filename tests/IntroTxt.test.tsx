import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Intro from "../src/pages/About/IntroTxt";

describe("Intro Component", () => {
  it('renders header with "ABOUT ME"', () => {
    render(<Intro />);
    const headerElements = screen.getAllByText(/ABOUT ME/i);
    expect(headerElements.length).toBeGreaterThan(0);
  });

  it("renders a horizontal line under H1", () => {
    render(<Intro />);
    const horizontalLineElement = screen.getByRole("separator");
    expect(horizontalLineElement).toBeInTheDocument();
  });

  it('renders the information paragraph', () => {
    render(<Intro />);
    const infoParagraph = screen.getByText(
      /Here you will find information about me, my current skills mostly in terms of programming and technology and what I like to do in my free time./i
    );
    expect(infoParagraph).toBeInTheDocument();
  });

  it('renders StyledIntro component', () => {
    render(<Intro />);
    const styledIntroElement = screen.getByTestId('styled-intro');
    expect(styledIntroElement).toBeInTheDocument();
  });
});
