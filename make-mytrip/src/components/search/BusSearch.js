
import React, { useState } from 'react';
import InputField from '../common/InputField';
import Custombutton from '../common/Custombutton';
import BasicDatePicker from '../common/BasicDatePicker';
import { citiesWithAirportsInIndia } from '../constants/Constant';
const BusSearch = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: null,
   
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    console.log('Form Data:', formData);
    };
   

  return (
    <div className='container mt-5'>
      <h2>Search Flights</h2>
      <div className='row mt-3 g-3 d-flex align-items-center '>
        <div className=' col-12 col-sm-6 col-md-6 col-lg-4'>
         <InputField name="From" data={citiesWithAirportsInIndia} neededlabel="city" setsearchdata={(value)=>handleInputChange('from',value)} />
        </div>
        <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
        <InputField name="To" data={citiesWithAirportsInIndia} neededlabel="city" setsearchdata={(value)=>handleInputChange('to',value)} />
        </div>
        <div className='col-12 col-sm-6 col-md-6 col-lg-4 '>
         <BasicDatePicker setsearchdata={(value)=>handleInputChange('date',value)}/>
        </div>
        
      </div>
      <div className='container d-flex m-3'>
        <Custombutton text1="Search Buses" onClick={handleSearch} className="mx-auto p-2" variant='contained' />
      </div>
    </div>
  );
};

export default BusSearch;
