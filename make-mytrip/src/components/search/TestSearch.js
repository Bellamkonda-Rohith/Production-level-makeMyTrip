import React, { useState } from 'react';
import Custombutton from '../common/Custombutton';

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
      <h3>Hotel Search</h3>
      
      <div className='container'>
        <div className='row g-3'>
          <div className='col-12 col-sm-6 col-md-2'>
            <label>Search</label>
            <input type='search' name="search" placeholder="Search for the place" onChange={handleInputs} className='form-control'/>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
            <label>Checkin</label>
            <input type='date' name="checkin" onChange={handleInputs} className='form-control'/>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
            <label>Checkout</label>
            <input type='date' name="checkout" onChange={handleInputs} className='form-control'/>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
            <label>Select Rooms</label>
            <select name='Select rooms' onChange={handleInputs} className='form-control'>
              <option value="">Select rooms</option>
              <option value={1}>1 Room</option>
              <option value={2}>2 Rooms</option>
              <option value={3}>3 Rooms</option>
              <option value={4}>4 Rooms</option>
            </select>
          </div>
          <div className='col-12 col-sm-6 col-md-1'>
            <label>Class</label>
            <select name='Room Type' onChange={handleInputs} className='form-control'>
              <option value="">Select room type</option>
              <option value="Normal">Normal</option>
              <option value="Luxury">Luxury</option>
              <option value="Ultra Luxury">Ultra Luxury</option>
            </select>
          </div>
          <div className='col-12 col-sm-6 col-md-1'>
            <label>Adults</label>
            <select name='Select Adults' onChange={handleInputs} className='form-control'>
              <option value="">Adults</option>
              <option value={1}>1 Adult</option>
              <option value={2}>2 Adults</option>
              <option value={3}>3 Adults</option>
              <option value={4}>4 Adults</option>
              <option value={5}>5 Adults</option>
              <option value={6}>6 Adults</option>
              <option value={7}>7 Adults</option>    
            </select>
          </div>
          <div className='col-12 col-sm-6 col-md-2'>
            <label>Children</label>
            <select name='Select childrens' onChange={handleInputs} className='form-control'>
              <option value="">Children</option>
              <option value={1}>1 Child</option>
              <option value={2}>2 Children</option>
              <option value={3}>3 Children</option>
            </select>
          </div>
        </div>
      </div>
    
      <div className='container d-flex  justify-content-center  ' >
      <Custombutton onClick={handleButton} variant="contained" color="success"  text1="Submit" className="my-4"/>
   </div>
    </>
  );
}

export default TestSearch;
