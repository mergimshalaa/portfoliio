import { assert, it } from 'vitest';
import { Home } from '../src/pages/HomePage/HomePage';
import { render, screen } from '@testing-library/react';

it('renders the correct title content in homepage', () => {
    render(<Home />);

    const myNameElement = screen.getByTestId('full-name');
    assert.equal(myNameElement.textContent, 'Mergim Shala');
});