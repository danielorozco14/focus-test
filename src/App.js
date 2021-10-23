import React, { useEffect, useState, Fragment } from "react";
import Product from "./components/ProductsComponent";
import Orders from "./components/OderComponent";
import "./App.css";
import { TabContainer } from "react-bootstrap";

const App = () => {

  const item ={
    id:54,
    name:"Taco",
    preparation_time:67,
    thumbnail: "Https://languageline"
  }
  return (
    <Fragment>
      <div className="col-xs-6">
        <Product />
        
      </div>
    </Fragment>
  );
};
export default App;
