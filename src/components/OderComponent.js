import React, { useRef, useState } from "react";
import * as ReactBootstrap from "react-bootstrap";

const Orders = (props) => {

    const [count, setCount] = useState(0);

    const countRef = useRef(count);
    countRef.current = count;

    const getCountTimeout=(e)=>{
        setTimeout(()=>{
            alert(e.name + "IT'S READY!")
        },e.preparation_time * 1000)
    }

  console.log(props);
  let i = 0;
  return props.row.map((e) => (
    <tr key={i= i + 1}>
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
      <td >
      <ReactBootstrap.Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </ReactBootstrap.Spinner>
        {
            getCountTimeout(e)
        }
      </td>
    </tr>
  ));
};

export default Orders;
