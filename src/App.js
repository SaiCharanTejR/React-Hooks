import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `current count is ${count}`
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Me</button>
      </header>
    </div>
  );
}

export default App;
