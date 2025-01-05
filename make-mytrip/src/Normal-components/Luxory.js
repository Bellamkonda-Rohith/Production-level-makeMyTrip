import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ActionAreaCard from '../components/common/ActionAreaCard';
import { AnimatedContainer } from '../components/common/AnimatedContainer/AnimatedContainer';
export default function Luxory() {
  return (
    <>
      
      <AnimatedContainer reverse={true} direction='vertical' distance={100}>
      <Grid container spacing={3} padding="10px" marginTop="30px" bgcolor="white" boxShadow="revert">
        <Grid item xs={12} md={3} display='flex' justifyContent='center' alignItems='start' flexDirection="column">
          <Typography variant='h5' sx={{ color: "gold" }}>
            INTRODUCING
          </Typography>
          <Typography variant="h5">MMT Luxe Selections</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <ActionAreaCard 
            src="https://promos.makemytrip.com/Hotels_product/Luxe/brands.png" 
            text1="Luxe properties in India" 
            text2="Explore by Luxury brands, themes & top picks" 
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ActionAreaCard 
            src="https://promos.makemytrip.com/altacco_luxe/imgs/luxe_villa.jpg" 
            text1="Luxe Villas" 
            text2="Premium Villas with Superlative Experience" 
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ActionAreaCard 
            src="https://promos.makemytrip.com/notification/xhdpi/maldives.jpg" 
            text1="Luxe International" 
            text2="Dubai, Maldives, Thailand & More" 
          />
        </Grid>
      </Grid>
</AnimatedContainer>
    
   
    </>
  );
}