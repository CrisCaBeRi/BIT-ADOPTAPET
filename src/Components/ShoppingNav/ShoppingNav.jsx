import "./ShoppingNavStyles.css";
import cartImg from "../Assets/buyCart.png";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { SHOPPINGCONTEXT } from "../ShoppingCart/ShoppingContext";

export const ShoppingNav = () => {
  const [cart] = useContext(SHOPPINGCONTEXT);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      {quantity > 0 ? (
        <article className="cartItems">
          <span>{quantity}</span>
          <Link to="/cart">
            <picture>
              <img src={cartImg} alt="" />
            </picture>
          </Link>
        </article>
      ) : (
        ""
      )}
    </>
  );
};
