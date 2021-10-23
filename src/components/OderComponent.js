import React from "react";

const Orders = (props) => {
  console.log(props);
  let i = 0;
  return (
    <tr key={props.row.id}>
      <td>{i= i+1}</td>
      <td>{props.row.name}</td>
      <td>{props.row.preparation_time}</td>
      <td>{props.row.thumbnail}</td>
    </tr>
  );
};

export default Orders;
