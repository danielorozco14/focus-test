import React, {Fragment } from "react";
import Product from "./components/ProductsComponent";
import "./App.css";

const App = () => {

  return (
    <Fragment>
      <div className="col-xs-6" style={{flexDirection:"row"}}>
        <Product />
        
      </div>
    </Fragment>
  );
};
export default App;
