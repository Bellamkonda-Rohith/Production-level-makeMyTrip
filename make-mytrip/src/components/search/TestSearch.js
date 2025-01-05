import React, { useState } from 'react';
import Custombutton from '../common/Custombutton';
import InputField from '../common/InputField';
import BasicSelect from '../common/BasicSelect';
import { OptionsAdult,OptionsChildren, optionsClass, optionsRooms } from '../constants/Constant';
const TestSearch = () => {
  const [handleinputhotel, sethandleinputshotel] = useState("");

  const handleInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    sethandleinputshotel((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleButton = () => {
    console.log("handleinputhotel", handleinputhotel);
  };

  return (
    <>
      <div className='container mt-5'>
      <h3 className='p-4'>Hotel Search</h3>
      
      <div className='container'>
        <div className='row g-3'>
          <div className='col-12 col-sm-6 col-md-2'>
            <label>Search</label>
            <InputField type='search' name="search" placeholder="Search for the place" onChange={handleInputs} className='form-control'/>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
            <label>Checkin</label>
            <InputField type='date' name="checkin" onChange={handleInputs} className='form-control'/>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
            <label>Checkout</label>
            <InputField type='date' name="checkout" onChange={handleInputs} className='form-control'/>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
            <label>Select Rooms</label>
            <BasicSelect name='Select rooms'Options={optionsRooms} onChange={handleInputs} className='form-control'/>
            
          </div>
          <div className='col-12 col-sm-6 col-md-1'>
            <label>Class</label>
            < BasicSelect name='Room Type' Options={optionsClass} onChange={handleInputs} className='form-control'/>
             
          </div>
          <div className='col-12 col-sm-6 col-md-1'>
            <label>Adults</label>
            <BasicSelect name='Select Adults' Options={OptionsAdult} onChange={handleInputs} className='form-control'/>
              
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
            <label>Children</label>
            <BasicSelect Options={OptionsChildren} name='Select childrens' onChange={handleInputs} className='form-control'/>
              
          </div>
        </div>
      </div>
    
      <div className='container d-flex  justify-content-center  ' >
      <Custombutton onClick={handleButton} variant="contained" color="success"  text1="Submit" className="my-4"/>
      </div>
      
</div>
    </>
  );
}

export default TestSearch;
