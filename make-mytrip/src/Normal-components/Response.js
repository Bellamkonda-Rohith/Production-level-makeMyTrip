import React from 'react'
import { Rsponsedata } from '../components/constants/Constant'
const Response = () => {
  return (
      <div className='container'>
          {Rsponsedata.map((data) => {
              const {idHotel,strHotel,strHotelThumb,strHotelDescription,price}=data
              return (<>
                  
              </>)
          })}
      
    </div>
  )
}

export default Response
