import React, { useState } from "react";
import plane from '../assests/plane.svg'
import Custombutton from "../common/Custombutton";
import InputField from "../common/InputField";
import BasicDatePicker from "../common/BasicDatePicker";
import BasicSelect from "../common/BasicSelect";

import { OptionsChildren,OptionsAdult,optionsClass } from "../constants/Constant";

const TrainSearch = () => {
 
  return (
    <>
       <div className="container p-2"><h2>Search for the Trains</h2></div>
      <div className="container-fluid my-4 d-flex justify-content-evenly align-items-center  ">
       
          <div className="row g-1">
          <div className=" col-12 col-sm-4 col-md-6 col-lg-2">
            <labe>from</labe>
            <InputField  type="search" placeholder="From" name="From "  className="w-100"/>
            </div>
          <div className=" col-12 col-sm-4 col-md-6 col-lg-2">
            <labe
            >To</labe>
            <InputField type="search" placeholder="To" name="To"  className="w-100" />
            </div>

          <div className="col-12 col-sm-4 col-md-6 col-lg-2">
            <label>Choose the Date</label>
            <BasicDatePicker name="Departure"  className="w-100" />
            </div>
            
         
          <div className="col-12 col-sm-4 col-md-6 col-lg-2">
            <label>Adults</label>
            <BasicSelect Options={OptionsAdult} label="Adults" value="adults"  className="w-100" />
            </div>
          <div className="col-12 col-sm-4 col-md-6 col-lg-2">
            <label>Children</label>
            <BasicSelect Options={OptionsChildren} label="Children" value="Children"  className="w-100" />
            </div>
          <div className="col-12 col-sm-4 col-md-6 col-lg-2">
            <label>Class</label>
            <BasicSelect Options={optionsClass} label="Class" value="Class"  className="w-100" />
            </div>

        </div>
        
          

        
          
          
   

          
          

          
       
      </div>
      <div className="container d-flex justify-content-center">
          <Custombutton text1="Search Trains" variant="contained" color="warning" className="m-3"/>

        </div>
    </>
  )
}
export default TrainSearch  ;