import { useOutletContext } from "react-router-dom";

import CustomDialog from "@/components/CustomDialog";
import HeroCard from "@/components/HeroCard";
import Login from "./Login";
import HeroCircle from "@/components/HeroCircle";
import HeroFooter from "@/components/HeroFooter";

const Hero = () => {
  const { loginModal, handleLoginModalClose } = useOutletContext();
  return (
    <section className="w-full flex flex-col justify-center items-center gap-10 mt-60">
      <figure className="flex w-full justify-around items-center max-lg:mt-15">
        <HeroCard />
        <HeroCircle />
      </figure>
      <HeroFooter />
      <CustomDialog open={loginModal} onOpenChange={handleLoginModalClose}>
        <Login />
      </CustomDialog>
    </section>
  );
};

export default Hero;
