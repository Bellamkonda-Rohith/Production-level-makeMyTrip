import React from "react";
import FlightSeacrh from "../search/FlightSearch";

export const Home = () => {
  return (
    <>
      <div className="container-fluid shadow mt-5 bg-light rounded">
        <h4 className="p-3">
          Search Flights
        </h4>
       <FlightSeacrh/>
      </div>
    
    </>
  )
}