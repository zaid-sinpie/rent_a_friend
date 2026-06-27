import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import FriendCard from "./components/FriendCard";
import CustomDialog from "./components/CustomDialog";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [loginModal, setLoginModal] = useState("");
  const [signupModal, setSignupModal] = useState("");

  function handleLoginModalClose() {
    setLoginModal((prev) => !prev);
  }
  function handleSignupModalClose() {
    setSignupModal((prev) => !prev);
  }

  return (
    <section className="w-screen h-screen max-lg:h-auto overflow-auto text-[#FDC3A1] bg-[#262931] flex items-center justify-center gap-10 max-lg:gap-0 max-lg:flex-col max-lg:justify-center max-lg:items-center relative">
      {/* <Navbar setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
      <HeroCard />
      <div className="lg:grid lg:grid-cols-2 md:gap-x-4 gap-y-4 justify-items-start max-lg:flex justify-center max-lg:w-full">
        <div className="flex lg:flex-col justify-center items-center md:gap-4 md:pt-10">
          <FriendCard />
          <FriendCard />
        </div>
        <div className="flex lg:flex-col justify-center items-end md:gap-4">
          <FriendCard />
          <FriendCard />
        </div>
      </div>
      <CustomDialog open={loginModal} onOpenChange={handleLoginModalClose}>
        <Login />
      </CustomDialog>
      <CustomDialog open={signupModal} onOpenChange={handleSignupModalClose}>
        signup modal
      </CustomDialog> */}
      <Signup />
    </section>
  );
}

export default App;
