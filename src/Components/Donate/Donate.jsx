
import "../Donate/DonateStyles.css";
const Donate = () => {
    const sendwhatsappDonate = (dona) => {
        let number = 573124116756;
        let url = `https://wa.me/${number}?text= Hola, estoy interesado en adoptar a ${pet.name}`;
        window.open(url);
      };
    return(
    <>
        <section className="CardDonate">
            <span className="HeaderCardDonate" >
                <h1 className="titleDonate">Donaciones</h1>
            </span>
            <article className="ContentDonate" >
                <figure className="DonaFigure">
                    <img src="https://images2.listindiario.com/n/content/496/495697/p/680x460/201712201405381.jpeg" alt="Pet Image"/>
                </figure>
                <ul className="UlDescription">
                    <li className="Description">
                        Únete a AdoptaPet para apoyar su cuidado
                        y adopción. Dona para proporcionar refugio, alimento
                        y atención veterinaria. Cada donación ayuda a 
                        encontrarles hogares amorosos. Únete como donante 
                        regular para brindar estabilidad. Comparte nuestra 
                        página y genera un impacto positivo en las vidas de 
                        estas mascotas. Tu donación hace la diferencia. 
                        ¡Gracias por unirte a AdoptaPet
                    </li>
                    <button className="ButtonDona" onClick={()=>{sendwhatsappDonate(dona)}}>Dona</button>
                </ul>
            </article>
        </section>
    </>);
    };

export default Donate