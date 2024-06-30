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
            <span className="flex flex-row justify-center items-center flex-nowrap whitespace-nowrap">a{""}<GiEagleHead />{""}maan</span>
        </div>
    );
};

export default Logo;
