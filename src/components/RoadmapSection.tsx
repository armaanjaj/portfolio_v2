import React from "react";
import { FaBrain } from "react-icons/fa";
import { useOverlay } from "@/context/OverlayContext";

const RoadmapSection = () => {
    const { showOverlay, setOverlayContent } = useOverlay();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        setOverlayContent(7);
        showOverlay();
    };

    return (
        <div
            onClick={handleClick}
            className="relative p-6 bg-gradient-to-r from-blue-500 to-green-500 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-md w-full h-full max-w-md cursor-pointer transform transition-transform hover:scale-105"
        >
            <div className="flex flex-col justify-center items-center h-full w-full text-center text-white">
                <FaBrain className="text-6xl mb-4" />
                <h2 className="font-bold text-2xl lg:text-3xl">
                    Learn a New Skill
                </h2>
                <p className="text-lg lg:text-xl mt-2">
                    Explore roadmaps to master new skills
                </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400 to-green-800 opacity-0 hover:opacity-25 transition-opacity duration-300"></div>
        </div>
    );
};

export default RoadmapSection;
