import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

const PublishBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState<string | null>(null);

    const publishBlog = async () => {
        try {
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`, {
                title,
                content
            },
                {
                    headers: {
                        Authorization: localStorage.getItem("jwt"),
                    },
                }

            );
            if (response.status === 200) {
                setTitle("");
                setContent("");
                alert("Blog published successfully!");
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Publish a Blog</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Title
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                    Content
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <button
                    className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={publishBlog}
                >
                    Publish
                </button>
            </div>
        </div>
    );
};

export default PublishBlog;
