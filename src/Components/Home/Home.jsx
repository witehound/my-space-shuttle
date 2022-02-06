import React from 'react';
import '../Home/Home.css'
import Navbar from '../Navbar/Navbar'

function Home() {
  return <div className='Home-div'>
      <Navbar />
      <div className="spacer">
         
      </div>
      <div className="home-div-container">
        <div className="home-div-container-wrap">
          <div className="home-div-container-wrap-left">
            <div className="home-div-container-wrap-left-wrap">
               <h5 className="home-div-container-wrap-left-wrap-h5">
                  SO, YOU WANT TO TRAVEL TO 
               </h5>
               <h2 className="home-div-container-wrap-left-wrap-h2">
                  SPACE
               </h2>
               <p className="home-div-container-wrap-left-wrap-p">
                   Let's face it, if you want to go space, you might as well
                   genuinely go to outer space and not hoer kind of on the edge
                   of it. Well sit back, and relax because we'll give you a truly
                   out of this world experience!
               </p>
               <div className="wrap-scape">
                  
               </div>
            </div>
          </div>
          <div className="home-div-container-wrap-right">
            <div className="home-div-container-wrap-right-wrap">
              <div className="home-div-container-wrap-right-circle">
                EXPLORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}

export default Home;
