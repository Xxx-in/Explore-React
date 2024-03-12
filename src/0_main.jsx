/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
// Different ways to import React components for rendering
import AppDefault from "./1_App.jsx";
import { App, Hello } from "./1_App.jsx";
import * as AppComponents from "./1_App.jsx";

import Curlies from "./2_Curlies.jsx";
import IdentifyJSvsJSX from "./3_JS_vs_JSX.jsx";
import Props from "./5_Props.jsx";
import "./index.css";
import DynamicPropsFromArray from "./6_Generate_List_By_Array.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Pt 1: Accessing import assets */}
    <h1>Pt 1: Test accessing import assets</h1>
    {/* <App />
    <AppDefault />
    <Hello />
    <AppComponents.Footer />  */}

    <br />
    <h2>Pt 1.1: Exploring Curlies & Double Curlies</h2>
    {/* <Curlies /> */}

    {/* Pt 2: Differentiating JS vs JSX */}
    <hr />
    <h1>Pt 2: Differentiating JS vs JSX s</h1>
    {/* <IdentifyJSvsJSX></IdentifyJSvsJSX> */}
    <br />

    {/* Pt 3: Diving deeper into props -- Test different ways to pass in/access props */}
    <hr />
    <h1>Pt 3: Diving deeper into props -- Test different ways to pass in/access props</h1>
    {/* <Props.PropsApp /> */}
    <br />
    {/* <Props /> */}
    <h1>Pt 4: Using function to generate repetitive components</h1>
    <DynamicPropsFromArray />

  </React.StrictMode>
);
