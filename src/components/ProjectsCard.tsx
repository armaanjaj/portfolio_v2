import React, { FunctionComponent } from "react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
interface IconProps {
    className?: string;
}

interface Project {
    id: number;
    title: string;
    des: string;
    img: string;
    links: string[];
    iconLists: FunctionComponent<IconProps>[];
}

interface ProjectsCardProps {
    project: Project;
}

export function ProjectsCard({ project }: ProjectsCardProps) {
    const isOneLink =
        project.links[0] === "" || project.links[1] === "" ? true : false;
    return (
        <div className="bg-gray-900 px-4 py-2 w-full h-full relative min-w-fit overflow-visible rounded-xl">
            <motion.div
                initial={{
                    width: "2.5rem",
                    paddingLeft: !isOneLink ? "0.25rem" : "0rem",
                    paddingRight: "0rem",
                }}
                whileHover={{
                    width: !isOneLink ? "7.5rem" : "2.5rem",
                    paddingLeft: !isOneLink ? "1rem" : "0rem",
                    paddingRight: !isOneLink ? "1rem" : "0rem",
                }}
                transition={{
                    stiffness: 1000,
                    duration: 0.01,
                    ease: "linear",
                }}
                className="group py-1 h-[2.5rem] flex flex-row items-center justify-start gap-2 rounded-full z-[11] absolute top-2 left-2 bg-white text-gray-900 border-2 overflow-hidden transition-all duration-300"
            >
                {project.links[0] && (
                    <Link href={project.links[0]} target="_blank">
                        <motion.span
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: -45 }}
                            className={`flex items-center justify-center group-hover:-rotate-45 ${isOneLink && 'ml-[3px]'}`}
                        >
                            <IoIosArrowRoundForward className="text-3xl" />
                        </motion.span>
                    </Link>
                )}
                {project.links[1] && (
                    <Link href={project.links[1]} target="_blank">
                        <motion.span
                            initial={{ x: 0, opacity: 0 }}
                            animate={{ x: 10, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center"
                        >
                            <FaGithub className={`text-3xl text-gray-800 hover:text-gray-900 transition-colors ${isOneLink && '-ml-[6px]'}`} />
                        </motion.span>
                    </Link>
                )}
            </motion.div>

            <div className="relative h-full flex flex-col justify-evenly items-end">
                <h1 className="font-bold text-right w-fit text-xl text-white relative -mt-2 z-[11]">
                    {project.title}
                </h1>

                <p className="font-normal text-base text-slate-500 relative z-[11] max-w-40 text-right">
                    {project.des}
                </p>
                <div className="w-fit pr-3 relative z-[11]">
                    <div className="flex flex-row items-center justify-end w-full">
                        <AnimatedTooltip
                            items={project.iconLists.map((Icon, index) => ({
                                id: index,
                                name: Icon.name || `Icon${index}`,
                                image: <Icon className="scale-150" />,
                            }))}
                        />
                    </div>
                </div>

                <div className="absolute -left-6 -bottom-[5.5rem] -rotate-[33deg] w-fit h-full z-10 skew-y-[22deg]">
                    <Image
                        src={project.img}
                        className="w-60 h-60 rounded-tr-md pointer-events-none"
                        id="projectImg"
                        alt={project.title}
                        width={469}
                        height={420}
                    />
                </div>
            </div>
            <Meteors number={20} />
        </div>
    );
}
