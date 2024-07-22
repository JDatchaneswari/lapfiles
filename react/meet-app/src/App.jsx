import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/index'
import ErrorPage from './pages/ErrorPage'
import AddMeeting from './pages/AddMeeting'
import{Route,Routes}from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddMeeting/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  )
}
export default App
