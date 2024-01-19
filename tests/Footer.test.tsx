import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { Footer } from '../src/components/Footer/Footer';

it('renders Footer component in application', () => {
  render(<Footer />);

  expect(screen.getByTestId('footer')).toBeInTheDocument();
  expect(screen.getByTestId('github-icon')).toBeInTheDocument();
  expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
  expect(screen.getByTestId('email-icon')).toBeInTheDocument();
});
