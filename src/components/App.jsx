import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./home/NavBar";

const App = () => {
  const [menu, setMenu] = useState(false);

  const functionMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <NavBar open={menu} change={setMenu} functionOpen={functionMenu} />
      <Outlet />
    </>
  );
};

export default App;