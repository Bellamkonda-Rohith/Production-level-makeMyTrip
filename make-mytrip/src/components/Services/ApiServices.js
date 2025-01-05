import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiServices = ({ method, Baseurl, endpoint, data }) => {
  const [response, setresponse] = useState(null);
  const [error, seterror] = useState(null);
  const [loding, setloding] = useState(true);
  useEffect(() => {
    const featchdata = async () => {
      try {
        const result = await axios({
          method: method,
          url: `${Baseurl}${endpoint}`,
          data:data
        })
      setresponse(result.data)
      } catch (error) {
        seterror(error)
      } finally {
        setloding(false)
      }
       
     
    }
    featchdata()
  }, [Baseurl, endpoint, data,method
  ])
  if (loding) return <div><h2>Loding......</h2></div>
  if (error) return <div><h2>Error:{error.message}</h2></div>
  if(!response) return <div><h2> Response is not found</h2></div>
  return (
    <div>
      
    </div>
  )
}

export default ApiServices
