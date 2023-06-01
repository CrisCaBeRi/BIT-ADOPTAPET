import "./ShoppingNavStyles.css";
import cart from "../Assets/buyCart.png";
import { Link } from "react-router-dom";

export const ShoppingNav = () => {
  /* traer los contextos del carro de compras */
  return (
    <article className="cartItems">
      {/* //!usar estado de cantidad del carrito con ternario */}
      <span></span>

      <Link to="/adopt">
        <picture>
          <img src={cart} alt="" />
        </picture>
      </Link>
    </article>
  );
};
