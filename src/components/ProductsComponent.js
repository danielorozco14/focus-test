import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";

const Product = () => {
  const [listProducts, setListProducts] = useState([]);
  const [spinner, setSpinner] = useState(false);

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
      setSpinner(true); 
  }, []);

  //  console.log(listProducts);
  return (
    <div>
      <h2>Products</h2>
      <ReactBootstrap.Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </ReactBootstrap.Spinner>
      <ReactBootstrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Preparation Time</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {listProducts.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.preparation_time}</td>
              <td>{e.thumbnail}</td>
            </tr>
          ))}
        </tbody>
      </ReactBootstrap.Table>
    </div>
  );
};

export default Product;
