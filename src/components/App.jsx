import "../styles/App.scss";
import { useEffect, useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import List from "./List";

function App() {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    house: "",
    gender: "",
  });

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
  };

  const superFilter = movies

    .filter((eachMovie) =>
      eachMovie.name.toLocaleLowerCase().includes(filters.name)
    )
    .filter((eachMovie) => eachMovie.house.includes(filters.house))

    .filter((eachMovie) => eachMovie.gender.includes(filters.gender));

  return (
    <>
      <Header />

      <nav className="navsearch">
        <Filter handleInput={handleInput} filters={filters} />
      </nav>

      <main className="cardbox">
        <List superFilter={superFilter} />
      </main>
    </>
  );
}

export default App;
