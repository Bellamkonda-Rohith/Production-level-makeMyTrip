import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BasicSelect from '../BasicSelect';
import { optionsRooms,OptionsAdult,OptionsChildren } from '../../constants/Constant';
import Custombutton from '../Custombutton';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:"10px"
  
};

export default function ModelBox({setAdults,setChildren,setRooms,Rooms,Adults,Children}) { 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  
 
  return (
    <div className='border border-2  p-1 rounded ' >
   <Custombutton onClick={handleOpen} variant="text" text1={`${Rooms} Rooms,${Adults} Adults,${Children} Children `}fontcolor="black"  fontsize="15px"/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Select the Options
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <BasicSelect options={optionsRooms} name="Rooms" getTheSelcetvalue={setRooms}  />
            <BasicSelect options={OptionsAdult} name="Adults" getTheSelcetvalue={setAdults}  />
            <BasicSelect options={OptionsChildren} name="Children" getTheSelcetvalue={setChildren}/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
