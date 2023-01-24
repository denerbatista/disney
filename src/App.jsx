import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./pages/home";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get("https://api.disneyapi.dev/characters");
      setCharacters(await response.data.data);
    };
    getCharacters();
  }, []);
  return (
    <>
      <Home data={characters} />
    </>
  );
}

export default App;
