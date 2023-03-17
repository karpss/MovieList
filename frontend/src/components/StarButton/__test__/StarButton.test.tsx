import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import StarButton from '..';

describe('StarButton component', () => {
  it('renders a star border icon by default', () => {
    const { getByTestId } = render(<StarButton index={1} />);

    const starBorderIcon = getByTestId('star-border-icon');

    expect(starBorderIcon).toBeInTheDocument();
  });

  it('renders a star icon when clicked', () => {
    const { getByTestId } = render(<StarButton index={1} />);

    const starBorderIcon = getByTestId('star-border-icon');
    expect(starBorderIcon).toBeInTheDocument();

    fireEvent.click(starBorderIcon);

    const starButton = getByTestId('star-button');

    expect(starButton).toBeInTheDocument();
    expect(starBorderIcon).not.toBeInTheDocument();
  });
});
