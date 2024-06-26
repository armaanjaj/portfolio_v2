import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
    return (
        <section id="Hero" className="z-10 relative h-full w-full">
            <BentoGrid>
                {[
                    {
                        boxId: 1,
                        title: "About me",
                        description: "box 1 is in the house",
                    },
                    {
                        boxId: 2,
                        title: "Control Center",
                        description: "box 2 is in the house",
                    },
                    {
                        boxId: 3,
                        title: "Map",
                        description: "box 3 is in the house",
                    },
                    {
                        boxId: 4,
                        title: "Navigation",
                        description: "box 4 is in the house",
                    },
                    {
                        boxId: 5,
                        title: "Technologies",
                        description: "box 5 is in the house",
                    },
                    {
                        boxId: 6,
                        title: "Weather",
                        description: "box 6 is in the house",
                    },
                    {
                        boxId: 7,
                        title: "Projects",
                        description: "box 7 is in the house",
                    },
                    {
                        boxId: 8,
                        title: "Socials",
                        description: "box 8 is in the house",
                    },
                    {
                        boxId: 9,
                        title: "Newsletter form",
                        description: "box 9 is in the house",
                    },
                ].map(({ boxId, title, description }) => (
                    <BentoGridItem
                        key={boxId}
                        id={boxId}
                        title={title}
                        description={description}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
