import { useContext } from "react";
import USERSCONTEXT from "./UsersContex"; 

export default function AddUser() {
    const {AddUser} = useContext(USERSCONTEXT); 




    const newUser = (e) => {
        e.preventDefault(); 
        let {name, email, password, phoneNumber, isOnline} = e.target.elements; 
        AddUser(name.value, email.value, password.value, phoneNumber.value, isOnline.value); 
        e.target.reset; 
        //console.log(name.value, email.value, password.value, phoneNumber.value, isOnline.value)



    }

    return (
        <form action="" onSubmit={newUser}>

            <input type="text" id="name" name="name" placeholder="Nombre"/> <br /><br />

            <input type="email" id="email" name="email" placeholder="email"/> <br /><br />

            <input type="password" id="password" name="password" placeholder="Contraseña"/> <br /><br />

            <input type="text" id="phoneNumber" name="phoneNumber"  placeholder="Telefono"/> <br /><br />

            <input type="hidden" id="isOnline" name="isOnline" value={true}/>
            <input type="submit" /> <br /><br /><br />
        </form>
    )

}
