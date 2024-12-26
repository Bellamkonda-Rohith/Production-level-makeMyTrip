import React from "react";
import FlightSeacrh from "../search/FlightSearch";
import Button from '@mui/material/Button';
import { Box, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import TestSearch from "../search/TestSearch";


export const Flights = () => {
 
  return (
    <>
      <div className="container-fluid shadow mt-3 bg-light rounded border border-3 border-secondary">
        <FlightSeacrh />
        
      </div>
     
      
     
    </>
  )
}