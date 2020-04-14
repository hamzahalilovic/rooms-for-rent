import React, { Component } from "react";
import Title from "./Title";
import {
  FaDribbble,
  FaHiking,
  FaShuttleVan,
  FaHamburger,
} from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaDribbble />,
        title: "Sports Activities",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, non.",
      },
      {
        icon: <FaHiking />,
        title: "Outdoor Activities",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, non.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Transportation",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, non.",
      },
      {
        icon: <FaHamburger />,
        title: "Food",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, non.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <h6>{item.info}</h6>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
