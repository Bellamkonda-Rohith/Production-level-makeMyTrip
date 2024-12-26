import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'


const InputField = ({type,placeholder, className,onChange,name}) => {
  return (
    <>
   
      <input name={name}   placeholder={placeholder} type={type} onChange={onChange} className={ className} style={{height:"50px",borderRadius:"5px",border:"1px solid blue"}}/>
    
    
    </>
  )
}

export default InputField

