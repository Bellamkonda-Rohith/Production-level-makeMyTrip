import React from "react";
import FlightSeacrh from "../search/FlightSearch";



export const Flights = ({searchinput,setSearchInput}) => {
 
  return (
    <>
      <div className="container-fluid shadow mt-3 bg-light rounded border border-3 border-secondary">
        <FlightSeacrh  searchinput={searchinput} setSearchInput={setSearchInput}/>
        
      </div>
     
      
     
    </>
  )
}