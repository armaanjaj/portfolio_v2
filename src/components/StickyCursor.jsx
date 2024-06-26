"use client";

import { useEffect } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";

const StickyCursor = () => {
    const { theme } = useTheme();

    const cursorSize = 15;

    const mouse = {
        x: useMotionValue(0),

        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 50, stiffness: 300, mass: 1 };

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),

        y: useSpring(mouse.y, smoothOptions),
    };

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;

        mouse.x.set(clientX - cursorSize / 2);

        mouse.y.set(clientY - cursorSize / 2);
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        };
    }, []);

    return (
        <div>
            <motion.div
                style={{
                    left: smoothMouse.x,

                    top: smoothMouse.y,
                }}
                className={`fixed w-40 h-40 ${theme === "dark" ? "bg-gray-500" : "bg-gray-600"} rounded-full pointer-events-none`}
            ></motion.div>
        </div>
    );
};

export default StickyCursor;
