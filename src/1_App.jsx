// This file covers general introduction to React Components 
// & passing in simple props to components for dynamic rendering

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  console.log("Hello from App component");
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "{Pass in name as var}";
  console.log(now, a + b);
  return (
    <>
      <div id="introMsg">
        <p>Hello world, it is {String(now)}</p>
        <p>
          {a} + {b} = {a + b}{" "}
        </p>
      </div>

      <div id="contentBody">
        <Hello />

        {/* Pass in value with props for subbing placeholder value when rendering */}
        <HelloWithProps name="Hardcoded" />
        <HelloWithProps name={name} />
        <HelloWithProps />
        {/* If no pass in props to sub in placeholder, it will be printed as blank */}

        {/* Lowercase React recognise as HTML element instead of rendering React component of same name */}
        <footer />
        <Footer />

        <HelloStudents />
      </div>
    </>
  );
};

const Hello = () => {
  return (
    <div>
      <p>Hello!</p>
    </div>
  );
};

// Passing in props for dynamic rendering using JSON object
const HelloWithProps = (props) => {
  return (
    <div>
      <p>Hello, I know you name: props.name = {props.name}!</p>
    </div>
  );
};

// React doesn't recognize lowercase as React component
// Cannot be rendered by React
const footer = () => {
  return (
    <>
      <p>Here lies a footer!</p>
      <div>
        greeting app created by
        <a href="https://github.com/mluukkai">mluukkai</a>
      </div>
    </>
  );
};
export const Footer = () => {
  return (
    <div>
      <p>Here lies a Footer!</p>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

// JSX can only resolve primitive values for dynamic rendering
let students = [
  { name: "Peter", age: 4 },
  { name: "Maya", age: 10 },
];

let teachers = ["Ms. Jillian", "Mr. Ang"];

function HelloStudents() {
  return (
    <>
      <div>
        {/* <p>Hi, {students[0]}</p> */} {/* Error Objects are not valid as a React child -> JSON object is not primitive value, cannot be rendered by React*/}
        <p>Hi, {students[0].name}</p>
        <p>You will be students of {teachers}</p>
      </div>
    </>
  );
}

export { App, Hello, HelloWithProps };
export default App;
