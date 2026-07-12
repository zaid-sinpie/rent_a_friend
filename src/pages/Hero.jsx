import { useOutletContext } from "react-router-dom";

import CustomDialog from "@/components/CustomDialog";
import FriendCard from "@/components/FriendCard";
import HeroCard from "@/components/HeroCard";
import Login from "./Login";

const Hero = () => {
  const { loginModal, handleLoginModalClose } = useOutletContext();
  return (
    <>
      <HeroCard />
      {/* <div className="lg:grid lg:grid-cols-2 md:gap-x-4 gap-y-4 justify-items-start max-lg:flex justify-center max-lg:w-full">
        <div className="flex lg:flex-col justify-center items-center md:gap-4 md:pt-10">
          <FriendCard />
          <FriendCard />
        </div>
        <div className="flex lg:flex-col justify-center items-end md:gap-4">
          <FriendCard />
          <FriendCard />
        </div>
      </div> */}
      <CustomDialog open={loginModal} onOpenChange={handleLoginModalClose}>
        <Login />
      </CustomDialog>
    </>
  );
};

export default Hero;
