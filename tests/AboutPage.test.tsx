import { render, screen } from '@testing-library/react';
import { expect, it } from "vitest";
import { paragraphs } from '../src/data/AboutTxt';
import ManWorkingImage from "../src/img/man-office.png";
import { AboutPage } from '../src/pages/About/AboutPage';

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
