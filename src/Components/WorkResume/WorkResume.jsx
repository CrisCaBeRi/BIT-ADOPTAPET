import "./WorkResumeStyles.css";
import adopt from "./Assets/adopt.png";
import articles from "./Assets/articles.png";
import donate from "./Assets/donate.png";

import { Link } from "react-router-dom";

export const WorkResume = () => {
  return (
    <>
      <section className="workResume">
        <h2>¿En qué trabajamos?</h2>
        <article>
          <span className="cardsWorks">
            <Link to="/adopt" className="linkToPag">
              <picture>
                <img src={adopt} alt="" />
              </picture>
              <h3>Adopta</h3>
            </Link>
            <p>Llevate un peludito a tu hogar y brindale un nuevo comienzo.</p>
          </span>
          <span className="cardsWorks">
            <Link to="/products" className="linkToPag">
              <picture>
                <img src={articles} alt="" />
              </picture>
              <h3>Compra</h3>
            </Link>
            <p>
              Todos los elementos necesarios para tu mascota en un solo lugar.
            </p>
          </span>
          <span className="cardsWorks">
            <Link to="/help" className="linkToPag">
              <picture>
                <img src={donate} alt="" />
              </picture>
              <h3>Apoya</h3>
            </Link>
            <p>Realiza una doncación para seguir apoyando nuestra causa.</p>
          </span>
        </article>
      </section>
    </>
  );
};
