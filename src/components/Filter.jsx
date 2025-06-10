function Filter(props) {
  return (
    <>
      <form className="form">
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
            Selecciona la casa:
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
      </form>
    </>
  );
}

export default Filter;
