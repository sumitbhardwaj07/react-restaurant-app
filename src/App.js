import React, { useState } from "react";
import "./App.css";
import AddItem from "./components/Form/AddItem";

function App() {
  const [listItems, setListItems] = useState([]);
  const addUserHandler = (uId, uPrice, uDish, table) => {
    setListItems((prevlist) => {
      return [
        ...prevlist,
        { id: uId, price: uPrice, dish: uDish, table: table },
      ];
    });
  };
  return (
    <div>
      <AddItem onAddItem={addUserHandler} listItems={listItems}/>
    </div>
  );
}

export default App;

