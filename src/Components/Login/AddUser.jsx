import { useContext } from "react";
import USERSCONTEXT from "./UsersContex";
import "./LoginStyles/formStyles.css";

import logo from "../Assets/LogoWhite.svg";

export default function AddUser() {
  const { addUser } = useContext(USERSCONTEXT);
  const newUser = (e) => {
    e.preventDefault();
    let { name, email, password, phoneNumber } = e.target.elements;
    addUser(name.value, email.value, password.value, phoneNumber.value);
    e.target.reset();
  };
  return (
    <form action="" onSubmit={newUser}>
      <h3>Registro</h3>
      <picture>
        <img src={logo} alt="" />
      </picture>

      <span className="divider">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombres completos"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Telefono"
          required
        />

        <input type="submit" id="submitBtn" />
      </span>
    </form>
  );
}
