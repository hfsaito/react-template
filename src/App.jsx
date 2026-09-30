import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className='container'>
      <h1 className='title'>React Template</h1>
      <p className='text'>
        Edit <code className='code'>src/App.jsx</code> and <code className='code'>src/App.css</code> to get started.
      </p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </main>
  );
}
