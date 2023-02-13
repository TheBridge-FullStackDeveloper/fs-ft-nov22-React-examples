import React, { Component } from "react";
import InfoItem from './InfoItem';
import data from './events.json';
import { v4 as uuidv4 } from 'uuid';

class InfoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: data
    }
  }

  deleteEvent = (i) => {
    const remainingEvents = this.state.events.filter((event, j) => i !== j);
    this.setState({ events: remainingEvents })
  }


  printCards = () => this.state.events.map((event, i) => <InfoItem data={event} remove={() => this.deleteEvent(i)} key={uuidv4()} />)

  addEvent = () => {
    const promptEventName = prompt('Nombre del evento?');
    const promptInfo = prompt('Cuales el la info del evento?');
    const promptPrice = prompt('Cual es el precio del evento?');
    const promptImage = prompt('Añade la imagen del evento');

    const newEvent = {
      eventName: promptEventName,
      info: promptInfo,
      price: promptPrice,
      image: promptImage
    };

    this.setState({ events: [...this.state.events, newEvent] });
  }

  removeAllEvents = () => {
    this.setState({ events: [] })
  }

  restoreEvents = () => {
    this.setState({ events: data })
  }





  render() {
    return <section>
      <h2>Info de eventos</h2>
      <button onClick={this.addEvent}>Add Event</button>
      <button onClick={this.removeAllEvents}>Remove All Events</button>
      <button onClick={this.restoreEvents}>Restore Events</button>

      {this.printCards()}

    </section>;
  }
}

export default InfoList;
