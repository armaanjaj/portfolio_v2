import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { blogs } from "../../data";

const BlogsSection = () => {
    const [currentBlog, setCurrentBlog] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const startInterval = () => {
            interval = setInterval(() => {
                setCurrentBlog((prev) => (prev + 1) % blogs.length);
            }, 5000);
        };

        const clearExistingInterval = () => {
            if (interval) clearInterval(interval);
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                startInterval();
            } else {
                clearExistingInterval();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        startInterval();

        return () => {
            clearExistingInterval();
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    const imageVariants = {
        enter: {
            x: "100%",
            opacity: 0,
        },
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
        exit: {
            x: "-100%",
            opacity: 0,
            transition: { delay: 0.5, duration: 0.5 },
        },
    };

    const textVariants = {
        enter: {
            opacity: 0,
        },
        center: {
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="group relative px-3 py-2 w-full h-full overflow-hidden">
            <div className="select-none absolute right-0 -bottom-4 uppercase text-4xl z-[1] opacity-60 font-bold">
                <h2>blogs</h2>
            </div>

            <div className="absolute left-2 bottom-2 uppercase text-3xl z-[1] bg-white rounded-full font-bold border flex flex-row justify-between items-center">
                <Link href={blogs[currentBlog].href || "#"}>
                    <IoIosArrowRoundForward className="group-hover:-rotate-45 transition duration-300 text-gray-800" />
                </Link>
            </div>

            <AnimatePresence initial={false} mode="wait">
                {blogs.map((blog, index) =>
                    index === currentBlog ? (
                        <motion.div
                            key={blog.blogId}
                            className="absolute top-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center"
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={imageVariants}
                        >
                            <motion.div
                                className="uppercase font-bold text-3xl mx-auto text-center z-[2] h-full w-full"
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={textVariants}
                            >
                                <span>{blog.blogTitle}</span>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-16 left-[30%] right-0 w-40 h-48 shadow-2xl shadow-orange-600 z-[1]"
                                onContextMenu={(event: any) => {
                                    event.preventDefault();
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={imageVariants}
                            >
                                <Image
                                    src={blog.cover}
                                    width={400}
                                    height={350}
                                    alt="Blog Image"
                                    className="object-cover pointer-events-none w-40 h-48 border-2 border-gray-500 select-none rounded-md"
                                    onContextMenu={(event: any) => {
                                        event.preventDefault();
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>
        </div>
    );
};

export default BlogsSection;
