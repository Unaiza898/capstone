import React from 'react';
import { Outlet, Link } from "react-router-dom";
const SideNav = () => (
  <div className="sidenav">
    <h2> Home</h2>
   <Link to= '/'>
   <div className='nav'>Home</div> 
    
   </Link>
    
   {/* <Link to= '/gallery'>
   <div className='nav'> Gallery</div> 
    
   </Link> */}
    
   
    <Link to= '/create'>
   <div className='nav'>Create post</div> 
    
   </Link>
    <div className='nav'><a> Search</a></div> 
    <div className='nav'><a> Info</a></div> 
  </div>
);

export default SideNav;