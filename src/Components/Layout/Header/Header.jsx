import { useState } from "react";
import USERSCONTEXT from "../../Login/UsersContex";
import { useContext } from "react";
import logo from "./Assets/LogoBlack.svg";
import dog from "./Assets/perro.png";
import cat from "./Assets/gato.png";
import menuLogo from "./Assets/menu.png";

import "./Header.css";

import { Link } from "react-router-dom";

//TODO modify the fonts and real colors
//TODO use the react router to nav to the pages
//TODO modify the margin for all document
//TODO use vw for fonts to change the mediaquerys propertly
export const Header = () => {
  const { userLogged } = useContext(USERSCONTEXT);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header className="header">
        <Link to="/home">
          <img className="logo" src={logo} alt="Logo Header" />
        </Link>

        <button onClick={toggleMenu} className="Header-button">
          <picture>
            <img src={menuLogo} alt="Logo Hamburguer" />
          </picture>
        </button>

        <nav className={`Header-nav ${menu ? "isActive" : ""}`}>
          <section className="navigation">
            <Link to="/products">
              <button>Artículos</button>
            </Link>

            <Link to="/adopt">
              <button>Adopta</button>
            </Link>

            <Link to="/help">
              <button>Dona</button>
            </Link>

            <Link to="/info">
              <button>Conoce más</button>
            </Link>
            {userLogged ? (
              <span>Hola {userLogged.name}</span>
            ) : (
              <Link to="/login">
                <button id="loginBtn">Iniciar sesión</button>
              </Link>
            )}
            <article id="animalsLogos">
              <picture>
                <img src={cat} alt="cat logo" />
              </picture>
              <picture>
                <img src={dog} alt="dog logo" />
              </picture>
            </article>
          </section>
        </nav>
      </header>
    </>
  );
};
