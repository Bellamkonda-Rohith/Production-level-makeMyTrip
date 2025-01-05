import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ options, name,getTheSelcetvalue }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    const value=event.target.value
    setAge(value);
    getTheSelcetvalue(value)
  };

  return (
    <>
      <Box sx={{ minWidth: 120 ,marginTop:"5px"}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{name}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age} // Bind the state value to the Select component
            label={name}
            onChange={handleChange}
          >
            {options.map((data) => {
              const { label, value } = data;
              return (
                <MenuItem key={value} value={value} sx={{ fontSize: '14px', color: 'black' }}>
                  {label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
     
    </>
  );
}
