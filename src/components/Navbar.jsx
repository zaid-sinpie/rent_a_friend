import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = ({ setLoginModal }) => {
  function handleAuthBtns() {
    setLoginModal((prev) => !prev);
  }
  return (
    <NavigationMenu className="sm:min-w-full fixed top-0 left-0 py-4 px-4 flex justify-between items-center bg-[#FEFEFE] shadow z-10">
      <h1 className="text-[24px] cursor-pointer font-semibold flex justify-center items-center gap-2">
        <img src="/logo.png" alt="logo_image" className="h-7" />
        TOMO
      </h1>
      <nav>
        <NavigationMenuList className="flex justify-center items-center gap-4 p-0">
          <Button
            onClick={handleAuthBtns}
            variant={"outline"}
            className="py-2 px-4 rounded-sm text-black text-[12px] bg-transparent"
          >
            Log In
          </Button>
        </NavigationMenuList>
      </nav>
    </NavigationMenu>
  );
};

export default Navbar;
