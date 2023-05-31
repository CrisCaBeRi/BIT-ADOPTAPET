import "../Header/Header.css";
import logo from "../Assets/LogoBlack.svg";
import cart from "../Assets/buyCart.png";

import USERSCONTEXT from "../Login/UsersContex";
import { useContext } from "react";

export const Header = () => {
  const { userLogged } = useContext(USERSCONTEXT);
  console.log(userLogged);

  return (
    <header>
      <a href="">
        <picture>
          <img src={logo} alt="Logo" />
        </picture>
      </a>
      <nav>
        <a href="">
          <button>Productos</button>
        </a>
        <a href="">
          <button>Adopta</button>
        </a>
        <a href="">
          <button>Sobre nosotros</button>
        </a>
      </nav>
     
      {userLogged ? (
        <span>Hola {userLogged.name}</span>
      ) : (
        <button>Iniciar sesion</button>
      )}
      <article className="cartItems">
        {/* //!usar estado de cantidad del carrito con ternario */}
        <span>1</span>
        <a href="">
          <picture>
            <img src={cart} alt="" />
          </picture>
        </a>
      </article>
    </header>
  );
};
