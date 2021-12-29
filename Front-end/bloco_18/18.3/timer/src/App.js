import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [timer, setTimer] = useState();

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTimer(Math.random().toFixed(1) * 100);
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);
  return (
    <div className="App">
      <h1>{timer}</h1>
      <a href="https://www.youtube.com/watch?v=qJIfavKyYvU&ab_channel=PHONKONAUT">
        Visitare
      </a>
    </div>
  );
}

export default App;
