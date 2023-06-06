import { createContext , useState } from "react";

export const SHOPPINGCONTEXT = createContext(null); 

export const ShoppingCartProvider = ({children})=>{
    const [cart, setCart] = useState([]);

  return (
    <SHOPPINGCONTEXT.Provider value={[cart, setCart]}>
      {children}
    </SHOPPINGCONTEXT.Provider>
  );
}
