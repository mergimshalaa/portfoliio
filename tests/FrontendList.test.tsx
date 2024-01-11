import { render, screen } from '@testing-library/react';
import { expect, it } from "vitest";
import { techItems } from '../src/data/FrontendList';
import { FrontendList } from '../src/pages/About/DevStack/FrontendList';

it('should render my frontend-list icons', () => {
  render(<FrontendList />);

  const headerElement = screen.getByText(/Frontend/i);
  expect(headerElement).toBeInTheDocument();

  techItems.forEach((_, index) => {
    const techIcon = screen.getByTestId(`tech-icon-${index}`);
    expect(techIcon).toBeInTheDocument();
  });
});
