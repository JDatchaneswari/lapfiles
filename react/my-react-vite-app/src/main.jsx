import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import ReactSvg from './assets/react.svg'//import image
import garden from './assets/garden.jpg'//import image folder
import './index.css'
let name=['datchu','saravana','archu','hariniraman'];
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <h1>Welcome to my webpage {name[Math.floor(Math.random()*name.length)]}</h1>
  <img src={ReactSvg} alt="" />
  <img src={garden} alt="" className='garden'/>
  <p>Hello {name[3]}</p>
  </>
 // <React.StrictMode>
  //  <App />
  //</React.StrictMode>,
)
