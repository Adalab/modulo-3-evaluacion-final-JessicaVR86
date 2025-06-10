import { Link } from "react-router";

function List({ superFilter }) {
  return (
    <ul className="cardlist">
      {superFilter.map((eachCard) => (
        <li key={eachCard.id} className="card">
          <Link to={`/card/${eachCard.id}`} className="onecard" >
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
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default List;
