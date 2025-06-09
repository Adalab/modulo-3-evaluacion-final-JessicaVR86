import "../styles/App.scss";

import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <>
      <header>
        <h1 className="title">Harry Potter</h1>
      </header>
      <nav className="navsearch">
        <form className="form">
          <div>
            <label htmlFor="filtercharacter" className="searchbox">
              {" "}
              Busca un personaje:{" "}
            </label>
            <input
              type="text"
              name="filtercharacter"
              id="filtercharacter"
              className="inputclass"
            />
          </div>
          <div>
            <label htmlFor="filterhouse" className="searchbox">
              Selecciona la casa:
            </label>
            <select name="filterhouse" id="filterhouse" className="inputclass">
              <option value="Gryffindor">Gryffindor</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Slytherin">Slytherin</option>
            </select>
          </div>
        </form>
      </nav>

      <main className="cardbox">
        <ul className="cardlist">
          <li className="card">
            
            <figure>
             
              <img></img> <figcaption> {movies.name} </figcaption>
            </figure>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
