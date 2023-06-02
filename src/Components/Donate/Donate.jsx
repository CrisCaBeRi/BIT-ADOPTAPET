import "../Donate/DonateStyles.css";
import petStreet from "./Assets/perroCalle.jpg";
import donate from "./Assets/donate.png";


const Donate = () => { 
  const sendToWhats = () => {
    let numero = 573123679015;
    let url = `https://wa.me/${numero}?text= Hola AdoptaPet, me gustaría donar `;
    window.open(url);
  };

  return (
    <>
      <section className="cardDonate">
        <h2 className="title">Dona</h2>

        <article className="textDonate">
          <span className="seccInfo">
            <h3>Apoya a los amigos peludos</h3>
            <h4>Tu donación salva vidas y brinda esperanza</h4>
            <div className="dividerDonate">
              <picture>
                <img src={petStreet} alt="" />
              </picture>
              <p>
                En Adopta Pet, nos dedicamos apasionadamente a proteger y cuidar
                a los animales desamparados. Cada año, miles de animales
                inocentes son abandonados o terminan en las calles, enfrentando
                peligros constantes y la falta de refugio, alimentos y atención
                médica. Con tu generosa donación, podemos marcar la diferencia
                en la vida de estos animales necesitados. Proporcionaremos
                refugio seguro, atención veterinaria y oportunidades de adopción
                responsables. Cada contribución, grande o pequeña, nos acerca a
                nuestro objetivo de poner fin al sufrimiento y brindarles una
                segunda oportunidad a nuestros amigos peludos. Te invitamos a
                unirte a nuestro esfuerzo y marcar la diferencia. ¡Haz tu
                donación hoy mismo y ayúdanos a crear un mundo donde todos los
                animales tengan una oportunidad de vivir una vida feliz y
                segura!
              </p>
            </div>
          </span>

          <span className="seccInfo">
            <h3>Compra con propósito, cuida con amor</h3>
            <h4>Tu compra ayuda a mantener y proteger a los animales</h4>

            <div className="dividerDonate">
              <picture>
                <img src={donate} alt="" />
              </picture>
              <p>
                En Adopta Pet, creemos en el poder de las compras con propósito.
                Cada artículo que adquieres en nuestra tienda no solo es un
                producto de calidad, sino también una inversión en el bienestar
                de los animales. Los fondos recaudados a través de las ventas de
                nuestros productos son utilizados para mantener y proteger a los
                animales en nuestro refugio. Desde alimentos nutritivos y
                atención veterinaria, hasta programas de esterilización y
                adopción responsable, cada compra que realizas marca una
                diferencia significativa en la vida de nuestros amigos peludos.
                ¡Únete a nosotros y compra con amor! Cada artículo que elijas es
                un paso más hacia un futuro brillante para los animales
                necesitados.
              </p>
            </div>
          </span>
        </article>

        
        <button
          onClick={() => {
            sendToWhats();
          }}
        >
          Donar ahora
        </button>
      </section>
    </>
  );
};

export default Donate;
