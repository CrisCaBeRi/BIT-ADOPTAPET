import { useContext } from "react";
import USERSCONTEXT from "./UsersContex";
import "./LoginStyles/formStyles.css";
import logo from "../Assets/LogoWhite.svg";
import { Link } from "react-router-dom";

export default function LoginUsers() {
  const { loginUser, error } = useContext(USERSCONTEXT);
  console.log(error);

  const validateUser = (event) => {
    event.preventDefault();
    let { email, password } = event.target.elements;
    //console.log(email.value, password.value)
    loginUser(email.value, password.value);
    event.target.reset();
  };

  return (
    <form action="" onSubmit={validateUser}>
      <h3>Iniciar sesión</h3>
      <picture>
        <img src={logo} alt="" />
      </picture>
      <span className="divider">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo"
          required
        />

        <label htmlFor="name">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          required
        />
        <input type="submit" id="submitBtn" value={"Iniciar sesión"} />

        <Link to="/register">
          <p id="linkToRegister">¿No tienes cuenta? Registrate aquí.</p>
        </Link>
        {error ? <p id="error">{error}</p> : ""}
      </span>
    </form>
  );
}
