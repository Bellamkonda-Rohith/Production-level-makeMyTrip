import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
const input = () => {
  return (
    <>
      <Box>
      <TextField
          disabled
          id="outlined-disabled"
          label="Search"
          defaultValue="Hello World"
        />
      </Box>
    </>
  )
}

export default input;
