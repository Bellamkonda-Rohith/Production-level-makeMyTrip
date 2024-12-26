
import React from 'react'

const BasicSelect = ({Options,className,fontSize,onChange,name}) => {
  return (
    <>
     
      <select className={className}  style={{height:"50px",borderRadius:"5px",border:"1px solid blue",fontSize:fontSize}} name={name} onChange={onChange}>

          {Options.map((opt) => {
            const {label,value}=opt
            return (<>
              
              <option value={value}>{label}</option>
            </>)
})}
      </select>
     
  </>
  )
}

export default BasicSelect
