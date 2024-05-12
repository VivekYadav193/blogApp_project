import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import Loader from "../components/Loader";
import { BACKEND_URL } from "../config";

const Blog = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("jwt");
                const response = await axios.get(
                    `${BACKEND_URL}/api/v1/blog/bulk`,
                    {
                        headers: {
                            Authorization: token
                        }
                    }
                );
                console.log(response);
                setBlogs(response.data);
            } catch (err) {
                if (err instanceof Error) {
                    console.log(err.message);
                }
            }
        };

        fetchData();
    }, []);

    const [blogs, setBlogs] = useState<{
        id: string;
        title: string;
        content: string;
        published: boolean;
        authorId: string;
    }[]>();

    if (!blogs) {
        return <Loader />;
    }

    return (
        <div >
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    content={blog.content}
                    authorName={blog.authorId}
                />
            ))}
        </div>
    );
};

export { Blog };
