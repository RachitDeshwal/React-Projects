import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Username from "./components/username.jsx";

function App() {
  return (
    <UserContextProvider>
      <Login></Login>
      <Username></Username>
    </UserContextProvider>
  );
}

export default App;
