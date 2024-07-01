import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

interface Blog {
    _id: string;
    title: string;
    content: string;
    imagePath: string;
    category: string;
}

const BlogsSection = () => {
    const [currentBlog, setCurrentBlog] = useState(0);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get("/api/getPosts");
                const data = res.data.posts;
                setBlogs(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setBlogs([]);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

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

        if (blogs.length > 0) {
            startInterval();
            document.addEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        }

        return () => {
            clearExistingInterval();
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, [blogs]);

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

    if (loading) {
        return <LoadingSpinner />;
    }

    if (blogs.length === 0) {
        return <div>Something interisting cooking.</div>;
    }

    return (
        <div className="group relative px-3 py-2 w-full h-full overflow-hidden">
            <div className="select-none absolute right-0 -bottom-4 uppercase text-4xl z-[1] opacity-60 font-bold">
                <h2>blogs</h2>
            </div>

            <AnimatePresence initial={false} mode="wait">
                {blogs.map((blog, index) =>
                    index === currentBlog ? (
                        <motion.div
                            key={blog._id}
                            className="absolute top-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center"
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={imageVariants}
                        >
                            <motion.div
                                className="uppercase font-bold text-lg lg:text-2xl 2xl:text-3xl mx-auto text-center z-[2] h-full w-full"
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={textVariants}
                            >
                                <span>{blog.title}</span>
                            </motion.div>

                            <motion.div
                                className="absolute top-1/2 sm:left-1/2 -translate-x-1/2 -translate-y-1/2 -bottom-20 left-[25%] 2xl:-bottom-16 2xl:left-[30%] right-0 w-40 h-48 shadow-2xl shadow-purple-500 z-[1]"
                                onContextMenu={(event: any) => {
                                    event.preventDefault();
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={imageVariants}
                            >
                                <Image
                                    src={"/blogs/"+blog.imagePath}
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
