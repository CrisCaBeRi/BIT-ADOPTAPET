import { listPet } from "../../Data/listado";
import "../ListadoPetDone/ListadoPetDoneStyles.css";
import { Link } from "react-router-dom";
const ListadoPetDone = () => {
  return (
    <>
      <section className="sectionAdopt">
        <h2>Adopta </h2>
        <p>
          Adoptar animales es crucial para detener el abandono y la crueldad,
          ofreciendo una segunda oportunidad a seres inocentes. Promueve el
          respeto, la empatía y la construcción de relaciones especiales,
          enriqueciendo nuestras vidas y creando un mundo más compasivo.
        </p>

        <article className="listCardsPets">
          {listPet.map((pet) => (
            <span className="petCard" key={pet.id}>
                
              <picture>
                <img src={pet.imgUrl} alt="Pet Image" />
              </picture>

              <h3 className="title">{pet.name}</h3>

              <ul className="specsPet">
                <li>
                  {" "}
                  <span>Raza:</span> {pet.petBreed}
                </li>
                <li>
                  {" "}
                  <span>Edad:</span> {pet.petAge}
                </li>
                <li>
                  {" "}
                  <span>Genero:</span> {pet.gender}
                </li>
              </ul>

              <Link to="/adopt">
                <button>Adoptar</button>
              </Link>
            </span>
          ))}
        </article>
      </section>
    </>
  );
};
export default ListadoPetDone;
