import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { skills } from "../../data";

const useSkillsAnimation = () => {
    const controls = useAnimation();
    const textControls = useAnimation();
    const [currentSection, setCurrentSection] = useState(0);

    const cycleAnimation = async () => {
        while (true) {
            await new Promise((resolve) => setTimeout(resolve, 2500));

            await textControls.start({
                opacity: 0,
                transition: {
                    duration: 0.5,
                    ease: "linear",
                },
            });

            await controls.start({
                y: -window.innerHeight,
                opacity: [1, 1, 0],
                transition: {
                    duration: 0.5,
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
            textControls.set({
                opacity: 0,
            });

            await controls.start({
                y: 0,
                opacity: [0, 1],
                transition: {
                    duration: 0.5,
                    ease: "linear",
                },
            });

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
    }, [cycleAnimation]);

    return { controls, textControls, currentSection };
};

export default useSkillsAnimation;
