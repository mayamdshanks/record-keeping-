import Header from "./components/header";
import "./App.css";
import { useState } from "react";
// import Field from "./components/Field";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
//while installing mui and then trying to import material Ui it didn't work so instead of
//good UI i just wrote basic input fields so not good ui but hey record keeping works

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [data, setdata] = useState([]);

  const addData = () => {
    setdata([...data, { name, email }]);

    setname("");
    setemail("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setdata([...arr]);
  };
  return (
    <>
      <div className="app">
        <Header />

        <div className="inputClass">
          <input
            value={name}
            onChange={(event) => setname(event.target.value)}
            type="text"
            placeholder="enter your name"
          />
          <input
            value={email}
            onChange={(event) => setemail(event.target.value)}
            type="email"
            placeholder="enter your email"
          />
          <button onClick={addData} className="simpleButton">
            +
          </button>
        </div>
        <div className="data">
          <div className="data-input">
            <h1>Name</h1>
            <h1>Email</h1>
            <h1>remove</h1>
          </div>
        </div>
        <div />

        {data&&data.map((element, index) => {
          return (
            <div className="data">
              <div key={index} className="data-input">
                <h1>{element.name}</h1>
                <h1>{element.email}</h1>
                <button onClick={() => removeItem(index)}>x</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
