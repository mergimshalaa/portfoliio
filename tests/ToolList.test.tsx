import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { toolItems } from '../src/data/ToolList';
import { ToolList } from '../src/pages/About/DevStack/ToolList';

describe('ToolList component', () => {
  it('should render without crashing', () => {
    render(<ToolList />);
  });

  it('renders the correct number of my tools icons', () => {
    const { getAllByTestId } = render(<ToolList />);
    const toolIcons = getAllByTestId('tool-icon');
    expect(toolIcons.length).toEqual(toolItems.length);
  });
});
