import React, { useState, useEffect } from "react";
import { ProjectsCard } from "./ProjectsCard";
import { projects } from "../../data/index";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const transitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};

export function DynamicProjectsCard() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isTabActive, setIsTabActive] = useState(true);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                setIsTabActive(false);
            } else {
                setIsTabActive(true);
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, []);

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;
        if (isTabActive) {
            interval = setInterval(() => {
                setCurrentProjectIndex(
                    (prevIndex) => (prevIndex + 1) % projects.length
                );
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isTabActive]);

    return (
        <div
            className="w-full h-full relative overflow-hidden"
            style={{
                backgroundColor: projects[currentProjectIndex].colors[0],
            }}
        >
            <div className="group pl-1 w-[2.5rem] h-[2.5rem] flex flex-row items-center justify-start gap-2 rounded-full z-[11] absolute top-2 left-2 bg-white text-gray-400 border-2 overflow-hidden transition-all duration-300">
                <IoIosArrowRoundForward className="text-3xl" />
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={projects[currentProjectIndex].id}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={transitionVariants}
                    className="w-full h-full relative"
                >
                    <ProjectsCard project={projects[currentProjectIndex]} />
                </motion.div>
            </AnimatePresence>
            <div
                className="absolute bottom-0 left-0 right-0 w-full h-12 opacity-60 z-10"
                style={{
                    background: `linear-gradient(to top, ${projects[currentProjectIndex].colors[0]}, transparent)`,
                }}
            />
        </div>
    );
}
