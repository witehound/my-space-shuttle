import React from 'react';
import '../Destination/Destination.css'
import Navbar from '../Navbar/Navbar'
import destinationMoon from "../../assets/destination/image-mars.png"

function Destination() {
  return <div className='destination-div'>
    <Navbar />
    <div className="destination-div-container">
      <div className="destination-div-container-wrap">
        <div className="destination-div-container-wrap-top">
          <h3 className="destination-div-container-wrap-top-h3">
            01 <span className="destination-div-container-wrap-top-h3-span">
              PICK YOUR DESTINATION
            </span>
          </h3>
        </div>
        <div className="destination-div-container-wrap-buttom">
           <div className="destination-div-container-wrap-buttom-wrap">
             <div className="destination-div-container-wrap-buttom-wrap-left">
               <div className="destination-div-container-wrap-buttom-wrap-left-wrap">
                 <img src={destinationMoon} className='destination-div-container-wrap-buttom-wrap-left-wrap-img'/>
               </div>
             </div>
             <div className="destination-div-container-wrap-buttom-wrap-right">
               <div className="destination-div-container-wrap-buttom-wrap-right-wrap">
                 <div className="destination-div-container-wrap-buttom-wrap-right-wrap-top">
                    <div className="destination-div-container-wrap-buttom-wrap-items">
                      <h3 className="destination-div-container-wrap-buttom-wrap-right-wrap-moon">
                        MOON
                      </h3>
                      <h3 className="destination-div-container-wrap-buttom-wrap-right-wrap-mars">
                        MARS
                      </h3>
                      <h3 className="destination-div-container-wrap-buttom-wrap-right-wrap-europa">
                        EUROPA
                      </h3>
                      <h3 className="destination-div-container-wrap-buttom-wrap-right-wrap-titan">
                        TITAN
                      </h3>
                    </div>
                    <div className="destination-div-container-wrap-buttom-wrap-title">
                      MOON
                    </div>
                    <div className="destination-div-container-wrap-buttom-wrap-top-p">
                      <p className="destination-div-container-wrap-buttom-wrap-top-p-p">
                        Dont forget to pack your hiking boots. You'll need them tp tackle
                        olympus mons the tallest planetary mountain in our solar system. It's two
                        and half times the size of everest.
                      </p>
                    </div>
                 </div>
                 <div className="destination-div-container-wrap-buttom-wrap-right-wrap-mid">
                   <hr className="destination-div-container-wrap-buttom-wrap-right-wrap-mid-hr" />
                 </div>
                 <div className="destination-div-container-wrap-buttom-wrap-right-wrap-buttom">
                  <div className="destination-div-container-wrap-buttom-wrap-right-wrap-buttom-wrap">
                    <div className="destination-div-container-wrap-buttom-wrap-right-wrap-buttom-wrap-left">
                      <h3 className="destination-div-container-wrap-buttom-wrap-right-wrap-buttom-wrap-h3">
                        AVG. DISTANCE
                          <span className="destination-div-container-wrap-buttom-wrap-right-wrap-buttom-wrap-span">
                            225 MIL. KM
                          </span>
                      </h3>
                    </div>
                    <div className="destination-div-container-wrap-buttom-wrap-right-wrap-buttom-wrap-right">
                    <h3 className="destination-div-container-wrap-buttom-wrap-right-wrap-buttom-wrap-h3">
                        EST. TRAEL TIME
                          <span className="destination-div-container-wrap-buttom-wrap-right-wrap-buttom-wrap-span">
                            9 MONTHS
                          </span>
                      </h3>
                    </div>
                  </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Destination;
