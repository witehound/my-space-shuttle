import React from 'react';
import Logo from "../../assets/shared/logo.svg"
import '../Navbar/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return <div className='navbar-div'>
    <div className="nav-bar-container">
      <div className="nav-bar-container-wrap">
        <div className="nav-bar-logo">
           <img src={Logo} className="nav-abr-logo-img"/>
        </div>
        <div className="horizontal-line">
          <hr className='horizontal-line'/>
        </div>
        <div className="nav-bar-item">
          <div className="nav-bar-item-wrap">
            <h3 className="nav-bar-items">
               <Link to='/'>00
                <span className="nav-bar-items-span">
                  HOME
                </span>
              </Link>
           </h3>
            <h3 className="nav-bar-items">
               <Link to='/Destination'>01
                 <span className="nav-bar-items-span">
                  DESTINATION 
                 </span>
               </Link>
            </h3>
            <h3 className="nav-bar-items">02
                <Link to='/Spacelaunch'>
                 <span className="nav-bar-items-span">
                  LAUNCH 
                 </span>
                </Link>
            </h3>
            <h3 className="nav-bar-items">03
               <span className="nav-bar-items-span">
                TECHNOLOGY
              </span>
            </h3>
          </div>
        </div>
      </div>  
   </div>
  </div>;
}

export default Navbar;
