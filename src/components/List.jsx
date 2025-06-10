function List({superFilter}) {
  return (
    <>
      <ul className="cardlist">
        {superFilter.map((eachCard) => (
          <li key={eachCard.id} className="card">
            <figure>
              <img
                src={
                  eachCard.image ||
                  "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
                }
                className="photo"
              />
              <figcaption className="textbox">
                <p> {eachCard.name}</p>
                <p>{eachCard.species} </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
