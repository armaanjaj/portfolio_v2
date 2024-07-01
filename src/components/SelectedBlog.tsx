import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import LoadingSpinner from "./LoadingSpinner";

interface Blog {
    _id: string;
    title: string;
    content: string;
    imagePath: string;
    category: string;
}

interface SelectedBlogProps {
    blogId?: string;
    blogData?: Blog;
    onBack: () => void;
}

const SelectedBlog: React.FC<SelectedBlogProps> = ({
    blogId,
    blogData,
    onBack,
}) => {
    const [blog, setBlog] = useState<Blog | null>(blogData || null);
    const [loading, setLoading] = useState(!blogData);

    useEffect(() => {
        if (blogId && !blogData) {
            const fetchBlog = async () => {
                try {
                    const res = await axios.get(`/api/${blogId}`);
                    setBlog(res.data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching blog:", error);
                    setLoading(false);
                }
            };

            fetchBlog();
        }
    }, [blogId, blogData]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!blog) {
        return <div className="text-red-500">Blog not found</div>;
    }

    return (
        <div className="h-full w-full flex flex-col justify-start items-start gap-14 pr-3">
            <button
                onClick={onBack}
                className="flex flex-row justify-start items-center gap-2 rounded-full bg-purple-600 text-white px-4 py-2 hover:bg-purple-700 transition-colors duration-300"
            >
                <IoIosArrowRoundBack className="text-2xl" />
                <span className="font-medium">Back</span>
            </button>
            <div className="flex flex-col justify-start items-start gap-5 w-full h-full">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 break-words">
                    {blog.title}
                </h1>
                <div className="relative w-full h-64">
                    <Image
                        src={`/blogs/${blog.imagePath}`}
                        alt={blog.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md shadow-md"
                    />
                </div>
                <div
                    className="prose lg:prose-xl dark:prose-dark break-words"
                    style={{ whiteSpace: "pre-wrap" }}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </div>
        </div>
    );
};

export default SelectedBlog;
