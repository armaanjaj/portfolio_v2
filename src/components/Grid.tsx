import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
    return (
        <section id="Hero" className="z-10 relative h-full w-full">
            <BentoGrid>
                {Array.from({ length: 9 }, (_, index) => (
                    <BentoGridItem key={index} id={index+1} />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
