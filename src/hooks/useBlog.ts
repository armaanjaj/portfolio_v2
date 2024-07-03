import { useState, useEffect } from "react";
import axios from "axios";

interface Blog {
    _id: string;
    title: string;
    content: string;
    imagePath: string;
    category: string;
}

interface UseBlogProps {
    blogId?: string;
    blogData?: Blog;
}

const useBlog = ({ blogId, blogData }: UseBlogProps) => {
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

    return { blog, loading };
};

export default useBlog;
