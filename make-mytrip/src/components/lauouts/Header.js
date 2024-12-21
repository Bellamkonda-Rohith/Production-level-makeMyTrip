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
        <div className='container-fluid '>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="#"><span style={{color:"orangered"}}>Make</span><span className='text-light'> MyTrip</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-lg-0 ">
      <Custombutton variant="text"  text1="List Your Priority" text2= "Grow Your Business" size="small"  fontsize="10px" fontcolor="white"/>
            <Custombutton variant="text"  text1="Introducing MyBig " text2="Business Travel Solutions" size="small" fontsize="10px" fontcolor="white" />
            <Custombutton variant="text"  text1="My Trips "text2="Manage Your Booking" size="small" fontsize="10px" fontcolor="white" />
            <Custombutton  variant="contained" color="primary" text1="Login or Create Account" size="large" fontsize="10px" fontcolor="white"/>
            <Custombutton variant="text" color="secondary" text1="IN ENG" size="samll" fontsize="10px" fontcolor="white"/>
            <Custombutton variant="text"  text1="INR" size="samll" fontsize="10px" fontcolor="white"/> 

          
      </ul>
     
    </div>
  </div>
</nav>
       </div>
        <div className='container custom-margin  '>
        <nav class="navbar navbar-expand-lg bg-light navbar-light p-3 postion-arrange">
  <div class="container-fluid">
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