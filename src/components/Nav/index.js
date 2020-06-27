import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Navbar'



export default function LasoonNav() {
    return <div >
        <div class="container">
   <Navbar fixed="top">
       <Navbar.Brand><img src="../images/logo.jpg"/>
       </Navbar.Brand>
       <div className="navbar">
           <li className="nav-item">
               <span className="text-white"><h3>About</h3></span>
           </li>
           <li className="nav-item">
               <span className="text-white"><h3>Menu</h3></span>
           </li>
       </div>
   </Navbar>
   </div>
    </div>
  
       
  }