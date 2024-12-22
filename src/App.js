import { useState } from 'react';
import Header from './Header';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  }

  const decrement = () => {
    setValue(value - 1);
  }

  const reset = () => {
    setValue(0);
  }
  
  return (
  <>
  <Header/>
     <div className="CounterApp">
      <p className='myParagraph'>{value}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>

  </>
  );
}

export default App;
