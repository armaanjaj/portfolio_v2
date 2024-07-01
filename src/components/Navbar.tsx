import Link from "next/link";
import React from "react";
import { navLinks } from "../../data/index";
import { cn } from "@/utils/cn";
import ModeToggle from "./ModeToggle";
import { FiGitBranch } from "react-icons/fi";
import { RiStarSLine } from "react-icons/ri";
import { SocialGitHubIcon } from "@/utils/icons";
import Logo from "./Logo";
import { useOverlay } from "@/context/OverlayContext";
import { IoIosDownload } from "react-icons/io";

const Navbar = () => {
    const { showOverlay, setOverlayContent } = useOverlay();

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        navItem: any
    ) => {
        e.preventDefault();
        setOverlayContent(navItem.id);
        showOverlay();
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
                        Hire Me
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 transition duration-300 text-center"
                    >
                        <IoIosDownload className="text-xl" />
                        Download CV
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
                <div className="h-1/5 flex flex-col justify-center items-center">
                    <ModeToggle />
                </div>
            </div>
            <div className="absolute bottom-1 left-0 w-full z-10">
                <ProjectGitHub />
            </div>
        </header>
    );
};

const ProjectGitHub = () => {
    const [data, setData] = React.useState({ stars: 0, forks: 0 });
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const response = await fetch("/api/githubRepo", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        owner: "armaanjaj",
                        repo: "portfolio_v2",
                    }),
                });
                const result = await response.json();
                setData({ stars: result.stars, forks: result.forks });
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    if (loading) {
        return (
            <div className="w-full flex flex-row justify-center items-center">
                <Loader />;
            </div>
        );
    }

    return (
        <Link
            href={"https://www.github.com/armaanjaj/portfolio_v2"}
            target="_blank"
            className="w-full text-center flex flex-row justify-center items-center gap-4 text-gray-900 dark:text-neutral-50 hover:text-purple-700 dark:hover:text-purple-500 transition-colors duration-300"
        >
            <div className="flex flex-row justify-center items-center flex-nowrap gap-0">
                <RiStarSLine className="text-base" />
                <span className="text-base">{data.stars}</span>
            </div>
            <div className="flex flex-row justify-center items-center flex-nowrap gap-0">
                <FiGitBranch className="text-base" />{" "}
                <span className="text-base">{data.forks}</span>
            </div>
            <SocialGitHubIcon className="text-xl" />
        </Link>
    );
};

const Loader = () => (
    <svg
        className="animate-spin h-5 w-5 text-green-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        ></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
        ></path>
    </svg>
);

export default Navbar;
