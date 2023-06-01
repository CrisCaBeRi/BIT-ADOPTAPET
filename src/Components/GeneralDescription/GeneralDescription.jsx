import {dataPet} from '../Data/adopta'
import "../GeneralDescription/GeneralDescriptionStyles.css"
const GeneralDescription = () => {
    return(<>
    <section className="cards">
        {dataPet.map((pet)=>(
            <article className="petCard" key={pet.id}>
                <header>
                    <h1 className="title">{pet.name}</h1>
                </header>
                <img src={pet.imgUrl} alt="Pet Image"/>
                <footer className="footerCard">
                    <ul className="footerCard-li">
                        <li>Raza: {pet.petBreed}</li>
                        <li>Edad: {pet.petAge}</li>
                        <li>Genero:{pet.gender}</li>
                    </ul>
                </footer>
            </article>
    ))}
    </section>
    </>)
}
export default GeneralDescription