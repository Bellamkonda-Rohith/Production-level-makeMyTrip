import * as React from 'react';


export default function BasicDatePicker({className,onChange,name}) {
  return (
    <>
    <input type='date' className={className} name={name} style={{height:"50px",borderRadius:"5px",border:"1px solid blue"}} onChange={onChange}/></>
  );
}