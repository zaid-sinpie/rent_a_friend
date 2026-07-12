import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  const [loginModal, setLoginModal] = useState("");

  function handleLoginModalClose() {
    setLoginModal((prev) => !prev);
  }
  return (
    <div className="w-screen h-screen max-lg:h-auto overflow-auto text-black bg-white flex items-center justify-center gap-10 max-lg:gap-0 max-lg:flex-col max-lg:justify-center max-lg:items-center relative py-10">
      <Navbar setLoginModal={setLoginModal} />
      <Outlet
        context={{
          loginModal,
          handleLoginModalClose,
        }}
      />
    </div>
  );
}

export default App;
