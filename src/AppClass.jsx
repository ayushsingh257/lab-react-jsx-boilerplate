import React, { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant
      },
      {
        id: 2,
        img: elephant
      },
      {
        id: 3,
        img: elephant
      },
      {
        id: 4,
        img: elephant
      }
    ];
    return data;
  }

  render() {
    const data = this.imageData();

    return (
      <div className="App">
        <h1>Image Gallery (Class Component)</h1>
        <div className="image-container">
          {data.map(item => (
            <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
          ))}
        </div>
      </div>
    );
  }
}

