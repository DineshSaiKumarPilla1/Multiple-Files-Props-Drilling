import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Header />
      <Content count={count} incrementCount={incrementCount} />
      <Footer count={count} />
    </div>
  );
}

export default App;
