import React from "react";
import FlightSeacrh from "../search/FlightSearch";
import GetallProducts from "./GetallProduts";

export const Home = () => {
  return (
    <>
      <div className="container-fluid shadow mt-3 bg-light rounded  border border-3 border-secondary">
        <h4 className="p-3">
          Search Flights
        </h4>
       <FlightSeacrh/>
      </div>
      <div className="container">
        <GetallProducts/>
      </div>
    
    </>
  )
}