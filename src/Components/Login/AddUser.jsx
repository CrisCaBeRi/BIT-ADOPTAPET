import { useContext } from "react";
import USERSCONTEXT from "./UsersContex"; 

export default function AddUser() {
    const {addUser} = useContext(USERSCONTEXT); 
    const newUser = (e) => {
        e.preventDefault(); 
        let {name, email, password, phoneNumber, isOnline} = e.target.elements; 
        addUser(name.value, email.value, password.value, phoneNumber.value, isOnline.value); 
        e.target.reset();
    }
    return (
        <form action="" onSubmit={newUser}>

            <input type="text" id="name" name="name" placeholder="Nombre" required/> <br /><br />

            <input type="email" id="email" name="email" placeholder="email" required/> <br /><br />

            <input type="password" id="password" name="password" placeholder="Contraseña" required/> <br /><br />

            <input type="text" id="phoneNumber" name="phoneNumber"  placeholder="Telefono" required/> <br /><br />

            <input type="hidden" id="isOnline" name="isOnline" value={true}/>
            <input type="submit" /> <br /><br /><br />
        </form>
    )

}
