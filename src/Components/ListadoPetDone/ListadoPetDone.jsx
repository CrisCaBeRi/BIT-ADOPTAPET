import {listPet} from '../Data/listado'
import "../ListadoPetDone/ListadoPetDoneStyles.css"
const ListadoPetDone = () => {
    return(<>
    <section className="cards">
        {listPet.map((pet)=>(
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
                    <a href="../GeneralDescription/GeneralDescription.jsx" className="button">Adopta</a>
                </footer>
            </article>
    ))}
    </section>
    </>)
}
export default ListadoPetDone