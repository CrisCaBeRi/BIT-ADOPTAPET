//import { useState } from "react";
import { dataPet } from "../../Data/adopta";
import "../GeneralDescription/GeneralDescriptionStyles.css";
const GeneralDescription = () => {
  //const [petData, setPetData] = useState([]);

  const sendwhatsapp = () => {
    let number = 573124116756;
    let url = `https://wa.me/${number}?text= Hola, estoy interesado en adoptar a:${petData.name} `;
    window.open(url);
  };
  return (
    <>
      <section className="cards">
        {dataPet.map((pet) => (
          <article className="petCard" key={pet.id}>
            <span>
              <h1 className="title">{pet.name}</h1>
            </span>
            <img src={pet.imgUrl} alt="Pet Image" />
            <footer className="footerCard">
              <ul className="footerCard-li">
                <li>Raza: {pet.petBreed}</li>
                <li>Edad: {pet.petAge}</li>
                <li>Genero:{pet.gender}</li>
              </ul>
              <button className="button" onClick={sendwhatsapp}></button>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
};
export default GeneralDescription;
