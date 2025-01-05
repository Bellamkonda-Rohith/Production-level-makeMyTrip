import React, { useEffect, useState } from 'react'
import InputField from '../common/InputField'
import Custombutton from '../common/Custombutton'
import BasicDatePicker from '../common/BasicDatePicker'
import { citiesWithAirportsInIndia } from '../constants/Constant'
import { Rsponsedata } from '../constants/Constant'
import axios from 'axios'
import ApiServices from '../Services/ApiServices'
const FlightSearch = () => {
    const [formData, setFormData] = useState({
        title: '',
        price: 10,
        description: '',
        categoryId: 5,
        images: ['https://placeimg.com/640/480/any']
    })

    const handleInputChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value
        }))
    }

    const [responsedata, setResoinsedata] = useState([])
    const handleSearch = async () => {
        const url = await axios.post('https://api.escuelajs.co/api/v1/products/', formData)

        const response = url.data
        setResoinsedata([response])
        console.log(responsedata)
    }
    <ApiServices Baseurl="https://api.escuelajs.co/api/v1/products" data={formData} method="post" />


    return (
        <div className="container mt-5">
            <h2>Search Flights</h2>
            <div className="row mt-3 g-3 d-flex align-items-center ">
                <div className=" col-12 col-sm-6 col-md-6 col-lg-3">
                    <InputField
                        name="From"
                        data={citiesWithAirportsInIndia}
                        neededlabel="city"
                        setsearchdata={value => handleInputChange('title', value)}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <InputField
                        name="To"
                        data={citiesWithAirportsInIndia}
                        neededlabel="city"
                        setsearchdata={value => handleInputChange('price', value)}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                    <InputField
                        data={citiesWithAirportsInIndia}
                        neededlabel="city"
                        setsearchdata={value => handleInputChange('description', value)}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 ">
                    <InputField
                        data={citiesWithAirportsInIndia}
                        neededlabel="city"
                        setsearchdata={value => handleInputChange('categoryId', value)}
                    />
                </div>
            </div>
            <div className="container d-flex m-3">
                <Custombutton
                    text1="Search Flight"
                    onClick={handleSearch}
                    className="mx-auto p-2"
                    variant="contained"
                />
            </div>
            <div className="container d-flex justify-content-center">
                {responsedata.map(data => {
                    const { title, price, description, creationAt, updatedAt } = data
                    return (
                        <>
                            <div className="card bg-dark text-light">
                                <div className="card-title text-center">
                                    <h4>{title}</h4>
                                </div>
                                <div className="card-body">
                                    <p>description:{description}</p>
                                    <p>price{price}</p>
                                    <p>creationAt:{creationAt}</p>
                                    <p>updatedAt:{updatedAt}</p>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default FlightSearch
