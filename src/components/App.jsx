import "../styles/App.scss";
import { useEffect, useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import List from "./List";
import CharacterDetail from "./CharacterDetail";
import { Routes, Route } from "react-router";
import Logo from "../images/textHP.png";


function App() {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    house: "Gryffindor",
    gender: "",
    actor: "",
  });
  const [alertText, setAlertText] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    const newFilter = { ...filters, [id]: value };
    setFilters(newFilter);
    if (value === "xxx") {
      setAlertText("No existe ese nombre");
    }
  };

  const handleReset = () => {
    setFilters({
      name: "",
      house: "Gryffindor",
      gender: "",
      actor: "",
    });
  };

  const superFilter = movies
    .filter((eachMovie) =>
      eachMovie.name.toLowerCase().includes(filters.name.toLowerCase()))
    .filter((eachMovie) => eachMovie.house.includes(filters.house))
    .filter((eachMovie) => eachMovie.gender.includes(filters.gender));

  return (
    <>
      <Header  logo={Logo}  />
      <Routes>
        <Route
          path="/"
          element={
            <Filter
              handleInput={handleInput}
              handleReset={handleReset}
              filters={filters}
              alertText={alertText}
            />
          }
        />
      </Routes>

      <main className="cardbox">
        <Routes>
          <Route
            path="/"
            element={<List filters={filters} superFilter={superFilter} />}
          />

          <Route
            path="/card/:id"
            element={<CharacterDetail movies={movies} />}
          />
          <Route path="*" element={<h3>Página no encontrada</h3>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
