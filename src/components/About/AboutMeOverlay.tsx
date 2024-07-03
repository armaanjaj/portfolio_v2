import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import { socialLinks } from "../../../data";

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
        <div className="w-full flex flex-col justify-start items-start gap-5 relative h-full">
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
            <div className="flex flex-col items-start justify-start gap-5">
                <span className="font-bold uppercase text-3xl">About Me</span>
                <div className="text-lg lg:text-xl">
                    Ready to dive into my journey?
                </div>
            </div>
            {/* Small screen buttons */}
            <div className="flex flex-col space-y-4 mt-4 md:hidden px-5">
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
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-10">
                {/* Profile Section */}
                <div className="flex flex-col justify-center gap-5 items-center bg-white dark:bg-gray-900 rounded-lg p-5 shadow-lg transform transition duration-300 hover:neon-glow">
                    <Image
                        src="/imageSelf.jpeg"
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="rounded-full border-4 border-purple-500"
                        onContextMenu={(event: any) => {
                            event.preventDefault();
                        }}
                    />
                    <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
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
                <div className="flex flex-col justify-center gap-5 items-center bg-white dark:bg-gray-900 rounded-lg p-5 shadow-lg transform transition duration-300 hover:neon-glow">
                    <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
                        Fun Facts
                    </h3>
                    <p className="text-center text-gray-700 dark:text-gray-300">
                        When I&apos;m not coding, I love to explore the outdoors
                        and enjoy a good hike. I&apos;m also a huge fan of
                        sci-fi movies and books!
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
                <div className="flex flex-col justify-start gap-5 items-center bg-white dark:bg-gray-900 rounded-lg p-5 shadow-lg transform transition duration-300 hover:neon-glow overflow-y-auto styledScrollBar">
                    <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
                        I&apos;ve worked with
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
            {/* My Story Section */}
            <div className="w-full px-5 py-10">
                <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient mb-5">
                    My Story
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-4">
                    Ever since I was a child, I&apos;ve had a deep fascination
                    with art, designing, and sketching. This love for creativity
                    didn&apos;t just fade away; it evolved as I grew older.
                    Today, it manifests in my passion for designing and
                    programming. I&apos;ve always enjoyed experimenting with new
                    ideas and bringing them to life through code.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-4">
                    I studied at SAIT, where I learned an incredible amount and
                    graduated with honors. Those were filled with learning,
                    growth, and a lot of coding marathons.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-4">
                    When I&apos;m not coding, you can find me indulging in my
                    other hobbies like singing, sketching, and playing the
                    guitar. Nature is my sanctuary, and I often find myself
                    journaling while soaking in the beauty of the great
                    outdoors. I mean, who doesn&apos;t love a good hike followed
                    by a bit of introspective writing?
                </p>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-4">
                    So, that&apos;s me in a nutshell. A curious mind with a love
                    for art and technology, always ready to dive into the next
                    big adventure—be it a new project, a challenging problem, or
                    simply exploring a new trail. Let&apos;s create something
                    amazing together!
                </p>
            </div>
            {/* Favorites Section */}
            <div className="w-full px-5 pb-10">
                <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient mb-5">
                    Favorites
                </h3>
                <div className="flex flex-col justify-between items-start gap-8 w-full">
                    <div>
                        <h4 className="font-bold text-2xl text-gray-700 dark:text-gray-300 mb-2">
                            Favorite Movie
                        </h4>
                        <div className="flex flex-col justify-start items-start gap-5">
                            <div className="flex flex-col justify-start items-start gap-2">
                                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">
                                    Captain America: The Winter Soldier
                                </p>
                                <p className="text-sm lg:text-md text-gray-500 dark:text-gray-400">
                                    &lsquo;A perfect blend of action,
                                    storytelling, and character
                                    development.&rsquo;
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">
                                    The Social Network
                                </p>
                                <p className="text-sm lg:text-md text-gray-500 dark:text-gray-400">
                                    &lsquo;An intriguing look into the rise of
                                    social media giant Facebook.&lsquo;
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-2xl text-gray-700 dark:text-gray-300 mb-2">
                            Favorite Actor
                        </h4>
                        <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">
                            Shah Rukh Khan
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-2xl text-gray-700 dark:text-gray-300 mb-2">
                            Favorite Sport
                        </h4>
                        <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">
                            Cricket
                        </p>
                    </div>
                </div>
            </div>
            {/* Quote */}
            <div className="w-full px-5 pb-10">
                <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient mb-5 text-center">
                    Personal Mantra
                </h3>
                <p className="text-center text-lg lg:text-xl text-gray-700 dark:text-gray-300">
                    &quot;Embrace the journey, cherish the moments, and always
                    strive to leave a positive impact.&quot;
                </p>
            </div>
        </div>
    );
};

export default AboutMeOverlay;
