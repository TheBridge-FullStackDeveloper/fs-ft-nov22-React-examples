import React, { Component } from "react";
import Button from '@mui/material/Button';

class Contact extends Component {

  constructor(props) {
    super(props)

    this.state = {
      contact: {} // objeto
    }
  }

  sendForm = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const comment = event.target.comment.value;

    const contact = { name, email, comment }; //datos de contacto
    // Enviar POST
    this.createContact(contact);
  }

  createContact = async (contact) => {
    // POST con mis datos
    const res = await fetch('https://fakestoreapi.com/users', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
    const data = await res.json();
    console.log(data.id);
    // Añade el ID de lo enviado a contact
    contact["id"] = data.id;

    this.setState({ contact });// actualizar estado
    alert(`Mensaje enviado de: ${contact.email} con ID: ${contact.id}`);
  }

  render() {
    return <section className="contact">
      <h1>Contact</h1>
      <form onSubmit={this.sendForm}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="comment">Comentarios:</label>
        <textarea id="comment" name="comment" rows="4" cols="29"></textarea>
        <div>
          <Button variant="contained" type="submit" value="Añadir">Añadir</Button>
        </div>
      </form>

      {this.state.contact.email ? <p>Contacto enviado de:{this.state.contact.email} con ID:{this.state.contact.id}</p> : null}
    </section>;
  }
}

export default Contact;
