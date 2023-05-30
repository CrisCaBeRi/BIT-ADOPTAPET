import "../Header/Header.css";
import logo from "./Assets/LogoWhite.svg"
import { BsFillCartFill } from 'react-icons/fa';


export const Header = () => {
  return (
    <header>
      <picture>
        <img src={logo} alt="Logo" style={{width:"450px"}}/>
      </picture>

      <nav>
        <ul>
            <li>Productos</li>
            <li>Adopción</li>
            <li>Objetivo</li>
        </ul>
      </nav>

      <a href="">
        <picture>
          <img src={BsFillCartFill} alt="" />
        </picture>
      </a>
    </header>
  );
};
