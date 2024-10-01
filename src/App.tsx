import React from "react";
import "./App.css";
import Inventory from "./components/Inventory";
import MenuComponent from "./components/MenuComponent";

function App() {
  return (
    <div className="App">
      <MenuComponent />
      <Inventory />
    </div>
  );
}

export default App;
