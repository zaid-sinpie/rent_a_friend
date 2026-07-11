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
    <NavigationMenu className="sm:min-w-full fixed top-0 left-0 py-2 px-4 flex justify-between items-center">
      <h1 className="text-[24px] cursor-pointer font-semibold">TOMO</h1>
      <nav>
        <NavigationMenuList className="flex justify-center items-center gap-4 p-0">
          <Button
            onClick={handleAuthBtns}
            variant={"link"}
            className="uppercase"
          >
            Login
          </Button>
        </NavigationMenuList>
      </nav>
    </NavigationMenu>
  );
};

export default Navbar;
