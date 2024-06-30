"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MdOutlineStar, MdSunny } from "react-icons/md";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";
import { useEffect, useState } from "react";
import { FaCloud } from "react-icons/fa6";

export default function ModeToggle() {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    if (!isMounted) return null;

    return (
        <div
            className="relative h-12 w-12 flex items-center justify-center bg-gray-900 dark:bg-blue-500 rounded-full cursor-pointer text-2xl overflow-hidden"
            onClick={handleToggle}
        >
            <StyledIcons type={theme} />
        </div>
    );
}

const StyledIcons = ({ type }: { type: string | undefined }) => {
    if (type === "dark") {
        return (
            <>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <MdSunny className="text-yellow-500 text-3xl" />
                </motion.div>
                <motion.div
                    initial={{ x: -25, y: -10, opacity: 0 }}
                    animate={{ x: -40, y: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaCloud className="absolute text-white" />
                </motion.div>
            </>
        );
    }
    if (type === "light") {
        return (
            <>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <WiMoonWaxingCrescent3 className="text-gray-100 -ml-1 -mt-1 rotate-45" />
                </motion.div>
                <motion.div
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: -24, y: 15, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <MdOutlineStar className="absolute text-yellow-500 text-sm" />
                </motion.div>
                <motion.div
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: -36, y: -14, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <MdOutlineStar className="absolute text-yellow-500 text-sm" />
                </motion.div>
                <motion.div
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: 15, y: -25, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <MdOutlineStar className="absolute text-yellow-500 text-sm top-1 right-1" />
                </motion.div>
            </>
        );
    }
};
