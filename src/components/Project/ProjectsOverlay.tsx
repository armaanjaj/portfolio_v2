import React, { useState, FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import UniversalOverlay from "@/components/Overlays/UniversalOverlay";

const ProjectsOverlay = ({
    projects,
}: {
    projects: {
        id: number;
        title: string;
        des: string;
        img: string;
        links: string[];
        iconLists: FunctionComponent[];
        colors: string[];
    }[];
}) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({
        title: "",
        des: "",
    });

    const toggleOverlay = (project = { title: "", des: "" }) => {
        setSelectedProject(project);
        setIsOverlayOpen(!isOverlayOpen);
    };

    return (
        <div className="h-full w-full flex flex-col justify-start items-start gap-5">
            <span className="font-bold uppercase text-3xl">Work</span>
            <div>
                Witness the epic saga of my code wizardry and tech sorcery!
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-10">
                {projects.map((project) => (
                    <StyledCards
                        key={project.id}
                        project={project}
                        toggleOverlay={toggleOverlay}
                    />
                ))}
            </div>
            <UniversalOverlay
                isOpen={isOverlayOpen}
                onClose={() => toggleOverlay()}
                title={selectedProject.title}
                description={selectedProject.des}
            />
        </div>
    );
};

const StyledCards = ({
    project,
    toggleOverlay,
}: {
    project: {
        id: number;
        title: string;
        des: string;
        img: string;
        links: string[];
        iconLists: FunctionComponent[];
        colors: string[];
    };
    toggleOverlay: (project: { title: string; des: string }) => void;
}) => {
    const descriptionPreview = project.des.slice(0, 100);

    return (
        <div
            key={project.id}
            className="relative group block py-2 px-4 h-72 w-full border border-transparent rounded-md group hover:shadow-lg dark:hover:shadow-purple-500 hover:border-purple-400 hover:shadow-purple-300 transition duration-300 bg-gray-900 dark:bg-gray-800 overflow-hidden"
        >
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 transition-opacity duration-500">
                <Image
                    src={project.img}
                    layout="fill"
                    objectFit="cover"
                    alt={project.title}
                    className="object-cover w-full h-full filter grayscale"
                />
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent via-purple-500 to-purple-800 opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
            <div className="relative p-2 z-20 flex flex-col justify-between items-start gap-5 w-full h-full">
                <h4 className="font-bold tracking-wide text-white text-2xl group-hover:text-purple-400 transition-colors duration-200 h-1/5">
                    {project.title}
                </h4>
                <p className="tracking-wide leading-relaxed text-sm text-white h-3/5">
                    {descriptionPreview}
                    {project.des.length > 100 && (
                        <span
                            className="text-purple-400 cursor-pointer ml-2"
                            onClick={() =>
                                toggleOverlay({
                                    title: project.title,
                                    des: project.des,
                                })
                            }
                        >
                            ...Read More
                        </span>
                    )}
                </p>
                <div className="w-full flex flex-row justify-between items-start h-1/5">
                    <div className="w-fit flex flex-row justify-start items-center text-gray-900 gap-3 py-1 px-1 rounded-full bg-white shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                        {project.links[0] && (
                            <Link
                                href={project.links[0]}
                                className="group-hover:-rotate-45 transition duration-300 rounded-full"
                                target="_blank"
                            >
                                <IoIosArrowRoundForward className="text-3xl" />
                            </Link>
                        )}
                        {project.links[1] && (
                            <Link
                                href={project.links[1]}
                                className="text-gray-800 hover:text-gray-900 transition-colors"
                                target="_blank"
                            >
                                <FaGithub className="text-3xl" />
                            </Link>
                        )}
                    </div>
                    <div className="w-1/2 flex flex-row justify-end items-center gap-5 h-full">
                        {project.iconLists.map((Icon, i) => (
                            <span
                                className="scale-150 grayscale group-hover:grayscale-0 transform group-hover:scale-125 transition-transform duration-300"
                                key={i}
                            >
                                <Icon />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-10 h-10 bg-gray-900 transform -rotate-45 translate-x-5 -translate-y-5 z-0 group-hover:bg-purple-500 transition-colors duration-300" />
        </div>
    );
};

export default ProjectsOverlay;
