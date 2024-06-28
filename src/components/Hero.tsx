import React from "react";
import Grid from "./Grid";
const Hero = () => {
    return (
        <>
            <div className="h-[50rem] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <p className="relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    <Grid />
                </p>
            </div>
        </>
    );
};

export default Hero;
