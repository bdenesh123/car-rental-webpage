import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4  bg-transparent">
      <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-green-200">
        SewaCar
      </h1>

      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="rounded-full bg-white text-green-700 min-w-[130px] px-6 py-3 hover:bg-gray-100 transition"
        textStyles="font-bold"
      />
    </nav>
  </header>
);

export default NavBar;
