import UsersProvider from "./UsersProvider";

import AddUser from "./AddUser";
import LoginUsers from "./LoginUsers";
import  {Header}  from "../Header/Header";

//import LoginUsers from "./LoginUsers";
const AppUsers = () => {
  return (
    <>
      <UsersProvider>        
        <Header/>
        <AddUser /> 
        <LoginUsers/>
      </UsersProvider>
    </>
  );
};
export default AppUsers;
