import "./GridInfoStyles.css";

import cat1 from "./Assets/cat1.jpg";
import cat2 from "./Assets/cat2.jpg";
import cat3 from "./Assets/cat3.jpg";
import dog1 from "./Assets/dog1.jpg";
import dog2 from "./Assets/dog2.jpg";
import dog3 from "./Assets/dog3.jpg";
import family from "./Assets/family.jpg";

import { Link } from "react-router-dom";

export const GridInfo = () => {
  return (
    <>
      <section className="gridInfo">
        <h2 id="textHeader">Nuestro servicio con las mascotas</h2>
        <article className="mixImgs">
          <picture>
            <img src={cat1} alt="Animal image" />
          </picture>
          <picture>
            <img src={cat2} alt="Animal image" />
          </picture>
          <picture>
            <img src={cat3} alt="Animal image" />
          </picture>
          <picture>
            <img src={dog1} alt="Animal image" />
          </picture>
          <picture>
            <img src={dog2} alt="Animal image" />
          </picture>
          <picture>
            <img src={dog3} alt="Animal image" />
          </picture>
        </article>

        <article className="descriptionSec">
          
          <span className="description">
            <h3>¿A qué nos dedicamos?</h3>
            <h4>Conoce sobre nosotros</h4>
            <p>
              Trabajamos arduamente para rescatar a los animales en situación de
              peligro, proporcionarles los cuidados necesarios, y brindarles un
              entorno seguro y amoroso mientras esperan encontrar una familia
              adoptiva. Nuestra labor no se limita solo a la adopción, sino que
              también educamos a la comunidad sobre la importancia de la
              tenencia responsable de mascotas y fomentamos la esterilización
              para controlar la población de animales sin hogar.
            </p>
            <p>
              Nos esforzamos por establecer alianzas con organizaciones locales,
              veterinarios y voluntarios comprometidos para poder ofrecer los
              mejores cuidados posibles a nuestras mascotas rescatadas.
              Trabajamos en conjunto con las familias adoptivas para asegurarnos
              de que cada mascota encuentre un hogar donde sea amada, protegida
              y bien cuidada durante toda su vida.
            </p>
            <Link to="/info">
              <p id="navToInfo">Conoce más sobre nosotros</p>
            </Link>
          </span>

          <picture>
            <img src={family} alt="family image" />
          </picture>
        </article>
      </section>
    </>
  );
};
