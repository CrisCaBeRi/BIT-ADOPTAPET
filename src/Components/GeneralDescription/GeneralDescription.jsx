import { dataPet } from "../../Data/adopta";
import "../ListadoPetDone/ListadoPetDoneStyles.css";
const GeneralDescription = () => {
  const sendwhatsapp = (pet) => {
    let number = 573123679015;
    let url = `https://wa.me/${number}?text= Hola, estoy interesado en adoptar a:${pet.name}`;
    window.open(url);
  };
  return (
    <>
      <section>
        <h2 id="titleGeneralDesc">Adopta</h2>
        <article className="listCardsPets">
          {dataPet.map((pet) => (
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
              <button
                onClick={() => {
                  sendwhatsapp(pet);
                }}
              >
                Adoptar
              </button>
            </span>
          ))}
        </article>
      </section>
    </>
  );
};
export default GeneralDescription;
