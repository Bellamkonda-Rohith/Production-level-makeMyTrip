import React from "react";
import FlightSeacrh from "../search/FlightSearch";
import GetallProducts from "./GetallProduts";
import ActionAreaCard from "../common/ActionAreaCard";
import Luxory from "../../Normal-components/Luxory";
import ImgaeRollingGallery from "../common/ImgaeRollingGallery/ImgaeRollingGallery";

export const Home = () => {
  return (
    <>
      <div className="container-fluid  mt-2 bg-light rounded  border border-3 ">
        
       <FlightSeacrh/>
      </div>
      
     
      <div className="container-fluid shadow">
        <Luxory />
      </div>
      <div className="container">
      <ImgaeRollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    
        
      
    
    </>
  )
}