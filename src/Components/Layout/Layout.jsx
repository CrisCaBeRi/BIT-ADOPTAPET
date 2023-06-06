import { Header } from "./Header/Header";
import "../../Styles/App.css"
import { Footer } from "./Footer/Footer";
//TODO IMPORT FOOTER

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>      
    </>
  );
};


