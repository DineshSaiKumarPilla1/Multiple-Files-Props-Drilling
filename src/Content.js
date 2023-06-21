import React from 'react';
import Button from './Button';

function Content({ count, incrementCount }) {
  return (
    <div>
      <h2>Content Component</h2>
      <p>Count: {count}</p>
      <Button incrementCount={incrementCount} />
    </div>
  );
}

export default Content;