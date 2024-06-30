import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { skills } from "../../data";

const Skills = () => {
    const controls = useAnimation();
    const [currentSection, setCurrentSection] = React.useState(0);

    const cycleAnimation = async () => {
        while (true) {
            await controls.start({
                y: -window.innerHeight,
                opacity: [1, 1, 0],
                transition: {
                    duration: 1,
                    ease: "linear",
                },
            });

            setCurrentSection(
                (prevSection) => (prevSection + 1) % skills.length
            );

            controls.set({
                y: window.innerHeight,
                opacity: 0,
            });

            await controls.start({
                y: 0,
                opacity: [0, 1],
                transition: {
                    duration: 1,
                    ease: "linear",
                },
            });

            await new Promise((resolve) => setTimeout(resolve, 1500));
        }
    };

    useEffect(() => {
        cycleAnimation();
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden flex items-center z-[2] cursor-default">
            {skills.map((section, sectionIndex) => (
                <motion.div
                    key={section.sectionId}
                    className={`absolute top-0 w-full h-full flex flex-col items-center justify-center py-2 px-4 ${
                        sectionIndex === currentSection ? "block" : "hidden"
                    }`}
                    animate={controls}
                    initial={{ y: 0, opacity: 1 }}
                >
                    <h2 className="absolute z-0 top-0 left-0 w-full h-full text-8xl text-white opacity-10 uppercase flex items-center justify-center">
                        {section.sectionTitle}
                    </h2>
                    <div className="flex flex-row justify-start items-center flex-nowrap">
                        {section.content.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center px-3 py-2 gap-3 bg-gray-500 bg-opacity-30 backdrop-blur-sm rounded-md border border-gray-600 h-8 w-fit mx-2"
                            >
                                <item.logo />
                                <span className="text-white whitespace-nowrap">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
            <div className="absolute -right-2 -bottom-4 text-4xl z-0 text-white opacity-60 font-bold">
                <span>SKILLS</span>
            </div>
        </div>
    );
};

export default Skills;
