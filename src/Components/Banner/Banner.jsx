import "./BannerStyles.css"
import bannerDog from "./Assets/banner.png"
import { Link } from "react-router-dom"

export const Banner = () => {
  return (
  <>
  <section className="banner">
    <article className="sloganAction" >
        <h1 id="mainText">En AdoptaPet</h1>
        <h2>¡Compra con propósito! Productos que ayudan a los animales necesitados.</h2>
        <Link to="/products">
        <button>Explora nuestra tienda</button>
        </Link>        
    </article>
    <picture ><img src={bannerDog} alt="Imagen de perro" id="bannerImg"/></picture>
  </section>
  </>
    
  )
}
