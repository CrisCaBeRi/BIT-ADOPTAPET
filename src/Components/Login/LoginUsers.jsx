import { useContext } from "react";
import USERSCONTEXT from "./UsersContex";
import "./LoginStyles/formStyles.css"

export default function LoginUsers() {
  const { loginUser } = useContext(USERSCONTEXT);

  const validateUser = (event) => {    
    event.preventDefault();    
    let { email, password } = event.target.elements;
    //console.log(email.value, password.value)
    loginUser(email.value, password.value);
  };

  return (
    <form action="#" onSubmit={validateUser}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Ingresa tu correo"
        required
      />
      <br />

      <label htmlFor="name">Contraseña</label>
      <input type="password" id="password" required name="password" />
      <br />
      <input type="submit" />
    </form>
  );
}
