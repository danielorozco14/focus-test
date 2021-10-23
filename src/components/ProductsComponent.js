import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";

const Product = () => {
  const [listProducts, setListProducts] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(async () => {
    await axios
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

  const divStyle = {};
  //  console.log(listProducts);
  return (
    <div className="container">
      <h2>Products</h2>
      {load ? (
        <ReactBootstrap.Table striped bordered hover responsive="lg" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Preparation Time</th>
              <th>Image</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {
              listProducts.map((e) => (
                <tr key={e.id}>
                  <td>
                    <b>{e.id}</b>
                  </td>
                  <td>
                    <b>{e.name}</b>
                  </td>
                  <td>{e.preparation_time}</td>
                  <td>
                    <img
                      style={{ width: "3rem", height: "3rem" }}
                      src={e.thumbnail}
                    />
                  </td>
                  <td>
                    <ReactBootstrap.Button variant="outline-success">Add</ReactBootstrap.Button >{" "}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </ReactBootstrap.Table>
      ) : (
        <ReactBootstrap.Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </ReactBootstrap.Spinner>
      )}
    </div>
  );
};

export default Product;
