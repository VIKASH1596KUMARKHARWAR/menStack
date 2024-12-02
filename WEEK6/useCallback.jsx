/*useCallback: Returns a memoized version of a callback function that only changes if one of the dependencies has changed.
Use Case: Prevent unnecessary re-renders by memoizing callback functions that are passed down as props.*/

import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment} />
    </div>
  );
}

