import {listPet} from '../../Data/listado'
import "../ListadoPetDone/ListadoPetDoneStyles.css"
const ListadoPetDone = () => {
    const sendwtpp = (pet) => {
        let number = 573124116756;
        let url = `https://wa.me/${number}?text= Hola, estoy interesado en adoptar a ${pet.name}`;
        window.open(url);
      };

    return(<>
    <section className="cards">
        {listPet.map((pet)=>(
            <article className="petCard" key={pet.id}>
                <span className='headerPet'>
                    <h1 className="title">{pet.name}</h1>
                </span>
                <figure className="petImgContainer" >
                    <img src={pet.imgUrl} alt="Pet Image"/>
                </figure>
                <span className="footerCard">
                    <ul className="footerCard-li">
                        <li>Raza: {pet.petBreed}</li>
                        <li>Edad: {pet.petAge}</li>
                        <li>Genero:{pet.gender}</li>
                    </ul>
                    <button className="button" onClick={()=>{sendwtpp(pet)}}>Adoptar</button>
                </span>
            </article>
    ))}
    </section>
    </>)
}
export default ListadoPetDone