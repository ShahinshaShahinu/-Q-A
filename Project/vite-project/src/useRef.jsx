import React, { useRef, useState, useEffect } from 'react';

function ExampleComponent() {
  // Create a ref to store a mutable value
  

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment State</button>
      <button onClick={incrementCount}>Increment Ref</button>
    </div>
  );
}

export default ExampleComponent;
