import React, { useEffect, useState } from "react";
import axios from "axios";
import Orders from "./OderComponent";
import * as ReactBootstrap from "react-bootstrap";

const Product = () => {
  const [listProducts, setListProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const [itemSelected, setSelectedItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://vending-machine-test.vercel.app/api/products")
      .then((res) => {
        // console.log(res);
        setListProducts(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
    //State value to show spinner animation
    setLoad(true);
  }, []);

  function getRow(e) {
    setSelectedItem([...itemSelected, e]);
  }

  //console.log(itemSelected);

  return [
    <div className="container">
      <h2>Products</h2>
      {load ? (
        <ReactBootstrap.Table striped bordered hover responsive="lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Preparation Time</th>
              <th>Image</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {listProducts.map((e, i) => (
              <tr key={e.id}>
                <td>
                  <b>{(i += 1)}</b>
                </td>
                <td>
                  <b>{e.name}</b>
                </td>
                <td>{e.preparation_time}</td>
                <td>
                  <img
                    style={{ width: "3rem", height: "3rem" }}
                    alt={e.name}
                    src={e.thumbnail}
                  />
                </td>
                <td>
                  <ReactBootstrap.Button
                    onClick={() => getRow(e)}
                    variant="outline-success"
                  >
                    Add
                  </ReactBootstrap.Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </ReactBootstrap.Table>
      ) : (
        <ReactBootstrap.Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </ReactBootstrap.Spinner>
      )}
      <h2>Orders</h2>
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
          {itemSelected.length > 0 ? (
            <Orders row={itemSelected}></Orders>
          ) : (
            <tr>
              <td>NO ORDERS</td>
            </tr>
          )}
        </tbody>
      </ReactBootstrap.Table>
      
    </div>,
  ];
};

export default Product;
