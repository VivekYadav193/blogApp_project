import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
    id: string;
    title: string;
    content: string;
    authorName: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, content, authorName }) => {
    // Function to truncate content
    const truncateContent = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + "...";
    };

    return (
        <Link to={id}>
            <div className="bg-white shadow-md rounded-md p-6 text-center border b-2"  >

                <p className="text-gray-600">Author: {authorName}</p>
                <p className=' text-gray-600' >Blog Id: {id}</p>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">{title}</h2>
                <p className="text-gray-700 mt-4">{truncateContent(content, 100)}</p> {/* Limit content to 100 characters */}

            </div>
        </Link>
    );
}

export default BlogCard;
