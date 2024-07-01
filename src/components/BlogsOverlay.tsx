import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectedBlog from "./SelectedBlog";
import LoadingSpinner from "./LoadingSpinner";
import Image from "next/image";

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
        return <LoadingSpinner />;
    }

    if (selectedBlog) {
        return (
            <SelectedBlog
                blogData={selectedBlog}
                onBack={() => setSelectedBlog(null)}
            />
        );
    }

    return (
        <div className="h-full w-full flex flex-col justify-start items-start gap-5 pr-2">
            <span className="font-bold uppercase text-3xl">Blogs</span>
            <div>Catch Up on My Latest Stories</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <BlogCards blogs={blogs} handler={setSelectedBlog} />
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
                    className="group relative dark:bg-white bg-gray-900 rounded-lg overflow-hidden border border-transparent hover:border-purple-500 transition duration-300 hover:shadow-lg hover:shadow-purple-500"
                    onClick={() => handler(blog)}
                >
                    <div className="relative h-56 overflow-hidden">
                        <Image
                            src={"/blogs/"+blog.imagePath}
                            alt={blog.title}
                            width={550}
                            height={400}
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-75"></div>
                        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold z-10">
                            {blog.title}
                        </h2>
                    </div>
                    <div className="p-4">
                        <p className="dark:text-gray-500 text-gray-200 uppercase text-sm">
                            {blog.category}
                        </p>
                    </div>
                    {/* <div className="absolute top-4 left-4 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        New
                    </div> */}
                </div>
            ))}
        </>
    );
};

export default BlogsOverlay;
