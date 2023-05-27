import { useContext } from "react";
import USERSCONTEXT from "./UsersContex"; 

export default function LoginUsers() {
    const {LoginUsers} = useContext(USERSCONTEXT); 

    const validateUser = (event) =>{
        console.log(email,password)
        event.preventDefault(); 
        let {email, password} = event.target.elements; 
        LoginUsers(email.value, password.value)
    }

    return (
        <form action="#" onSubmit={validateUser}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Ingresa tu correo" required/>
            <br />
            <label htmlFor="name">Contraseña</label>
            <input type="password" id="password" required/>            
            <br />
            <input type="submit" />            
        </form>
    )


}