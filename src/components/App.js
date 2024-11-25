import React, { useState } from "react";
import "./../styles/App.css";

export default function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <label for="name">Enter your name:</label>
      <input
        type="text"
        onChange={(event) => setName("Hello " + event.target.value+"!")}
      />
      <p>{name}</p>
    </div>
  );
}
