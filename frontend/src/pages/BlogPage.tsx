import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
import Loader from "../components/Loader";

interface Blog {
    id: string;
    title: string;
    content: string;
    authorId: string;
}

const BlogPage = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem("jwt")
                    }
                });
                setBlog(response.data);
                setLoading(false);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            }
        };
        fetchBlog();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
            {loading && <Loader />}
            {error && <p className="text-red-500">{error}</p>}
            {blog && (
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-gray-700">{blog.title}</h1>
                    <p className="mb-2 text-gray-600">{blog.content}</p>
                    <p className="text-sm text-gray-500">Author: {blog.authorId}</p>
                </div>
            )}
        </div>
    );
};

export default BlogPage;
