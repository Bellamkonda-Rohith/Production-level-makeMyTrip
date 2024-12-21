import React, { useState } from "react";
import Hotelicon from '../assests/hotel.svg'
import Button from '@mui/material/Button';
import Custombutton from "../common/Custombutton";
const HotelSearch = () => {
  const [searchParams, setSearchparams] = useState({
    triptype: "Oneway",
    passengers: { adult: 1, children: 0, infants: 0 },
    class:"economy"

  })
  return (
    <>
      <div className="container p-3">
        
        <div className="container">
          <div className="row">
            <div className="col-2">
            <label >Place</label>
              <div className="container border border-sexondary d-flex p-3">
                <img src={Hotelicon} className="iconsize" alt="plane" />
                <input type="text" className="w-100 border-0" placeholder="Enter the Place"/>
              </div>
            </div>
            <div className="col-2 ">
            <label >Checkin</label>
              <div className="container border border-sexondary  d-flex p-3">
                <img src={Hotelicon} className="iconsize" alt="plane" />
                <input type="date" placeholder="Checkin"  className="w-100 border-0"/>
              </div>

            </div>
            <div className="col-2">
            <label >checkout</label>
              <div className="container border border-sexondary  d-flex p-3">
                <img src={Hotelicon} className="iconsize" alt="plane" />
                <input type="date" placeholder="checkout"  className="w-100 border-0"/>
              </div>
            </div>
            <div className="col-2">
            <label >Travellers & class</label>
              <div className="container border border-sexondary  d-flex p-3">
                <button className="border-0 bg-light" >
                  {searchParams.passengers?.adult || 1}Adults,{searchParams.class}
               </button>
              </div>
             
            </div>
             <div className="col-2 ">
            <label >Travellers & class</label>
              <div className="container border border-sexondary  d-flex p-3">
                <button  className="border-0 bg-light">
                 price
               </button>
              </div>
            

            </div>
          <div className="m-3 ">
             <Custombutton variant="contained" color="success" size="large" text1="Search Hotel" className="d-flex justify-content-center mx-auto "/>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}
export default HotelSearch;