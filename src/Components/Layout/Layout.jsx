import { Header } from "./Header/Header";
import "../../Styles/App.css"
//TODO IMPORT FOOTER

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>      
    </>
  );
};


