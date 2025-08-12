import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/App';

describe('App Component', () => {
  it('should render the app title', () => {
    const { getByText } = render(<App />);
    expect(getByText('My Button Component Demo')).toBeInTheDocument();
  });

  it('should increment counter when button is clicked', () => {
    const { getByText } = render(<App />);
    
    // Initial count should be 0
    expect(getByText('Counter: 0')).toBeInTheDocument();
    
    // Click the increment button
    fireEvent.click(getByText('Increment Count'));
    
    // Count should be 1
    expect(getByText('Counter: 1')).toBeInTheDocument();
  });

  it('should toggle button disabled state', () => {
    const { getByText } = render(<App />);
    
    // Initially button should be enabled
    const incrementButton = getByText('Increment Count');
    expect(incrementButton).not.toBeDisabled();
    
    // Click toggle button
    fireEvent.click(getByText('Disable Button'));
    
    // Now increment button should be disabled
    expect(incrementButton).toBeDisabled();
  });
});
