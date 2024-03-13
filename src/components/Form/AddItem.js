import React, { useState } from "react";
import classes from "./AddItem.module.css";

const AddItem = (props) => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");

  const handleAddItem = (event) => {
    if (!orderId || !price || !dish) {
      alert("Please fill out all fields");
      return;
    }
    event.preventDefault();
    props.onAddItem([ orderId, price, dish ]);
    setOrderId("");
    setPrice("");
    setDish("");
  };

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <label htmlFor="orderid">Unique Order ID:</label>
        <input
          id="orderid"
          type="number"
          value={orderId}
          onChange={(event) => setOrderId(event.target.value)}
        />
        <label htmlFor="price">Choose Price:</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <label htmlFor="dish">Choose Dish</label>
        <input
          id="dish"
          type="text"
          value={dish}
          onChange={(event) => setDish(event.target.value)}
        />
        <label htmlFor="choosetable">Choose Table:</label>
        <select
          id="choosetable"
          value={dish}
          onChange={(event) => setDish(event.target.value)}
        >
          <option value="">Select a Table</option>
          <option value="Table1">Table1</option>
          <option value="Table2">Table2</option>
          <option value="Table3">Table3</option>
        </select>

        <button type="submit">Add to bill</button>
      </form>

      <div>
        <h2>Orders</h2>
        {props.listItems.map((order, index) => (
          <div key={index}>
            <h4>{order.table}</h4>
            <ol>
              <li>
                <div className={classes.orderitem}>Order ID: {order.id}</div>
                <div className={classes.price}>Price: {order.price}</div>
                <div className={classes.delete}>Delete</div>
              </li>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddItem;
