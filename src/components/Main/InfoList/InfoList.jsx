import React, { Component } from "react";
import InfoItem from './InfoItem';
import data from './events.json';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';

class InfoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: data, // [] de datos iniales
      newEventName: "", // Nombre del evento que estoy creando
      userName: ""
    }
    this.userName = React.createRef(); // Referencia para nombre usuario
  }

  deleteEvent = (i) => {
    const remainingEvents = this.state.events.filter((event, j) => i !== j);
    this.setState({ events: remainingEvents })
  }


  printCards = () => <section>{this.state.events.map((event, i) => <InfoItem data={event} remove={() => this.deleteEvent(i)} key={uuidv4()} />)}</section>

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


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);

    const eventName = event.target.name.value;
    const info = event.target.info.value;
    const price = event.target.price.value;
    const image = event.target.image.value;

    const newEvent = {
      eventName,
      info,
      price,
      image
    };

    console.log(newEvent);
    alert("Enviado!!!!!!");
    // Guardar nuevo evento
    // (En el futuro puede ser un POST a una API)
    this.setState({ events: [...this.state.events, newEvent] });
  }

  handleChange = (event) => this.setState({ newEventName: event.target.value })

  handleClick = () => {
    alert("Nombre de usuario: " + this.userName.current.value); // Leer referencia
    this.setState({ userName: this.userName.current.value }); // Setear estado userName
  }

  removeName = () => {
    alert("borrado!")
    this.setState({ userName: "" }); // Borrar userName
  }

  manageUser = () => {
    if (this.state.userName) {
      return <article>
        <h2>Welcome, {this.state.userName}</h2>
        <button onClick={this.removeName}>Salir</button>
      </article>
    } else {
      return <article>
        <h2>Introduce tu nombre</h2>
        <input type="text" ref={this.userName} />
        <button onClick={this.handleClick}>Enviar</button>
      </article>
    }
  }
  componentDidMount() {
    // peticiones HTTP
    // peticiones asíncronas
    // llamada con fetch() o axios() o xhr() o request(), etc....
    // renderiza los cambios en el DOM --> hacer un setState con los datos
  }

  render() {
    return <section className="infolist">
      <h1>Events</h1>
      {this.manageUser()}

      <article className="form-add-event">
        <h2>Añadir eventos</h2>

        <Box onSubmit={this.handleSubmit}
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="name"
            label="Required"
            defaultValue="Event Name"
            onChange={this.handleChange}
          />
          <TextField
            required
            id="info"
            label="Required"
            defaultValue="Info"
          />
          <TextField
            required
            id="price"
            label="Required"
            defaultValue="Price"
          />
          <TextField
            required
            id="image"
            label="Required"
            defaultValue="Image URL"
          />
          <button type="submit">Create event</button>
          <br />
        </Box>


        {this.state.newEventName ? <p>Nuevo evento a crear: {this.state.newEventName}</p> : ""}

      </article>

      <article className="button-set">

        <button onClick={this.addEvent}>Add Event</button>
        <button onClick={this.removeAllEvents}>Remove All Events</button>
        <button onClick={this.restoreEvents} disabled={this.state.events.length > 0 ? true : false}>Restore Events</button>
      </article>

      <article className="event-container">
        <h2>Nuestros eventos</h2>
        {this.printCards()}
      </article>

    </section>;
  }
}

export default InfoList;
