import { useContext } from "react";
import USERSCONTEXT from "./UsersContex";
import "./LoginStyles/formStyles.css";

import logo from "../Assets/LogoWhite.svg";

export default function AddUser() {
  const { addUser, userLogged } = useContext(USERSCONTEXT);
  console.log(userLogged);
  const newUser = (e) => {
    e.preventDefault();
    let { name, email, password, phoneNumber } = e.target.elements;
    addUser(name.value, email.value, password.value, phoneNumber.value);
    e.target.reset();
  };
  return (
    <>{/* //!FALTAN LOS MENSAJES DE USUARIO YA REGISTRADO */}
      {!userLogged ? (
        <form action="" onSubmit={newUser}>
          <h3>Registro</h3>
          <picture>
            <img src={logo} alt="" />
          </picture>

          <span className="divider">
            <label htmlFor="name">Nombres</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombres completos"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              required
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              required
            />
            <label htmlFor="phoneNumber">Numero de teléfono</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Celular"
              required
            />

            <input type="submit" id="submitBtn" value={"Registrarme"} />
          </span>
        </form>
      ) : (
        <h2>Ya ingresaste</h2>
      )}
    </>
  );
}