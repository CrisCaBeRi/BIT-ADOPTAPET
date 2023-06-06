import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { Info } from "./Pages/Info";
import { Adopt } from "./Pages/Adopt";
import { Help } from "./Pages/Help";
import { Cart } from "./Pages/Cart";
import { Register } from "./Pages/Register";
import App from "./Components/App";
import { Login } from "./Pages/Login";

export const ROUTER = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/info", element: <Info /> },
  { path: "/adopt", element: <Adopt /> },
  { path: "/help", element: <Help /> },
  { path: "/cart", element: <Cart /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/", element: <App /> },
]);
