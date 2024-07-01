import React, { useState } from "react";
import { roadmapData } from "../../data";

interface Roadmap {
    id: number;
    title: string;
    steps: string[];
}

const RoadmapOverlay = () => {
    const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(
        null
    );

    return (
        <div className="w-full flex flex-col justify-start items-start gap-5 relative h-full">
            <div className="flex flex-col items-start justify-start gap-5">
                <span className="font-bold uppercase text-3xl">
                    Skill Roadmaps
                </span>
                <div className="text-lg lg:text-xl">
                    Your guide to mastering new skills.
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-5 py-10">
                {/* Left Side - Roadmap Titles */}
                <div className="flex flex-col gap-4">
                    {roadmapData.map((roadmap) => (
                        <button
                            key={roadmap.id}
                            onClick={() => setSelectedRoadmap(roadmap)}
                            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md text-left w-full text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:text-white transition duration-300"
                        >
                            {roadmap.title}
                        </button>
                    ))}
                </div>
                {/* Right Side - Roadmap Details */}
                <div className="flex flex-col justify-center gap-5 items-center bg-white dark:bg-gray-900 rounded-lg p-5 shadow-lg w-full">
                    {selectedRoadmap ? (
                        <>
                            <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
                                {selectedRoadmap.title}
                            </h3>
                            <div className="w-full flex flex-col gap-4">
                                {selectedRoadmap.steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md"
                                    >
                                        <span className="text-gray-700 dark:text-gray-300">
                                            {step}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-gray-700 dark:text-gray-300">
                            Select a roadmap to view details
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RoadmapOverlay;
