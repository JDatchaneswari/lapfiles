import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [counter, setCounter] = useState(0)
  function incrementHandler(){
    //counter=counter+1;
    setCounter(counter+1)
    console.log(counter);
  }
  return (
    <> 
  <div className="center">
    <h2>This is a simple Counter App</h2>
    <h1>{counter}</h1>
    <button className='btn' onClick={incrementHandler}>Increment the Value</button>
  </div>
    </>
  )
}
export default App
