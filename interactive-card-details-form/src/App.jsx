// App.js
import React from 'react';
import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'; // Adjust the import path based on your project structure

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
