import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { skills } from "../../data";

const Skills = () => {
    const controls = useAnimation();
    const textControls = useAnimation();
    const [currentSection, setCurrentSection] = React.useState(0);

    const cycleAnimation = async () => {
        while (true) {
            // Show content for 2.5 seconds
            await new Promise((resolve) => setTimeout(resolve, 2500));

            // Animate text out first
            await textControls.start({
                opacity: 0,
                transition: {
                    duration: 0.5,
                    ease: "linear",
                },
            });

            // Animate icons out after text
            await controls.start({
                y: -window.innerHeight,
                opacity: [1, 1, 0],
                transition: {
                    duration: 0.5,
                    ease: "linear",
                },
            });

            // Set next section
            setCurrentSection(
                (prevSection) => (prevSection + 1) % skills.length
            );

            // Move to the next section with both hidden
            controls.set({
                y: window.innerHeight,
                opacity: 0,
            });
            textControls.set({
                opacity: 0,
            });

            // Animate icons in first
            await controls.start({
                y: 0,
                opacity: [0, 1],
                transition: {
                    duration: 0.5,
                    ease: "linear",
                },
            });

            // Animate text in after icons
            await textControls.start({
                opacity: 0.1,
                transition: {
                    duration: 0.5,
                    ease: "linear",
                },
            });

            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    };

    useEffect(() => {
        cycleAnimation();
    }, []);

    return (
        <div
            className="relative w-full h-full overflow-hidden flex items-center z-[2] cursor-default select-none"
            onContextMenu={(event: any) => {
                event.preventDefault();
            }}
        >
            {skills.map((section, sectionIndex) => (
                <motion.div
                    key={section.sectionId}
                    className={`absolute top-0 w-full h-full flex flex-col items-center justify-center py-2 px-4 ${
                        sectionIndex === currentSection ? "block" : "hidden"
                    }`}
                    animate={controls}
                    initial={{ y: 0, opacity: 1 }}
                >
                    <motion.h2
                        className="absolute z-0 top-0 left-0 w-full h-full text-8xl text-white opacity-10 uppercase flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={textControls}
                    >
                        {section.sectionTitle}
                    </motion.h2>
                    <div className="flex flex-row justify-center items-center flex-wrap gap-2">
                        {section.content.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "linear",
                                }}
                                className="flex items-center px-3 py-2 gap-3 bg-gray-500 bg-opacity-30 backdrop-blur-sm rounded-md border border-gray-600 h-8 w-fit mx-2"
                            >
                                <item.logo />
                                <span className="text-white whitespace-nowrap">
                                    {item.title}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
            <div className="absolute -right-2 -bottom-4 text-4xl z-0 text-white opacity-60 font-bold uppercase">
                <span>I have worked with</span>
            </div>
        </div>
    );
};

export default Skills;
