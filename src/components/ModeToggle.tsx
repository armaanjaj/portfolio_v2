import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { MdSunny } from "react-icons/md";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    const handleToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleVariants = {
        initial: {
            scale: 0.5,
            rotate: 90,
            opacity: 0,
        },
        animate: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 700,
                damping: 30,
            },
        },
        exit: {
            scale: 0.5,
            rotate: -90,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div
            className="p-2 rounded-full w-12 h-12 flex items-center justify-center bg-gray-400 dark:bg-gray-700 shadow-md cursor-pointer"
            onClick={handleToggle}
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.div
                        key="light"
                        variants={toggleVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <MdSunny className="text-yellow-500 w-8 h-8" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dark"
                        variants={toggleVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <WiMoonWaxingCrescent3 className="text-gray-100 rotate-45 -translate-x-[2px] -translate-y-[2px] w-8 h-8" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
