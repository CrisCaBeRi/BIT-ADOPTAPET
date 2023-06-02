
import "../Donate/DonateStyles.css";
const Donate = () => {
    return(
    <>
        <article className="CardDonate">
            <section className="ContentDonate">
                <header>
                    <h1 className="title">Dona</h1>
                </header>
                <figure className="DonaFigure">
                    <img src="https://images2.listindiario.com/n/content/496/495697/p/680x460/201712201405381.jpeg" alt="Pet Image"/>
                </figure>
                <p className="Description">
                Únete a AdoptaPet para apoyar su cuidado
                y adopción. Dona para proporcionar refugio, alimento
                y atención veterinaria. Cada donación ayuda a 
                encontrarles hogares amorosos. Únete como donante 
                regular para brindar estabilidad. Comparte nuestra 
                página y genera un impacto positivo en las vidas de 
                estas mascotas. Tu donación hace la diferencia. 
                ¡Gracias por unirte a AdoptaPet
                </p>
                <footer className="footerDona">
                    <a href="https://whas.me/YbmJSzxOs0" className="ButtonDona">Dona
                        <img src="https://whas.me/media/_button_image" alt="Chat via WhatsApp"/>
                    </a>
                </footer>
            </section>
        </article>
    </>);
    };

export default Donate;
