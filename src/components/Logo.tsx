import React from "react";
import { Aclonica } from "next/font/google";
import { GiEagleHead } from "react-icons/gi";

const AclonicaFont = Aclonica({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    preload: true,
});

const Logo = () => {
    return (
        <div aria-label="Armaan" className={`${AclonicaFont.className} relative select-none text-gray-800 dark:text-white`}>
            <span className="flex flex-row justify-center items-center flex-nowrap whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">a{""}<GiEagleHead className="text-red-500" />{""}maan</span>
        </div>
    );
};

export default Logo;
