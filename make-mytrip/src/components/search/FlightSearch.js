import React, { useEffect, useState } from "react";
import plane from '../assests/plane.svg'
import Custombutton from "../common/Custombutton";
import InputField from "../common/InputField";

import BasicSelect from "../common/BasicSelect";
import BasicDatePicker from "../common/BasicDatePicker";

const FlightSeacrh = () => {
  const [searchParams, setSearchparams] = useState({
    triptype: "Oneway",
    passengers: { adult: 1, children: 0, infants: 0 },
    class:"economy"

  })

  const OptionsAdult = [
    { value: 1, label: "1Adult" },
    { value: 2, label: "2Adults" },
    { value: 3, label: "3Adults" },
    { value: 4, label: "4Adults" },
    { value: 5, label: "5Adults" },
    { value: 6, label: "6Adults" },
    { value: 7, label: "7Adults" },
    { value:8,label:"8Adults"}
  ]
  const OptionsChildren = [
    { value: 0, label: "0 Children" },
    { value: 1, label: "1 Child" },
    { value: 2, label: "2 Children" },
    { value: 3, label: "3 Children" },
    { value: 4, label: "4 Children" },
    { value: 5, label: "5 Children" },
    { value: 6, label: "6 Children" },
    { value: 7, label: "7 Children" },
    { value: 8, label: "8 Children" }
];
  const optionsClass = [
    { value: 'economy', label: 'Economy' },
    { value: 'premiumEconomy', label: 'Premium Economy' },
    { value: 'business', label: 'Business' },
    { value: 'firstClass', label: 'First Class' }]


  const [handleflightSearchinput,sethandleSearchinput]=useState("")
  const handleflightserach = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value)
    sethandleSearchinput((prev) => ({
      ...prev, [name]: value
      
    }))
    
    
  }
  const handleflightserchSubmit = () => {
    console.log("handleflightSearchinput",handleflightSearchinput)
  }
 
 
  return (
    <>
      <div className="container p-3 bg-md-success">
        <div className="d-flex align-items-center">
          <button className={`px-4 py-2 rounded-pill border-0 mx-3 ${searchParams.triptype === "oneway" ? "bg-primary text-light" : "bg-secondary text-light"}`} onClick={() => setSearchparams(prev => ({
            ...prev,triptype:'oneway'
          }))}>One Way</button>


          <button className={`px-4 py-2 rounded-pill border-0 ${searchParams.triptype === "round" ? "bg-primary text-light" : "bg-secondary text-light"}`} onClick={() => setSearchparams(prev => ({
            ...prev,triptype:'round'
          }))}>Round Trip</button>
          
        </div>
        <div className="container-fluid mt-2  d-flex justify-content-center align-items-center  ">
          <div className="row g-1">
            <div className=" col-12 col-sm-4 col-md-6 col-lg-2">
            <label>From</label>
            <InputField  type="search" placeholder="From" name="From"  className="w-100" onChange={handleflightserach}/>
            </div>
            <div className=" col-12 col-sm-4 col-md-6 col-lg-2">
            <label>To</label>
            <InputField type="search" placeholder="To" name="To"  className="w-100" onChange={handleflightserach} />
            </div>

            <div className="col-12 col-sm-4 col-md-6 col-lg-2">
            <label>Departure</label>
            <BasicDatePicker name="Departure"  className="w-100" onChange={handleflightserach} />
            </div>
            
            <div className=" col-12 col-sm-4 col-md-6 col-lg-2">
            <label>Return</label>
          <BasicDatePicker name="Return"  className="w-100" onChange={handleflightserach} />

            </div>
            <div className="col-12 col-sm-4 col-md-6 col-lg-1">
            <label>Adults</label>
            <BasicSelect Options={OptionsAdult} label="Adults" value="adults" name="Adults"  className="w-100"  onChange={handleflightserach}/>
            </div>
            <div className="col-12 col-sm-4 col-md-6 col-lg-1">
            <label>Childern</label>
            <BasicSelect Options={OptionsChildren} label="Children" name="Childern" value="Children"  className="w-100" onChange={handleflightserach}/>
            </div>
            <div className="col-12 col-sm-4 col-md-6 col-lg-2">
            <label>Economy</label>
            <BasicSelect Options={optionsClass} label="Class" value="Class" name="Class"  className="w-100" onChange={handleflightserach}/>
            </div>

          </div>
          

        
          
          
   

          
          

          
       
        </div>
      
        <div className="m-3 ">
            <Custombutton variant="contained" size="large" color="primary" text1="Search Flights" className="d-flex justify-content-center mx-auto" onClick={handleflightserchSubmit}/>
          </div>
        
      </div>
    </>
  )
}
export default FlightSeacrh;