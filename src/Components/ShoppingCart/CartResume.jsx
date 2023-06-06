import { SHOPPINGCONTEXT } from "./ShoppingContext";
import "./CartResumeStyles.css";
import { Link } from "react-router-dom";
import USERSCONTEXT from "../Login/UsersContex";
import { useContext } from "react";

export const CartResume = () => {
  const [cart] = useContext(SHOPPINGCONTEXT);
  const { userLogged } = useContext(USERSCONTEXT);
  console.log(userLogged)

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const sendToWhats = () =>{
    let numero = 573123679015;
        let url = `https://wa.me/${numero}?text= Hola Angel's Makeup, me gustaría ordenar los siguientes productos: ${cart.map((item) => item.quantity + "|" + item.name)} con un total a pagar: $${totalPrice}(sin envío), $${totalPrice + 25} con envío. ||Datos del cliente: Nombre: ${userLogged.name}`;
        window.open(url);

  }
  return (
    <>
      <h2>Resumen de compra</h2>
      <article className="bill">
        <h3>Items en el carrito: {quantity}</h3>
        <span>Total: ${totalPrice}</span>
        <Link to="/products">
          <button id="editCart">Editar carrito</button>
        </Link>
        {userLogged === null ? (
          <Link to="/login">
            <p>Debes iniciar sesión para comprar</p>
          </Link>
          
        ) : (
          <button id="sendCart" onClick={() => sendToWhats()}>
            Enviar pedido
          </button>
        )}
      </article>
    </>
  );
};
