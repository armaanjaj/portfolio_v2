import React from "react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export function ProjectsCard() {
    return (
        <div className=" w-full h-full relative min-w-fit overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 w-full h-20 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />

            <div className="relative bg-gray-900 border  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-end">
                <h1 className="font-bold text-right w-full text-xl text-white mb-4 relative z-50">
                    Morning Star Contractors
                </h1>

                {/* <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                    I don&apos;t know what to write so I&apos;ll just paste
                    something cool here. One more sentence because lorem ipsum
                    is just unacceptable. Won&apos;t ChatGPT the shit out of
                    this.
                </p> */}

                <div className="absolute -left-10 -bottom-16 -rotate-[20deg] w-fit h-full">
                    <Image
                        src={"/p5.png"}
                        className="w-60 rounded-tr-md pointer-events-none"
                        id="projectImg"
                        alt="Morning Star Contractors"
                        width={469}
                        height={420}
                    />
                </div>

                <div className="w-full pl-[4.5rem] pr-3">
                    <div className="flex flex-row items-center justify-end w-full">
                        <AnimatedTooltip
                            items={[
                                {
                                    id: 1,
                                    name: "NextJS",
                                    designation: "The Explorer",
                                    image: "/p1.png",
                                },
                                {
                                    id: 2,
                                    name: "TailwindCSS",
                                    designation: "The Explorer",
                                    image: "/p2.png",
                                },
                                {
                                    id: 3,
                                    name: "NextJS",
                                    designation: "The Explorer",
                                    image: "/p3.png",
                                },
                            ]}
                        />
                    </div>
                </div>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
            </div>
        </div>
    );
}
