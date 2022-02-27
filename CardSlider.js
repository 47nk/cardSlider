
import {  ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// structure of data
// {
//  title: "Delhi",
//  image: """
// }
// npm i react-horizontal-scrolling-menu
function CardSlider(props) {
  return (
        <div>
            <h1>
                {props.heading}
            </h1>
            <ScrollMenu >
                { props.data.map((data) => {
                    return <MediaCard data={data} spacing={10} width ={350}/>
                })}
            </ScrollMenu>
        </div>
    
  );
}



 function MediaCard(props) {
  return (
    <Card style={{margin: props.spacing}}  sx={{ width: props.width }}>
      <CardMedia
        component="img"
        height="180"
        image={props.data.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.title}
        </Typography>
       
      </CardContent>
      <CardActions>

        <Button size="small">Book Now</Button>
      </CardActions>
    </Card>
  );
}


export default CardSlider;
