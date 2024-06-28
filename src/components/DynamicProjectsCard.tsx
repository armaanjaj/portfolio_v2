import React, { useState, useEffect } from "react";
import { ProjectsCard } from "./ProjectsCard";
import { projects } from "../../data/index";
import { motion, AnimatePresence } from "framer-motion";

const transitionVariants = {
    initial: { opacity: 0},
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};

export function DynamicProjectsCard() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProjectIndex(
                (prevIndex) => (prevIndex + 1) % projects.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full relative overflow-hidden bg-gray-900">
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
            <div className="absolute bottom-0 left-0 right-0 w-full h-20 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
        </div>
    );
}
