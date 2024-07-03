import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { CircleLoader } from "./Loaders";

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
    const [isTabActive, setIsTabActive] = useState(true);

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
        const handleVisibilityChange = () => {
            if (document.hidden) {
                setIsTabActive(false);
            } else {
                setIsTabActive(true);
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (isTabActive && blogs.length > 0) {
            interval = setInterval(() => {
                setCurrentBlog((prev) => (prev + 1) % blogs.length);
            }, 10000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isTabActive, blogs]);

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
        return <CircleLoader />;
    }

    if (blogs.length === 0) {
        return <div>Something interesting cooking.</div>;
    }

    return (
        <div className="group relative px-3 py-2 w-full min-h-full overflow-hidden">
            <div className="select-none absolute -top-4 left-2 uppercase text-4xl z-[1] opacity-60 font-bold">
                <h2>blogs</h2>
            </div>

            <AnimatePresence initial={false} mode="wait">
                {blogs.map((blog, index) =>
                    index === currentBlog ? (
                        <motion.div
                            key={blog._id}
                            className="relative w-full h-full flex flex-row items-center justify-center"
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={imageVariants}
                        >
                            <div className="w-1/2">
                                <motion.div
                                    className="absolute -bottom-[45%] lg:-bottom-[30%] -left-10 h-fit w-40 shadow-2xl shadow-purple-500 z-[1]"
                                    onContextMenu={(event: any) => {
                                        event.preventDefault();
                                    }}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    variants={imageVariants}
                                >
                                    <Image
                                        src={`/blogs/${blog.imagePath}`}
                                        width={400}
                                        height={350}
                                        alt="Blog Image"
                                        className="object-cover pointer-events-none w-40 h-48 border-2 border-gray-500 select-none rounded-md"
                                        onContextMenu={(event: any) => {
                                            event.preventDefault();
                                        }}
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                className="w-1/2 uppercase font-bold text-lg lg:text-2xl 2xl:text-3xl mx-auto text-center z-[2] h-full flex items-center justify-center"
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={textVariants}
                            >
                                <span>{blog.title}</span>
                            </motion.div>
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>
        </div>
    );
};

export default BlogsSection;
