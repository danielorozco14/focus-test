import React, { useEffect, useRef, useState, Fragment } from "react";
import * as ReactBootstrap from "react-bootstrap";

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

      <ReactBootstrap.Table
        striped
        bordered
        hover
        responsive="lg"
        name="orders-table"
      >
        <thead>
          <caption>
            <h2>Orders Dispatched</h2>
          </caption>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Preparation Time</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {dispatch.length > 1
            ? dispatch.map((e, i) => (
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
            : dispatch.map((e, i) => (
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
    </Fragment>
  );
};

export default Orders;
