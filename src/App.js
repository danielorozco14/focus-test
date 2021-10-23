import React, { useEffect, useState, Fragment } from "react";
import Product from "./components/ProductsComponent";
import Orders from "./components/OderComponent";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <div className="col-xs-6">
        <Product />
        <Orders/>
      </div>
    </Fragment>
  );
};
export default App;
