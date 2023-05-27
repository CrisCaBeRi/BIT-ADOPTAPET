import USERSCONTEXT from "./UsersContex";
import { useState, useEffect } from "react";

const UsersProvider = ({ children }) => {
    
    const [users, setUsers] = useState([])

    /* Get api from mockapi */
    useEffect(() => {
        const GETUSERS = () => {
            fetch("https://64715b536a9370d5a41a5328.mockapi.io/Users")
                .then((response) => response.json())
                .then((data) => setUsers(data))
                .catch((error) => console.error("Error", error))
        };

        GETUSERS();
        console.log(users)
        /* return () => { setUsers([]) } */
    }, [])

    const loginUser = (email, password) => {
        //event.preventDefault();
        //let { email, password } = event.target.elements;
        for (let i = 0; i < users.length; i++) {
            const element = users[i];

            if (users.email[i] == email && users.password[i] == password) {
                fetch(`https://64715b536a9370d5a41a5328.mockapi.io/Users/:${users[i].id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ isOnline: true })
                })
                alert("Iniciaste sesion")
            }
        }

    }

    const addUser = (name, email, password, phoneNumber, isOnline) => {
        fetch("https://64715b536a9370d5a41a5328.mockapi.io/Users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", //multipart/form-data
            },
            body: JSON.stringify({name:name, email:email, password:password, phoneNumber:phoneNumber, isOnline:isOnline  }), // FormData()
        })
            .then((respuesta) => respuesta.json())
            .then((data) => {
                setUsers([...users, data]);
                evento.target.reset();
            })
            .catch((error) => console.error("Error", error));
    };


    return (
        <USERSCONTEXT.Provider value={{ loginUser, addUser }}>
            {children}
        </USERSCONTEXT.Provider>
    )
}




/* const deleteUser = (id) => {

}
const logoutUser = () => {

} */


export default UsersProvider; 