import React from "react";
import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@mui/material";
import "../styling/carousel.css";

function CarouselComponent(props) {
  var items = [
    {
      name: "Testimonials",
      description:
        "\"I'm a testimonial. Click to edit me and add text that says something nice about you and your services.\"",
      author: "Jason Strauss",
      jobTitle: "CEO of ML Associates",
    },
    {
      name: "Testimonials",
      description:
        "\"Click to edit me and add text that says something nice about you and your services.\"",
      author: "Martin Davison",
      jobTitle: "Senior VP of Hardy Construction",
    },
    {
      name: "Testimonials",
      description:
        "\"Hi, Click to edit me and add text that says something nice about you and your services.\"",
      author: "Clara Rodriguez",
      jobTitle: "Executive Director of Aurello Inc.",
    },
  ];

  return (
    <Carousel className="carouselCompo">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className="carouselDiv">
      <p className="itemName">{props.item.name}</p>
      <p className="itemDescription">{props.item.description}</p>
      <h5 className="itemAuthor">{props.item.author}</h5>
      <h5 className="itemjobTitle">{props.item.jobTitle}</h5>
      {/* <Button className="CheckButton">Check it out!</Button> */}
    </div>
  );
}
export default CarouselComponent;
