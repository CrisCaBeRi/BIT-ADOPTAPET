import "./KnowMoreStyles.css";
import mision from "./Assets/mision.png";
import vision from "./Assets/vision.png";
export const KnowMore = () => {
  return (
    <section className="knowMore">
      <h2>Conoce más sobre nuestra fundación</h2>
      <h3>Un hogar, una esperanza: Adopta Pet, cambiando vidas de animales</h3>
      <article className="misionVision">
        <picture>
          <img src={mision} alt="logo sección sobre nosotros" />
        </picture>
        <span className="textKnow">
          <h3>Misión</h3>
          <p>
            En Adopta Pet, nuestra misión es brindar un hogar amoroso y seguro
            para los animales desamparados, promoviendo la adopción responsable,
            la conciencia sobre el bienestar animal y la esterilización para
            controlar la población. Trabajamos incansablemente para crear un
            mundo donde todos los animales sean tratados con respeto y
            compasión.
          </p>
        </span>
      </article>
      <article className="misionVision">
        <picture>
          <img src={vision} alt="logo sección sobre nosotros" />
        </picture>
        <span className="textKnow">
          <h3>Visión</h3>
          <p>
            Nuestra visión es lograr una sociedad donde ningún animal sufra por
            la falta de un hogar, donde cada mascota tenga la oportunidad de
            vivir una vida plena y feliz. Aspiramos a ser un referente en la
            protección animal, fomentando la educación y la colaboración con la
            comunidad para impulsar un cambio duradero en la forma en que los
            animales son percibidos y tratados.
          </p>
        </span>
      </article>

      <span className="contact">
        <h3>Contacto</h3>
        <p>
          Para obtener más información sobre nuestra fundación, realizar
          consultas o colaborar con nosotros, no dudes en ponerte en contacto:
        </p>

        <ul>
          <li>
            <span>Telefono: </span>3123679015{" "}
          </li>
          <li>
            <span>Correo Electrónico:</span>adoptapet@gmail.com{" "}
          </li>
          <li>
            <span>Dirección:</span>Calle 43 # 59a-07{" "}
          </li>
        </ul>        
      </span>
    </section>
  );
};
