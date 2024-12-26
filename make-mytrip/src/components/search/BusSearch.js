import React, { useState } from "react";
import plane from '../assests/plane.svg';
import Bus from '../assests/Bus.svg'
import Custombutton from "../common/Custombutton";
import InputField from "../common/InputField";
import BasicDatePicker from "../common/BasicDatePicker";
const BusSearch = () => {
  const [searchParams, setSearchparams] = useState({
    triptype: "Oneway",
    passengers: { adult: 1, children: 0, infants: 0 },
    class:"economy"

  })
  const [BusinputDetails,setBusinputDetails]=useState("")
  const handleBusinput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBusinputDetails((prev) => ({
      ...prev,[name]:value
    }))
  }
  const  handleBusSubmit = () => {
    console.log("BusinputDetails",BusinputDetails)
  }
  return (
    <>
      <div className="container p-2"><h2>Search Buses</h2></div>
      <div className="container mt-2">
        <div className="row">
          <div className=" col-12 col-sm-6 col-md-6 col-lg-5">
            <label>From</label>
            <InputField  type="search" placeholder="From" name="From "  className="w-100" onChange={handleBusinput}/>
            </div>
          <div className=" col-12 col-sm-6 col-md-6 col-lg-5">
            <label>To</label>
            <InputField type="search" placeholder="To" name="To"  className="w-100" onChange={handleBusinput} />
            </div>

          <div className="col-12 col-sm-4 col-md-6 col-lg-2">
            <label>Date</label>
            <BasicDatePicker name="Date"   className="w-100" onChange={handleBusinput} />
            </div>
        </div>
        <div className="container d-flex justify-content-center">
          <Custombutton text1="Search Buses" variant="contained" size="large" color="warning" onClick={handleBusSubmit} className="m-3"/>
        </div>
      </div>
    </>
  )
}
export default BusSearch;