import React, { Component } from "react";
import './InfoItem.css'

class InfoItem extends Component {
  //rconst
  constructor(props) {
    super(props)

    this.state = {
      event:this.props.data 
    }
  }

  render() {
    return (<article>
      <h1>Event</h1>
      <p>{this.props.data.eventName}</p>
      <img src={this.props.data.image} alt="imagen de evento" className="img_event"/>
      <p>{this.props.data.info}</p>
      <p>{this.props.data.price}</p>
      <button onClick={this.props.remove}>Delete</button>
      </article>
    )
  }
}

export default InfoItem;
