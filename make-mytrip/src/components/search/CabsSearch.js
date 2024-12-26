import React from 'react'
import { useState } from 'react'
import cab from '../assests/cab.svg'
import Custombutton from '../common/Custombutton'
import InputField from '../common/InputField';
import BasicDatePicker from '../common/BasicDatePicker';
import BasicSelect from '../common/BasicSelect';
import { optionsHours,optionsMinutes,optionsAmPm } from '../constants/Constant';
const CabsSearch = () => {
 


  return (
    <>
      <div className='container p-2'><h2>Search Cabs</h2></div>
          <div className="container-fluid my-4 d-flex justify-content-around align-items-center  ">
          <div className="row g-5">
            <div className=" col-12 col-sm-4 col-md-6 col-lg-2">
            <InputField  type="search" placeholder="From" name="From "  className="w-100"/>
            </div>
            <div className=" col-12 col-sm-4 col-md-6 col-lg-2">
            <InputField type="search" placeholder="To" name="To"  className="w-100" />
            </div>

            <div className="col-12 col-sm-4 col-md-6 col-lg-2">
            <BasicDatePicker name="Departure"  className="w-100" />
            </div>
            
            <div className=" col-12 col-sm-4 col-md-6 col-lg-2">
          <BasicDatePicker name="Return"  className="w-100" />

            </div>
          <div className='col-4 border-secondary border'>
            <div className='row'>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 border-0">
            <BasicSelect Options={optionsHours} label="Adults" value="adults"  className="w-100 border-0" />
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 border-0">
            <BasicSelect Options={optionsMinutes} label="Children" value="Children"  className="w-100 border-0" />
            </div>
            <div className="col-12 col-sm-4 col-md-6 col-lg-4 border-0">
            <BasicSelect Options={optionsAmPm} label="Class" value="Class"  className="w-100 border-0" />
            </div>
            </div>
            </div>

          </div>
          

        
          
          
   

          
          

          
       
      </div>
      <div className='container d-flex justify-content-center'>
        <Custombutton text1="Search Cabs" color='warning' className="m-2 " variant="contained"/>
      </div>
    </>
  )
}
export default CabsSearch;