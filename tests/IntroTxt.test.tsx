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
});
