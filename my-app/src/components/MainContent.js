import { useState } from 'react';

export default function MainContent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>A Modern Book Inventory Explore</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
