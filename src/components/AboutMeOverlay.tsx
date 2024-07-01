import Image from "next/image";
import React, { FunctionComponent, useEffect, useState } from "react";
import { IoIosDownload } from "react-icons/io";
import {
    NextJSIcon,
    TailwindCSSIcon,
    JSIcon,
    TSIcon,
    NodejsIcon,
    MongoDBIcon,
    ReactIcon,
    GithubIcon,
    JavaIcon,
    PythonIcon,
    MySQLIcon,
    FramermotionIcon,
    FigmaIcon,
} from "@/utils/icons";
import { socialLinks } from "../../data";

const AboutMeOverlay = () => {
    const [experienceYears, setExperienceYears] = useState(0);
    const [projectsCompleted, setProjectsCompleted] = useState(0);

    useEffect(() => {
        const experienceInterval = setInterval(() => {
            setExperienceYears((prev) => {
                if (prev < 2) return prev + 1;
                clearInterval(experienceInterval);
                return prev;
            });
        }, 500);

        const projectsInterval = setInterval(() => {
            setProjectsCompleted((prev) => {
                if (prev < 10) return prev + 1;
                clearInterval(projectsInterval);
                return prev;
            });
        }, 200);

        return () => {
            clearInterval(experienceInterval);
            clearInterval(projectsInterval);
        };
    }, []);

    const email = socialLinks.find((link) => link.label === "Email")?.href;

    return (
        <div className="w-full flex flex-col justify-start items-center gap-5 px-5 py-2 relative">
            {/* Large screen buttons */}
            <div className="hidden md:flex absolute top-5 right-5 space-x-4">
                <a
                    href={`mailto:${email}`}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                >
                    Hire Me
                </a>
                <a
                    href="/resume.pdf"
                    download
                    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 transition duration-300"
                >
                    <IoIosDownload className="text-xl" />
                    Download CV
                </a>
            </div>
            <span className="font-bold uppercase text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
                About Me
            </span>
            {/* Small screen buttons */}
            <div className="flex flex-col space-y-4 mt-4 md:hidden">
                <a
                    href={`mailto:${email}`}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 text-center"
                >
                    Hire Me
                </a>
                <a
                    href="/resume.pdf"
                    download
                    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 transition duration-300 text-center"
                >
                    <IoIosDownload className="text-xl" />
                    Download CV
                </a>
            </div>
            <div className="text-center text-lg lg:text-xl">
                Ready to dive into my journey?
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-10">
                {/* Profile Section */}
                <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 rounded-lg p-5 shadow-lg transform transition duration-300 hover:neon-glow">
                    <Image
                        src="/imageSelf.jpeg"
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="rounded-full border-4 border-purple-500 mb-5"
                    />
                    <h3 className="font-bold text-3xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
                        Armaan Jaj
                    </h3>
                    <p className="text-center text-gray-700 dark:text-gray-300 mb-3">
                        I am a passionate developer with a knack for building
                        innovative solutions. My journey in tech began with a
                        curiosity for how things work, and it has evolved into a
                        career where I get to create and solve problems every
                        day.
                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map(
                            (link, index) =>
                                !link.isCopy && (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target={link.target}
                                        className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition duration-300"
                                    >
                                        <link.icon className="w-6 h-6" />
                                    </a>
                                )
                        )}
                    </div>
                </div>
                {/* Fun Fact Section */}
                <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 rounded-lg p-5 shadow-lg transform transition duration-300 hover:neon-glow">
                    <h3 className="font-bold text-3xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
                        Fun Facts
                    </h3>
                    <p className="text-center text-gray-700 dark:text-gray-300 mb-3">
                        When I'm not coding, I love to explore the outdoors and
                        enjoy a good hike. I'm also a huge fan of sci-fi movies
                        and books!
                    </p>
                    <div className="flex justify-around w-full">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-3xl text-purple-500 animate-pulse">
                                {experienceYears}+
                            </span>
                            <span className="text-gray-700 dark:text-gray-300">
                                Years of Experience
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-3xl text-purple-500 animate-pulse">
                                {projectsCompleted}+
                            </span>
                            <span className="text-gray-700 dark:text-gray-300">
                                Projects Completed
                            </span>
                        </div>
                    </div>
                </div>
                {/* Skills Section */}
                <div className="flex flex-col justify-start items-center bg-white dark:bg-gray-900 rounded-lg p-5 shadow-lg transform transition duration-300 hover:neon-glow overflow-y-auto styledScrollBar">
                    <h3 className="font-bold text-3xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
                        I've worked with
                    </h3>
                    <ul className="grid grid-cols-2 gap-4 text-xl text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-3">
                            <NextJSIcon className="w-10 h-10" />
                            Next.js
                        </li>
                        <li className="flex items-center gap-3">
                            <ReactIcon className="w-10 h-10" />
                            React.js
                        </li>
                        <li className="flex items-center gap-3">
                            <TSIcon className="w-10 h-10" />
                            TypeScript
                        </li>
                        <li className="flex items-center gap-3">
                            <TailwindCSSIcon className="w-10 h-10" />
                            TailwindCSS
                        </li>
                        <li className="flex items-center gap-3">
                            <NodejsIcon className="w-10 h-10" />
                            Node.js
                        </li>
                        <li className="flex items-center gap-3">
                            <MongoDBIcon className="w-10 h-10" />
                            MongoDB
                        </li>
                        <li className="flex items-center gap-3">
                            <JSIcon className="w-10 h-10" />
                            JavaScript
                        </li>
                        <li className="flex items-center gap-3">
                            <GithubIcon className="w-10 h-10" />
                            GitHub
                        </li>
                        <li className="flex items-center gap-3">
                            <JavaIcon className="w-10 h-10" />
                            Java
                        </li>
                        <li className="flex items-center gap-3">
                            <PythonIcon className="w-10 h-10" />
                            Python
                        </li>
                        <li className="flex items-center gap-3">
                            <MySQLIcon className="w-10 h-10" />
                            MySQL
                        </li>
                        <li className="flex items-center gap-3">
                            <FramermotionIcon className="w-10 h-10" />
                            Framer Motion
                        </li>
                        <li className="flex items-center gap-3">
                            <FigmaIcon className="w-10 h-10" />
                            Figma
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMeOverlay;
