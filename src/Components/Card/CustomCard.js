
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, IconButton, useTheme } from '@mui/material';


const CustomCard = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Card sx={{ display: 'flex' }}>
       <CardMedia
      component="img"
      sx={{ width: 100 }}
      image="https://media.istockphoto.com/id/1350722246/photo/server-room-background.webp?s=2048x2048&w=is&k=20&c=fVzk6hc-Q7y72ixrkq4YGBYzj2uu-mhGsPqCR9DjofA="
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
       {props.title}
        </Typography>
        <Typography variant="msg" color="text.secondary" component="div">
         {props.subText}
        </Typography>
      </CardContent>
      <Button size="small" color="primary">
      {props.btnText}
        </Button>
    </Box>
   
  </Card>
  );
};

export default CustomCard;
