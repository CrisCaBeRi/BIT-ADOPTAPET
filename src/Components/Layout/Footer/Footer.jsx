import "./FooterStyles.css";

import facebook from "../../KnowMore/Assets/facebook.png";
import instagram from "../../KnowMore/Assets/instagram.png";
import youtube from "../../KnowMore/Assets/youtube .png";
import tiktok from "../../KnowMore/Assets/tiktok.png";
import logo from "../Header/Assets/LogoBlack.svg";

export const Footer = () => {
  return (
    <>
      <section className="footer">
        <picture>
          <img src={logo} alt="Logo" />
        </picture>
        <ul className="socialFooter">
          <li>
            <picture>
              <img src={facebook} alt="Logos redes sociales" />
            </picture>
          </li>
          <li>
            <picture>
              <img src={instagram} alt="Logos redes sociales" />
            </picture>
          </li>
          <li>
            <picture>
              <img src={youtube} alt="Logos redes sociales" />
            </picture>
          </li>
          <li>
            <picture>
              <img src={tiktok} alt="Logos redes sociales" />
            </picture>
          </li>
        </ul>
        <p>Copyright developed</p>
      </section>
    </>
  );
};
