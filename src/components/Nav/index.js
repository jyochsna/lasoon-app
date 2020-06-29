import React from "react";
import "./style.css";
import LasooToogleButton from "../SideDrawer/DrawerToggleButton"



const LasoonNav = props =>(
  
        
      <header className="toolbar">
          <nav className="toolbar_navigation">
              <div>
               <LasooToogleButton click={props.drawerClickHandler}/>
              </div>
              <div className="toolbar_logo"><a href="/"><img src="../images/logo.jpg" /></a></div>
              <div className="spacer" />
         
              <div className="toolbar_navigation-items"> 
                  <ul>
                      <li><a href="/">About us
                      </a></li>
                      <li><a href="/">Menu
                      </a></li>
                      <li><a href="/">Gallery
                      </a></li>
                      <li><a href="/">Reservation
                      </a></li>
                      <li><a href="/">Location
                      </a></li>
                      <li><a href="/">FB
                      </a></li>
                      <li><a href="/">IG
                      </a></li>
                  </ul>
              </div>
       
          </nav>
      </header>
 

    );
  

    export default LasoonNav;