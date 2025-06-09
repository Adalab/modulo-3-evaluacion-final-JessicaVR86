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
            <label htmlFor="filtercharacter" className="labelbox">
              Busca un personaje:
            </label>
            <input
              type="text"
              name="filtercharacter"
              id="filtercharacter"
              className="inputbox"
            />
          </div>
          <div>
            <label htmlFor="filterhouse" className="labelbox">
              Selecciona la casa:
            </label>
            <select name="filterhouse" id="filterhouse" className="inputbox">
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
          {movies.map((eachCard) => (
            <li key={eachCard.id} className="card">
              <figure>
                <img
                  src={
                    eachCard.image ||
                    "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"  
                  }  className="photo"
                />
                <figcaption className="textbox">
                  
                  <p> {eachCard.name}</p>
                  <p>{eachCard.species} </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
