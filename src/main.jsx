import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { ROUTER } from "./Routes";
import UsersProvider from "./Components/Login/UsersProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  //TODOGET THE PROVIDER FOR THE CART
  <UsersProvider>
    <React.StrictMode>
      <RouterProvider router={ROUTER} />
    </React.StrictMode>
  </UsersProvider>
);
