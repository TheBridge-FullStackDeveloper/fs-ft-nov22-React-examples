import React, { Component } from "react";
import './InfoItem.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class InfoItem extends Component {
  //rconst
  constructor(props) {
    super(props)

    this.state = {
      event: this.props.data
    }
  }

  render() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={this.props.data.image}
          title="event picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.data.eventName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.data.info}
          </Typography>
          <Typography>
            <p>{this.props.data.info}</p>
          </Typography>
          <Typography>
            <p>{this.props.data.price}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.props.remove}>Delete</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      /*  <article>
         <h1>Event</h1>
         <p>{this.props.data.eventName}</p>
         <img src={this.props.data.image} alt="imagen de evento" className="img_event"/>
         <p>{this.props.data.info}</p>
         <p>{this.props.data.price}</p>
         <button onClick={this.props.remove}>Delete</button>
         </article> */
    )
  }
}

export default InfoItem;
