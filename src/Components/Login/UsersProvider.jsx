import USERSCONTEXT from "./UsersContex";
import { useState, useEffect } from "react";

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userLogged, setUserLogged] = useState(null);
  let [error, setError] = useState(null);

  //! Get api from mockapi
  useEffect(() => {
    fetch("https://64715b536a9370d5a41a5328.mockapi.io/Users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error", error));
    /* return () => {
      setUsers([]);
    }; */
  }, []);

  const loginUser = (email, password) => {   
    let userFinded = users.find(
      (user) => user.email === email && user.password === password
    );   
    if(!userFinded){
      setError("Usuario o contrtaseña invalida"); 
      setUserLogged(null);
      return false;
    }
    setUserLogged(userFinded)
    console.log(userLogged)
  };

   /* const LOGOUT = () => {
    setUserLogged(null)
  } */

  const addUser = (name, email, password, phoneNumber) => {
    //Validaton if exist
    const userFinded = users.filter((user) => user.email === email);
    if (userFinded) {
      setError("Un usuario ya posee este correo o contraseña");
    } else {
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
        }),
      })
        .then((respuesta) => respuesta.json())
        .then((data) => {
          setUsers([...users, data]);
        })
        .catch((error) => console.error("Error", error));
    }
  };

  //TODO EDITAR DATOS
  //INGRESAR NOMBRE TELEFONO Y CORREO

  return (
    <USERSCONTEXT.Provider value={{ loginUser, addUser, userLogged }}>
      {children}
    </USERSCONTEXT.Provider>
  );
};
export default UsersProvider;
