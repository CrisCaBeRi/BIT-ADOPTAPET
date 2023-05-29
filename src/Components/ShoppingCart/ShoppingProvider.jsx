import { useState } from "react";
import SHOPPINGCONTEXT from "./ShoppingContext";

const ShoppingProvider = ({ children }) => {
  let [cart, setCart] = useState([
    {
      id: 1,
      price: 15000,
      prTitle: "Concentrado mascotas",
      prDescription: "aaaaa",
    },
  ]);


  

  return (
    <SHOPPINGCONTEXT.Provider value={{}}>{children}</SHOPPINGCONTEXT.Provider>
  );
};

export default ShoppingProvider;
