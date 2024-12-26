import React, { useState } from 'react'
import planeIcon from '../assests/plane.svg'
import hotelIcon from '../assests/hotel.svg'
import trainIcon from '../assests/train.svg';
import busIcon from '../assests/Bus.svg'
import Navlink from './Navlink';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Custombutton from '../common/Custombutton';
import Cabs from '../assests/cab.svg'
import home from '../assests/holiday.svg'
import  Currency from '../assests/currency.svg'
const Header = () => {
  


  const navlinks = [
    { href: "/flights", icon: planeIcon, label: "Flights" },
    { href: "/hotels", icon: hotelIcon, label: "Hotels" },
    { href: "/trains", icon: trainIcon, label: "Trains" },
    { href: "/buses", icon: busIcon, label: "Buses" },
    { href: "/cabs", icon: Cabs, label: "Cabs" },
    { href: "/holiday", icon: home, label: "Holiday & Packages" },
    { href: "/currency", icon:Currency , label: "Forex Card & Currency" }



  ]

  return (
    <>
      
      <header className='header-background-img'>
        
        <div className='container-fluid'>
          <div className='row g-0 d-flex justifu-content-center align-items-center'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-2 '><h4 className='text-light' ><span className='text-warning'>Make</span>MyTrip</h4></div>
            <div className=' col-12 col-sm-6 col-md-6 col-lg-2  d-flex justify-content-end'>
            <Custombutton variant="outlined" color="secondary"  text1="List Your Priority" text2= "Grow Your Business" size="large"  fontsize="10px" fontcolor="white" className='w-100'/>

            </div>
            <div className=' col-12 col-sm-6 col-md-6 col-lg-2 d-flex justify-content-end'>
              
            <Custombutton variant="outlined" color="secondary" text1="Introducing MyBig " text2="Business Travel Solutions" size="large" fontsize="10px" fontcolor="white" className='w-100'/>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-2 d-flex justify-content-end'>
            <Custombutton variant="outlined" color="secondary"  text1="My Trips "text2="Manage Your Booking" size="large" fontsize="10px" fontcolor="white" className='w-100'/>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-2 d-flex justify-content-end'>
            <Custombutton  variant="contained" color="primary" text1="Login or Create Account" size="large" fontsize="10px" fontcolor="white" className='w-100'/>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-1 d-flex justify-content-end'>
            <Custombutton variant="outlined" color="secondary" text1="IN ENG" size="large" fontsize="10px" fontcolor="white" className='w-100'/>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-1 d-flex justify-content-end'>
            <Custombutton variant="outlined" color="secondary" text1="INR" size="large" fontsize="10px" fontcolor="white" className='w-100'/> 

              </div>
          
           
           
            
       
          
          </div>
      </div>
        <div className='container  mt-5 '>
        <nav class="navbar navbar-expand-lg bg-light navbar-light p-3 rounded-pill postion ">
  <div class="container-fluid ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      {navlinks.map
                  ((links) => {
                    return (
                      <>
                       <Navlink  key={links.href} {...links}/></>
                 )
                })}
      </ul>
     
    </div>
  </div>
</nav>
         </div>
        
     

       







        
     
       
      </header>
    </>
  )
}
export default Header;