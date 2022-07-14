import { useRef } from 'react';
import Exercise from './components/Exercise/Exercise';
import WheelLuck from './components/WheelLuck/WheelLuck';

function App() {
  const wheelRef =useRef()
  const handleReady = (wheel) => {
    wheelRef.current = wheel;
  }

  const handleStart = () => {
    setTimeout(() => {
      wheelRef.current.stop(3)
    }, 3000)
  }
  return (
    <div className="App">
      <Exercise onReady={handleReady} onStart={handleStart} />
    </div>
  );
}

export default App;
