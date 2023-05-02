import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from './pages/Gallery.jsx'
import Create from './pages/Create.jsx'
import Update  from './pages/Update.jsx';
import Info from './pages/Info.jsx'
import Login from './pages/Login.jsx';
import SideNav from "./components/sidenav";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       
<BrowserRouter>
<SideNav/>
    <Routes>
    
    {/* <Route path="/gallery" element={<Gallery/>}/> */}
    <Route index={true}  element={<App />} />
    <Route path="/create" element={<Create/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/:id" element={<Update/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/gallery/:id" element={<Info/>}/>
    {/* <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} /> */}
    </Routes>

  </BrowserRouter>
  </React.StrictMode>,
)
