import "../styles/App.scss";

function App() {
  return (
    <>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <nav>
        <form>
          <label htmlFor="filtercharacter"> Busca un personaje: </label>
          <input type="text" name="filtercharacter" id="filtercharacter" />
          <label htmlFor="filterhouse">Selecciona la casa:</label>
          <select name="filterhouse" id="filterhouse">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>
        </form>
      </nav>

      <main>
        <ul>
          <li></li>
        </ul>
      </main>
    </>
  );
}

export default App;
