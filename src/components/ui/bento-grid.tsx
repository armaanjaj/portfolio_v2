import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Navbar from "../Navbar/Navbar";
import Location from "../Location";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import { DynamicProjectsCard } from "@/components/Project/DynamicProjectsCard";
import { Meteors } from "./meteors";
import Skills from "@/components/Skills/Skills";
import AboutMe from "../About/AboutMe";
import ViewerCounter from "@/components/ViewerCounter/ViewerCounter";
import BlogsSection from "../Blog/BlogsSection";
import RoadmapSection from "../Roadmap/RoadmapSection";
import ModeToggle from "../ModeToggle";
import Logo from "../Logo";
import Link from "next/link";
import { navLinks } from "../../../data";
import { useOverlay } from "@/context/OverlayContext";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-4 xl:gap-4 2xl:gap-6 w-[95vw] h-full lg:w-[75vw] lg:max-h-dvh xl:w-[80vw] xl:h-[80vh] 2xl:w-[85vw] 2xl:h-[85vh] mx-auto px-5 md:grid-cols-6 md:grid-rows-5 md:overflow-hidden py-10 lg:py-0",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
}: {
    className?: string;
    id: number;
}) => {
    const getGridColumn = (id: number) => {
        switch (id) {
            case 1:
                return "md:col-span-2";
            case 2:
                return "md:col-span-2";
            case 3:
                return "md:col-span-1";
            case 4:
                return "md:col-span-1";
            case 5:
                return "md:col-span-4";
            case 6:
                return "md:col-span-1";
            case 7:
                return "md:col-span-2";
            case 8:
                return "md:col-span-1";
            case 9:
                return "md:col-span-2";
            default:
                return "md:col-span-1";
        }
    };

    const getGridRow = (id: number) => {
        switch (id) {
            case 1:
                return "md:row-span-2";
            case 2:
                return "md:row-span-2";
            case 3:
                return "md:row-span-2";
            case 4:
                return "md:row-span-5";
            case 5:
                return "md:row-span-1";
            case 6:
                return "md:row-span-1";
            case 7:
                return "md:row-span-2";
            case 8:
                return "md:row-span-2";
            case 9:
                return "md:row-span-2";
            default:
                return "md:row-span-1";
        }
    };

    const { showOverlay, setOverlayContent } = useOverlay();

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        navItem: any
    ) => {
        e.preventDefault();
        setOverlayContent(navItem.id);
        showOverlay();
    };

    if (id === 1) {
        return (
            <>
                <div
                    className={cn(
                        "relative sm:hidden rounded-xl transition shadow-sm duration-700 dark:shadow-none h-52 w-full lg:h-full dark:border-white/[0.2] border border-transparent flex flex-col justify-center items-center gap-10 overflow-hidden bg-gray-900 z-0 dark:text-white text-gray-900",
                        getGridColumn(id),
                        getGridRow(id),
                        className
                    )}
                >
                    <Logo />
                    <div className="flex flex-row justify-center items-center w-full gap-10">
                        {navLinks.map((navItem: any, idx: number) => (
                            <Link
                                key={`link=${idx}`}
                                href={navItem.link}
                                onClick={(e) => handleClick(e, navItem)}
                                className={cn(
                                    "dark:text-neutral-50 text-base text-gray-300"
                                )}
                            >
                                {navItem.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div
                    className={cn(
                        "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none dark:bg-[#0D1117] dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-center items-center dark:text-white text-gray-900 z-0 h-52 w-full lg:h-full overflow-hidden",
                        getGridColumn(id),
                        getGridRow(id),
                        className
                    )}
                >
                    <AboutMe />
                </div>
            </>
        );
    }
    if (id === 2) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none dark:bg-[#0D1117] dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-center items-center dark:text-white text-gray-900 z-0 h-52 w-full lg:h-full overflow-hidden",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <BlogsSection />
            </div>
        );
    }
    if (id === 3) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none h-52 w-full lg:h-full dark:bg-[#0D1117] dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-center items-center overflow-hidden",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <Location />
            </div>
        );
    }
    if (id === 4) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none dark:bg-[#0D1117] dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-center items-center",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <Navbar />
                <div className="lg:hidden py-10">
                    <ModeToggle />
                </div>
            </div>
        );
    }
    if (id === 5) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none h-52 w-full lg:h-full dark:border-white/[0.2] border border-transparent flex flex-col justify-center items-center overflow-hidden bg-gray-900 z-0",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <Skills />
                <Meteors className="z-[1]" number={20} />
            </div>
        );
    }
    if (id === 6) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none h-52 w-full lg:h-full dark:border-white/[0.2] border border-transparent flex flex-col justify-center items-center overflow-hidden bg-gray-900 z-0 dark:text-white text-gray-900",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <ViewerCounter />
            </div>
        );
    }
    if (id === 7) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none h-52 w-full lg:h-full dark:border-white/[0.2] border border-transparent flex flex-col justify-center items-center overflow-hidden",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <DynamicProjectsCard />
            </div>
        );
    }
    if (id === 8) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none h-52 w-full lg:h-full dark:bg-[#0D1117] dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-center items-center overflow-hidden",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <SocialMedia />
            </div>
        );
    }
    if (id === 9) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none h-52 w-full lg:h-full dark:border-white/[0.2] border border-transparent flex flex-col justify-center items-center overflow-hidden",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <RoadmapSection />
            </div>
        );
    }

    return (
        <div
            className={cn(
                "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none h-52 w-full lg:h-full dark:border-white/[0.2] border border-transparent flex flex-col justify-center items-center overflow-hidden bg-gray-900 z-0 dark:text-white text-gray-900",
                getGridColumn(id),
                getGridRow(id),
                className
            )}
        >
            <Logo />
        </div>
    );
};
