import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../src/Button';

describe('Button Component', () => {
  // Test basic rendering
  it('should render button with text', () => {
    const { getByTestId } = render(
      <Button onClick={() => {}}>Click me</Button>
    );
    expect(getByTestId('custom-button')).toHaveTextContent('Click me');
  });

  // Test click functionality
  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    
    fireEvent.click(getByTestId('custom-button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test disabled state
  it('should be disabled when disabled prop is true', () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} disabled={true}>Disabled Button</Button>
    );
    
    const button = getByTestId('custom-button');
    expect(button).toBeDisabled();
  });

  // Test button element type
  it('should render as button element', () => {
    const { getByTestId } = render(
      <Button onClick={() => {}}>Test Button</Button>
    );
    
    const button = getByTestId('custom-button');
    expect(button.tagName).toBe('BUTTON');
  });
}); 