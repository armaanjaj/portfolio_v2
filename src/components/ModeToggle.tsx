"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MdSunny } from "react-icons/md";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";
import { useEffect, useState } from "react";

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
            className="relative h-12 w-12 flex items-center justify-center bg-gray-900 dark:bg-white rounded-full cursor-pointer text-2xl"
            onClick={handleToggle}
        >
            <motion.div
                key={theme}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {theme === "dark" ? (
                    <MdSunny className="text-yellow-500" />
                ) : (
                    <WiMoonWaxingCrescent3 className="text-gray-100 -ml-1 -mt-1 rotate-45" />
                )}
            </motion.div>
        </div>
    );
}
