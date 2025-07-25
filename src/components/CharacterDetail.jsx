import { useParams } from "react-router";
import { Link } from "react-router";

function CharacterDetail({ movies }) {
  const params = useParams();

  const cardSelected = movies.find((eachfilter) => eachfilter.id === params.id);

  return (
    <>
      <div key={cardSelected.id} className="preview">
        <figure>
          <img
            src={
              cardSelected.image ||
              "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
            }
            className="imgPreview "
          />

          <figcaption className="textBoxPreview">
            <p>
              <span className="textPreview">Personaje: </span>
                {cardSelected.name}
            </p>
            <p>
              <span className="textPreview">Especie: </span>
              {cardSelected.species}
            </p>
            <p>
              <span className="textPreview">Género: </span>
              {cardSelected.gender}
            </p>
            <p>
              <span className="textPreview">Actor: </span> {cardSelected.actor}
            </p>
          </figcaption>
        </figure>

        <section className="btnBack">
          <Link to="/" className="btn">
            Volver
          </Link>
        </section>
      </div>
    </>
  );
}

export default CharacterDetail;
