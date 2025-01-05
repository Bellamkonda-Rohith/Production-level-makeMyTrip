import React from 'react'
import house from '../assests/holiday.svg'
import { useState } from 'react'
import Custombutton from '../common/Custombutton'
import InputField from '../common/InputField'
import BasicDatePicker from '../common/BasicDatePicker';
import BasicSelect from '../common/BasicSelect'
import { OptionsAdult,optionsBudget,OptionsChildren,optionsClass,optionsDuration,optionsRooms, optionsVacationType } from '../constants/Constant'
const HolidaySearch = () => {

   return (
     <>
       <div className='container mt-5'>
       <div className='container p-2'><h2>Search Holiday Packages</h2></div>
       <div className='container-fluid justify-content-evenly mt-3'>
         <div className='row g-0'>
           <div className='col-2'>
           <InputField  type="search" placeholder="From" name="From "  className="w-100"/>
           </div>
           <div className='col-2'>
           <InputField  type="search" placeholder="From" name="From "  className="w-100"/>
           </div>

           <div className='col-2'>
             <BasicDatePicker/>
           </div>
           <div className='col-6 border border-dark'>
             <div className='row'>
               <div className='col-6'>
               <div className='row g-2  rounded'>
               <div className='col-4'>
               <BasicSelect Options={optionsRooms} label="Rooms" value="Rooms" className="border-0 w-100 rounded" fontSize="9px"/>
               </div>
               <div className='col-4'>
               <BasicSelect Options={OptionsAdult} label="Adults" value="Adults" className="border-0 w-100 rounded" fontSize="9px" />
               </div>

               <div className='col-4'>
               <BasicSelect Options={OptionsChildren} label="Childern" value="Childern" className="border-0 rounded" fontSize="9px"/>
               </div>
               
             </div>
               </div>
               <div className='col-6 '>
               <div className='row     rounded'>
               <div className='col-4'>
               <BasicSelect Options={optionsBudget} label="Butget" value="Budget" className="border-0 w-100 rounded" fontSize="9px"/>
               </div>
               <div className='col-4'>
               <BasicSelect Options={optionsDuration} label="Duriation" value="Duriation" className="border-0 w-100 rounded" fontSize="9px" />
               </div>

               <div className='col-4'>
               <BasicSelect Options={optionsVacationType} label="optionsVacationType" value="optionsVacationType" className="border-0 rounded" fontSize="9px"/>
               </div>
               
             </div>
               </div>

               
             </div>
           </div>
           
           
           
         </div>
       </div>
       <div className='container d-flex  m-4'>
         <Custombutton variant="contained" color="success" size="large" text1="Search Holiday" className="mx-auto"/>
       </div>
    </div>
       </>)
}

export default HolidaySearch;
