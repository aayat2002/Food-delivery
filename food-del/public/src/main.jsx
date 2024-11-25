import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./components/context/StoreContext.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
      <Navbar />
    </StoreContextProvider>
  </BrowserRouter>
);
