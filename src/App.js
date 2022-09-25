import React from "react";
import { render } from "react";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Iva",
      animal: "Bunny",
      breed: "Mini French Lop",
    }),
    React.createElement(Pet, {
      name: "Zoki",
      animal: "Cat",
      breed: "European Common",
    }),
    React.createElement(Pet, {
      name: "Ludomir",
      animal: "Dog",
      breed: "Mix",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
