import './index.css';
import { useEffect, useState } from 'react';

function App() {

  const [time, setTime] = useState(0);

  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running] );

  return (

    <>
    <div className="items-center flex flex-col h-screen gap-5">
      <h1 className="text-3xl font-bold font-inter text-center">
        Stop Watch
      </h1>
      <div className="text-5xl font-inter text-center">
        <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</span>
        <span>{("0" + (time/10) % 100).slice(-2)}</span>
      </div>

      <div className="flex gap-5 justify-between">
        {running ? 
          (
            <button className="bg-red-400 text-white px-4 py-3 rounded ring-2 ring-red-600" onClick={() => (setRunning(false))}>Stop</button>
          ) : (
            <button className="bg-green-400 text-white px-4 py-3 rounded ring-2 ring-green-600" onClick={() => (setRunning(true))}>Start</button>
          ) }
        <button className="bg-blue-400 text-white px-4 py-3 rounded ring-2 ring-blue-600" onClick={() => (setTime(0))}>Reset</button>
      </div>

    </div>
    </>
  );
}

export default App;
