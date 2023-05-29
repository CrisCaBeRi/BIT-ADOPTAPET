import USERSCONTEXT from "./UsersContex";
import { useState, useEffect } from "react";

const UsersProvider = ({ children }) => {
  let [users, setUsers] = useState([]);

  /* Get api from mockapi */
  useEffect(() => {
    const GETUSERS = () => {
      fetch("https://64715b536a9370d5a41a5328.mockapi.io/Users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error", error));
    };
    GETUSERS();
    //console.log(users);
    return () => {
      setUsers([]);
    };
  }, []);


//? ES NECESARIO MANEJAR LAS PETICIONES DESDE AQUI O SE PUEDEN DESDE CADA COMPONENTE 

  //Function to users validation
  const FETCHING = (userId) => {
    fetch(`https://64715b536a9370d5a41a5328.mockapi.io/Users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isOnline: true }),
    });
    alert("Sesion iniciada");
  };
  //! FIX TODO WORKING ENCONTRAR UNA FUNCION QUE NO REPITA LAS VALIDACIONES

  const loginUser = (email, password) => {
    //console.log(`llegaste, ${email}, ${password}`);
    users.find((findUser) =>
      findUser.email === email && findUser.password === password
        ? FETCHING(findUser.id)
        : alert("Usuario no encontrado")
    );
  };

  //TODO SEND NOTIFICATION FOR ADDUser complete
  // TODO VALIDATE IF USER EXIST
  const addUser = (name, email, password, phoneNumber, isOnline) => {
    fetch("https://64715b536a9370d5a41a5328.mockapi.io/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //multipart/form-data
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        isOnline: isOnline,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setUsers([...users, data]);
      })
      .catch((error) => console.error("Error", error));
  };




  return (
    <USERSCONTEXT.Provider value={{ loginUser, addUser }}>
      {children}
    </USERSCONTEXT.Provider>
  );
};

/*
const logoutUser = () => {

} */

export default UsersProvider;
