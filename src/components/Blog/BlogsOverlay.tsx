import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import SelectedBlog from "./SelectedBlog";
import Image from "next/image";
import { CircleLoader } from "../Loaders";

interface Blog {
    _id: string;
    title: string;
    content: string;
    imagePath: string;
    category: string;
}

const BlogsOverlay = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get("/api/getPosts");
                setBlogs(res.data.posts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <CircleLoader />;
    }

    return (
        <div className="h-full w-full flex flex-col justify-start items-start gap-5 pr-2">
            <span className="font-bold uppercase text-3xl">Blogs</span>
            <div>Catch Up on My Latest Stories</div>
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence>
                    {!selectedBlog && (
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                        >
                            {blogs.length === 0 ? (
                                <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center h-full">
                                    <div className="text-center">
                                        <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
                                            No Blogs Found
                                        </h2>
                                        <p className="text-gray-400 dark:text-gray-500">
                                            Please check back later for more
                                            content.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <BlogCards
                                    blogs={blogs}
                                    handler={setSelectedBlog}
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {selectedBlog && (
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <SelectedBlog
                                blogData={selectedBlog}
                                onBack={() => setSelectedBlog(null)}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

interface BlogCardsProps {
    blogs: Blog[];
    handler: (blog: Blog) => void;
}

const BlogCards: React.FC<BlogCardsProps> = ({ blogs, handler }) => {
    return (
        <>
            {blogs.map((blog) => (
                <div
                    key={blog._id}
                    className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => handler(blog)}
                >
                    <div className="relative h-56 overflow-hidden">
                        <Image
                            src={"/blogs/" + blog.imagePath}
                            alt={blog.title}
                            width={550}
                            height={400}
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold z-10 transition-opacity duration-300 group-hover:opacity-100">
                            {blog.title}
                        </h2>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-500 dark:text-gray-400 uppercase text-sm tracking-widest">
                            {blog.category}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BlogsOverlay;
