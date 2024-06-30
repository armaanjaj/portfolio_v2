import React from "react";
import { navLinks } from "../../data/index";
import Link from "next/link";
import { cn } from "@/utils/cn";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
    return (
        <header className="h-full w-full relative p-0">
            <div className="flex flex-col justify-evenly items-center h-full py-5 px-3">
                <div className="h-1/5 text-gray-700 dark:text-neutral-50 text-xl whitespace-nowrap font-bold px-3 py-2">
                    armaan codes
                </div>
                <nav className="h-3/5 flex flex-col justify-center items-start gap-2">
                    {navLinks.map((navItem: any, idx: number) => (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "dark:text-neutral-50 text-base items-center flex space-x-1 text-gray-700 dark:hover:text-purple-500 hover:text-purple-700 hover:-translate-x-2 transition-transform duration-200 gap-2 py-1"
                            )}
                        >
                            {/* <span className="block scale-125">
                                <navItem.icon/>
                            </span> */}
                            <span className="!cursor-pointer">
                                {navItem.name}
                            </span>
                        </Link>
                    ))}
                </nav>
                <div className="h-1/5 flex flex-col justify-center items-center">
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
