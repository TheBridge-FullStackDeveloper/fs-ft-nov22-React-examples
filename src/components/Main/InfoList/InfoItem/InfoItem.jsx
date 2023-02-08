import React, { Component } from "react";
import './InfoItem.css'

class InfoItem extends Component {
  //rconst
  constructor(props) {
    super(props)

    this.state = {
      text:this.props.text || "evento carnaval"
    }
  }

  render() {
    return (<article>
      <p><b>Info:</b> {this.state.text}</p>
      <img className="img_event" src={this.props.url} alt="" />
      </article>
    )
  }
}

export default InfoItem;
