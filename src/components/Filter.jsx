function Filter(props) {
  return (
    <>
      <nav className="navsearch">
        <form onSubmit={(ev) => ev.preventDefault()} className="form">
          <div>
            <label htmlFor="filtercharacter" className="labelbox">
              Busca un personaje:
            </label>
            <input
              type="text"
              name="filtercharacter"
              id="name"
              className="inputbox"
              onInput={props.handleInput}
              value={props.filters.name}
            />
          </div>
          <div>
            <label htmlFor="filterhouse" className="labelbox">
              Selecciona la casa:{" "}
            </label>
            <select
              name="house"
              id="house"
              className="inputbox"
              onInput={props.handleInput}
              value={props.filters.house}
            >
              <option value="Gryffindor">Gryffindor</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Slytherin">Slytherin</option>
            </select>
          </div>
          <div>
            <label htmlFor="filterhouse" className="labelbox">
              Selecciona género:
            </label>
            <select
              name="gender"
              id="gender"
              className="inputbox"
              onInput={props.handleInput}
              value={props.filters.gender}
            >
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
        
          </div>
              <div className="btnreset">
              <button onClick={props.handleReset} className="btn">               
                Reset
              </button>
            </div>

          <p className="hidden"> {props.alertText}</p>
        </form>
      </nav>
    </>
  );
}

export default Filter;
