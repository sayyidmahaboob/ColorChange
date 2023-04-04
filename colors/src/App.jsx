import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  //useEffect to call api

  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/288760fc-f055-4bf7-bcb1-bda5157bfef3`)
      .then((response) => {
        setColors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //onChange func
  const handelChange = (color) => {
    document.body.style.backgroundColor = color;
  };

  //resetFun
  const handelReset = () => {
    setSelectedColor("");
    document.body.style.backgroundColor = "";
  };

  return (
    <div className="App">
      {colors.map((color) => {
        return (
          <div
            className="box"
            onClick={() => handelChange(color)}
            key={color}
            style={{
              backgroundColor: color,
            }}
          ></div>
        );
      })}
      <div className="btn">
        <button
          onClick={() => {
            handelReset("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
