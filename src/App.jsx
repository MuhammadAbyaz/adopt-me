import React from "react";
import {createRoot} from "react-dom"
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Tommy",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Mano Billi",
      breed: "Karachi wali",
    }),
    React.createElement(Pet, {
      animal: "Rat",
      name: "Jerry",
      breed: "Gutter wala",
    }),
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
