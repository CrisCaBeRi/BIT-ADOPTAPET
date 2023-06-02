import {dataPet} from '../Data/adopta'
import "../GeneralDescription/GeneralDescriptionStyles.css"
const GeneralDescription = () => {
    const sendwhatsapp =(petname)=>{
        let number = 573124116756;
        let url = `https://wa.me/${number}?text= Hola, estoy interesado en adoptar a: ${petname}`;
        console.log(petname);
        window.open(url);
    }
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
                    <button className="button" onClick={sendwhatsapp(pet.name)}></button>

                </footer>
            </article>
    ))}
    </section>
    </>)
}
export default GeneralDescription

