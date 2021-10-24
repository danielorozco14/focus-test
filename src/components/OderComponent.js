import React, { useEffect, useRef, useState, Fragment } from "react";
import * as ReactBootstrap from "react-bootstrap";
import Dispatched from "./DispatchedComponent";

const Orders = (props) => {
  const [count, setCount] = useState(0);
  const [dispatch, setDispatchOrders] = useState([]);

  const countRef = useRef(count);
  countRef.current = count;

  const dispatchRef = useRef(dispatch);
  dispatchRef.current = dispatch;

  useEffect(() => {
    setDispatchOrders(props.row);
  }, []);

  const getCountTimeout = (e) => {
    const timer = setTimeout(() => {
      alert(`Your ${e.name} is ready!!`);
      dispatchOrder(props, e);
    }, e.preparation_time * 1000);

    return () => clearTimeout(timer);
  };

  const dispatchOrder = (props, e) => {
    var index = props.row.indexOf(e);
    if (index > -1) {
      setDispatchOrders([...dispatch, props.row.splice(index, 1)]);
    }
  };

  //console.log(props);
  console.log(dispatch);

  return (
    <Fragment>
      {props.row.map((e, i) => (
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
          <td>
            <ReactBootstrap.Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </ReactBootstrap.Spinner>
            {getCountTimeout(e)}
          </td>
        </tr>
      ))}

      <h2>Orders Dispatched</h2>

      <Dispatched orders={dispatch}/>
    </Fragment>
  );
};

export default Orders;
