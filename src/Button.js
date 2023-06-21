import React from 'react';

function Button({ incrementCount }) {
  return (
    <button onClick={incrementCount}>
      Increment Count
    </button>
  );
}

export default Button;
