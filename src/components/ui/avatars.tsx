"use client";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";

interface TooltipItem {
    id: number;
    name: string;
    image: ReactNode;
}

interface AnimatedTooltipProps {
    items: TooltipItem[];
}

export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ items }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    return (
        <>
            {items.map((item, idx) => (
                <div
                    key={item.name}
                    className="flex flex-row justify-center items-center !m-0 !p-0 object-top rounded-full h-12 w-12 border-2 bg-white bg-opacity-90 backdrop-blur-sm relative transition duration-500 z-[11]"
                >
                    <span className="">{item.image}</span>
                </div>
            ))}
        </>
    );
};
