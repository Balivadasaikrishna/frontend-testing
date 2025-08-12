import React, { useState } from 'react';
import Button from './Button';

// Simple demo app to show my Button component
const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleToggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Button Component Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Counter: {count}</h3>
        <Button onClick={handleIncrement} disabled={isDisabled}>
          Increment Count
        </Button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Button onClick={handleToggleDisabled}>
          {isDisabled ? 'Enable Button' : 'Disable Button'}
        </Button>
      </div>

      <div>
        <p>This demonstrates the Button component I built with:</p>
        <ul>
          <li>Click handling</li>
          <li>Disabled state</li>
          <li>Custom styling</li>
          <li>TypeScript support</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
