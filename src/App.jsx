import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideNav from './components/sidenav'
import header from './assets/header.jpg'
import supabase from './config/client'
function App() {
console.log(supabase);
  const [count, setCount] = useState(0)

  const ACCESS_KEY = import.meta.env.VITE_APP_SUPABASE_URL ;
  const key = import.meta.env

  return (
    <div className="App">
   <SideNav />

   <h1> Among Us </h1>
   <p> This is the crew mate 
   </p>
    </div>
  )
}

export default App
