import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='sm:w-[640px] max-sm:flex-col max-sm:justify-center max-sm:w-auto  gap-6 flex m-auto items-center'>
        <img src="https://source.unsplash.com/1600x1000/?woman" className='sm:h-60 max-sm:h-44 max-sm:rounded[50%] transition-all rounded-2xl' alt=""/>
        <div className='sm:text-left '>
          <h1 className='text-3xl font-extrabold'>hey this is duck</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing eo obestiae, libero, autem earum eius aperiam quaerat eaque.</p>
          <button className="px-6 py-3 bg-black hover:bg-white hover:text-slate-950 hover:border transition-all text-white rounded-xl mt-3 btn">Follow me</button>
        </div>
       </div>
    </>
  )
}

export default App
