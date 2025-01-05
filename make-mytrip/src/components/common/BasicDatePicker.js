import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({ className, name, value,setsearchdata }) {
  return (
    <div className='container'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
         
            label={name}
            className='w-100 mb-2 customheight'
            format="DD, MMMM,YYYY"
            value={value}
            onChange={setsearchdata}
            
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

