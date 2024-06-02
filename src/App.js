import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superpower, setSuperpower] = useState("");
  const [displayCharacter, setDisplayCharacter] =
    useState(false);

  return (
    <div className="App">
      <h1>Build a Hero!</h1>
      <div>
        <label>Hero name: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Hero age: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Hero Height: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label>Hero Superpower: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(e) => setSuperpower(e.target.value)}
        />
      </div>
      <button onClick={() => setDisplayCharacter(true)}>Change Character</button>
      <div>
        <h1>Hero Info</h1>
        {displayCharacter && (
          <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>Superpower: {superpower}</li> 
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
