import logo from "./logo.svg";
import {useEffect, useState} from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState([]);

  const getGreeting = async () => {
    const response = await fetch("http://localhost:8080/hello");
    const text = await response.text();
    console.log(text);
    setGreeting(text);
  };

  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{greeting}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
