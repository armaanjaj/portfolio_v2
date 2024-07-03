import Link from "next/link";
import React from "react";
import { navLinks } from "../../../data/index";
import { cn } from "@/utils/cn";
import Logo from "../Logo";
import { useOverlay } from "@/context/OverlayContext";
import { IoIosDownload } from "react-icons/io";
import { overlayMapping } from "../overlayMapping";
import GitHubInfo from "./GitHubInfo";

const Navbar = () => {
    const { showOverlay, setOverlayContent } = useOverlay();

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        navItem: any
    ) => {
        e.preventDefault();
        const contentKey = navItem.id;
        console.log(contentKey);
        const overlayComponent = overlayMapping[contentKey];
        if (overlayComponent) {
            setOverlayContent(overlayComponent);
            showOverlay();
        }
    };

    return (
        <header className="h-full w-full relative p-0 overflow-hidden hidden lg:block">
            <div className="flex flex-col justify-evenly items-center h-full py-5 px-3">
                <div className="h-1/5 text-gray-700 dark:text-neutral-50 text-xl whitespace-nowrap font-bold">
                    <Logo />
                </div>
                <div className="flex flex-col space-y-4">
                    <a
                        href="mailto:armaansjaj0129@gmail.com"
                        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 text-center"
                    >
                        <span className="text-sm">Hire Me</span>
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full flex flex-row flex-nowrap items-center justify-between gap-2 transition duration-300 text-center w-full"
                    >
                        <IoIosDownload className="text-xl" />
                        <span className="text-sm">Download CV</span>
                    </a>
                </div>
                <nav className="h-3/5 flex flex-col justify-center items-start gap-2">
                    {navLinks.map((navItem: any, idx: number) => (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            onClick={(e) => handleClick(e, navItem)}
                            className={cn(
                                "dark:text-neutral-50 text-base items-center flex space-x-1 text-gray-700 dark:hover:text-purple-500 hover:text-purple-700 hover:-translate-x-2 transition-transform duration-300 gap-2 py-1 w-full"
                            )}
                        >
                            <span className="!cursor-pointer">
                                {navItem.name}
                            </span>
                        </Link>
                    ))}
                </nav>
                <div className="w-full">
                    <GitHubInfo />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
