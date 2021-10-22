import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const Product = () => {
  const [listProducts, setListProducts] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const listOfProduct = async () => {
    try {
      const data = await axios
        .get("https://vending-machine-test.vercel.app/api/products")
        .then((res) => {
          console.log(res.data.data);
          console.log("DATO 0: " + res.data.data[0].thumbnail);
          setListProducts(res.data.data);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    listOfProduct();
  }, []);
  
  return(
      <Fragment>

      </Fragment>
  )
};

export default Product;
