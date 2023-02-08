import React, { Component } from "react";
import InfoItem from './InfoItem'
class InfoList extends Component {
  render() {
    return <section>
      <h2>Info de eventos</h2>
      <InfoItem/>
      <InfoItem/>
      <InfoItem/>
      <InfoItem/>
      <InfoItem text="Vamos a por tortilla" url="https://cdn.pixabay.com/photo/2016/03/27/17/14/venetian-mask-1283163_960_720.jpg"/>
      <InfoItem text="Alguien se va a pedir barrita tomate" url="https://cdn.pixabay.com/photo/2018/01/17/15/33/streamer-3088458_960_720.jpg"/>
      <InfoItem text="Zumo de naranaja es bueno" url="https://cdn.pixabay.com/photo/2013/07/27/05/09/carousel-168125_960_720.jpg"/>
      <InfoItem text="Un café con leche, por favor" url="https://cdn.pixabay.com/photo/2017/02/23/18/00/carnival-2092819_960_720.jpg" />
    </section>;
  }
}

export default InfoList;
