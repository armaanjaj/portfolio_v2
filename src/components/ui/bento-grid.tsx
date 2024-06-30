import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Navbar from "../Navbar";
import Location from "../Location";
import SocialMedia from "../SocialMedia";
import Newsletter from "../Newsletter";
import { DynamicProjectsCard } from "../DynamicProjectsCard";
import { Meteors } from "./meteors";
import Skills from "../Skills";
import AboutMe from "../AboutMe";

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
                "grid overflow-x-hidden overflow-y-auto grid-cols-1 gap-6 max-w-7xl mx-auto p-5 h-full md:grid-cols-6 md:grid-rows-5 md:overflow-hidden",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    id,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
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

    if (id === 1) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none dark:bg-[#0D1117] dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-center items-center dark:text-white text-gray-900 z-0 w-full h-full overflow-hidden",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <AboutMe />
            </div>
        );
    }
    if (id === 4) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none p-4 dark:bg-[#0D1117] dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-center items-center",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <Navbar />
            </div>
        );
    }
    if (id === 3) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none w-full h-full dark:bg-[#0D1117] dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-center items-center overflow-hidden",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <Location />
            </div>
        );
    }
    if (id === 5) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none w-full h-full  dark:border-white/[0.2] border border-transparent flex flex-col justify-center items-center overflow-hidden bg-gray-900 z-0",
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
    if (id === 7) {
        return (
            <div
                className={cn(
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none w-full h-full  dark:border-white/[0.2] border border-transparent flex flex-col justify-center items-center overflow-hidden",
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
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none w-full h-full dark:bg-[#0D1117] dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-center items-center overflow-hidden",
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
                    "relative rounded-xl transition shadow-sm duration-700 dark:shadow-none w-full h-full dark:border-white/[0.2] border border-transparent flex flex-col justify-center items-center overflow-hidden",
                    getGridColumn(id),
                    getGridRow(id),
                    className
                )}
            >
                <Newsletter />
            </div>
        );
    }
    return (
        <div
            className={cn(
                "relative rounded-xl group/bento transition shadow-sm duration-700 dark:shadow-none p-4 dark:bg-[#0D1117] dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col",
                getGridColumn(id),
                getGridRow(id),
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};
