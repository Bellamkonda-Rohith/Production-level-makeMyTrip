import React, { useState } from "react";
import plane from '../assests/plane.svg'
import Custombutton from "../common/Custombutton";

const FlightSeacrh = () => {
  const [searchParams, setSearchparams] = useState({
    triptype: "Oneway",
    passengers: { adult: 1, children: 0, infants: 0 },
    class:"economy"

  })
  return (
    <>
      <div className="container p-3">
        <div className="d-flex align-items-center">
          <button className={`px-4 py-2 rounded-pill border-0 mx-3 ${searchParams.triptype === "oneway" ? "bg-primary text-light" : "bg-secondary text-light"}`} onClick={() => setSearchparams(prev => ({
            ...prev,triptype:'oneway'
          }))}>One Way</button>


          <button className={`px-4 py-2 rounded-pill border-0 ${searchParams.triptype === "round" ? "bg-primary text-light" : "bg-secondary text-light"}`} onClick={() => setSearchparams(prev => ({
            ...prev,triptype:'round'
          }))}>Round Trip</button>
          
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
            <label >From</label>
              <div className="container border border-sexondary d-flex p-3">
                <img src={plane} className="iconsize" alt="plane" />
                <input type="text" className="w-100 border-0" placeholder="Enter City"/>
              </div>
            </div>
            <div className="col-3">
            <label >To</label>
              <div className="container border border-sexondary  d-flex p-3">
                <img src={plane} className="iconsize" alt="plane" />
                <input type="text" placeholder="Enter City"  className="w-100 border-0"/>
              </div>

            </div>
            <div className="col-3">
            <label >Departure</label>
              <div className="container border border-sexondary  d-flex p-3">
                <img src={plane} className="iconsize" alt="plane" />
                <input type="date" placeholder="Enter date"  className="w-100 border-0"/>
              </div>
            </div>
            <div className="col-3">
            <label >Travellers & class</label>
              <div className="container border border-sexondary  d-flex p-3">
                <button className="border-0 bg-light" >
                  {searchParams.passengers?.adult || 1}Adults,{searchParams.class}
               </button>
              </div>
            

            </div>
          </div>
          <div className="m-3 ">
            <Custombutton variant="contained" size="large" color="primary" text1="Search Flights" className="d-flex justify-content-center mx-auto"/>
          </div>
        </div>
      

        
      </div>
    </>
  )
}
export default FlightSeacrh;