import React, { useState, useEffect } from "react";
import * as ReactBootstrap from "react-bootstrap";
const Dispatched = (props) => {

  console.log("PROP COMING FROM ORDER COMPONENT TO DISPATCH COMPONENT");
  console.log(props);


  return (
    <ReactBootstrap.Table
      striped
      bordered
      hover
      responsive="lg"
      name="orders-table"
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Preparation Time</th>
          <th>Image</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        
          <tr>
            <td>
                {props.orders[0].name}
            </td>
          </tr>
        
      </tbody>
    </ReactBootstrap.Table>
  );
};

export default Dispatched;
