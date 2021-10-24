import React from "react";

const Orders = (props) => {
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
          src={e.thumbnail}
        />
      </td>
    </tr>
  ));
};

export default Orders;
