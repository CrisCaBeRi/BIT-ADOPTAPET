import UsersProvider from "./UsersProvider";

import AddUser from "./AddUser";

//import LoginUsers from "./LoginUsers";
const AppUsers = () => {
  return (
    <>
      <UsersProvider>
        <AddUser /> 
        {/* <LoginUsers/> */}


      </UsersProvider>
    </>
  );
};
export default AppUsers;
