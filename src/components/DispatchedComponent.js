import React from "react";
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
        </tr>
      </thead>
      <tbody>
        {props.orders.length > 0
          ? props.orders.map((e, i) => (
              <tr key={(i = i + 1)}>
                <td>{e[0].id}</td>
                <td>{e[0].name}</td>
                <td>{e[0].preparation_time}</td>
                <td>
                  {" "}
                  <img
                    style={{ width: "3rem", height: "3rem" }}
                    alt={e[0].name}
                    src={e[0].thumbnail}
                  />
                </td>
              </tr>
            ))
          : props.orders.map((e, i) => (
              <tr key={(i = i + 1)}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.preparation_time}</td>
                <td>
                  {" "}
                  <img
                    style={{ width: "3rem", height: "3rem" }}
                    alt={e.name}
                    src={e.thumbnail}
                  />
                </td>
              </tr>
            ))}
      </tbody>
    </ReactBootstrap.Table>
  );
};

export default Dispatched;
