import { render, screen } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import { paragraphs } from '../src/data/AboutTxt';
import ManWorkingImage from "../src/img/man-office.png";
import { AboutPage } from '../src/pages/About/AboutPage';
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

it('renders paragraphs from AboutTxt data', () => {
  render(<AboutPage />);
  paragraphs.forEach((paragraph) => {
    const paragraphElement = screen.getByText(paragraph.text);
    expect(paragraphElement).toBeInTheDocument();
  });
});

it('renders img with the correct attributes', () => {
  render(<AboutPage />);
  const imageElement = screen.getByAltText('Man working in an office');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', ManWorkingImage);
  expect(imageElement).toHaveAttribute('loading', 'lazy');
  expect(imageElement).toHaveAttribute('height', '700');
});

it('renders Styledh2 component with "Get to know me!" text', () => {
  render(<AboutPage />);
  const styledH2Element = screen.getByText(/Get to know me!/i);
  expect(styledH2Element).toBeInTheDocument();
});

it('applies "visible" class to TextWrapper after scrolling', () => {
  render(<AboutPage />);
  const textWrapperElement = screen.getByTestId('text-wrapper');
  
  window.scrollY = 500;
  window.dispatchEvent(new Event('scroll'));

  expect(textWrapperElement).toHaveClass('visible');
});

it('applies "hidden" class to TextWrapper initially', () => {
  render(<AboutPage />);
  const textWrapperElement = screen.getByTestId('text-wrapper');
  expect(textWrapperElement).toHaveClass('hidden');
});