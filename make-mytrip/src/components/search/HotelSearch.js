import React, { Children, useState } from 'react'
import InputField from '../common/InputField'
import Custombutton from '../common/Custombutton'
import BasicDatePicker from '../common/BasicDatePicker'
import { citiesWithAirportsInIndia } from '../constants/Constant'
import ModelBox from '../common/Model/ModelBox'
const HotelSearch = () => {
    const [formData, setFormData] = useState({
        place: '',
       
        CheckIn: null,
      CheckOut: null,
      Rooms: '',
      Adults: '',
        Children:''
    })

    const handleInputChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value
        }))
    }

    const handleSearch = () => {
        console.log('Form Data:', formData)
    }

    return (
        <div className="container mt-5">
            <h2>Search Hotel</h2>
            <div className="row mt-3 g-1 d-flex align-items-center ">
                
                <div className=" col-12 col-sm-6 col-md-6 col-lg-3 ">
               
                    <InputField
                        name="From"
                        data={citiesWithAirportsInIndia}
                        neededlabel="city"
                        setsearchdata={value => handleInputChange('place', value)} 
                    />
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                    <BasicDatePicker setsearchdata={value => handleInputChange('CheckIn', value)} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <BasicDatePicker setsearchdata={value => handleInputChange('CheckOut', value)} />
          </div>
          
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <ModelBox setRooms={value => handleInputChange('Rooms', value)}
                        setAdults={value => handleInputChange('Adults', value)}
                        setChildren={value => handleInputChange('Children', value)}
                        Rooms={formData.Rooms}
                        Adults={formData.Adults}
                        Children={formData.Children}
                    />
          </div>
          
            </div>
           
            <div className="container d-flex m-3">
                <Custombutton text1="Hotel Search" onClick={handleSearch} className="mx-auto p-2" variant="contained" />
            </div>
        </div>
    )
}

export default HotelSearch
