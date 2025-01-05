import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({src,text1,text2}) {
  return (
    <Card sx={{width:"100%"}}>
      <CardActionArea sx={{width:"100%"}}>
        <CardMedia
          component="img"
          height="140"
          width="100%"
          image={src}
          alt={text1}
        />
        <CardContent>
          
          <Typography variant="h6" sx={{ color: 'black' }}>
          {text1}
          </Typography>
          <Typography variant='body1' color='secondary'>
          {text2}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
