import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { techItems } from '../src/data/BackendList';
import { BackendList } from '../src/pages/About/DevStack/BackendList';

describe('BackendList component', () => {
  it('should render without crashing', () => {
    render(<BackendList />);
  });

  it('renders the correct number of tech icons', () => {
    const { getAllByTestId } = render(<BackendList />);
    const techIcons = getAllByTestId('tech-icon');
    expect(techIcons.length).toEqual(techItems.length);
  });
});
