import React from 'react';
import {Link} from "react-router-dom";

const files = [
    {
        name: 'CoolIsac',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        name: 'CoolBoy',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        name: 'CrazyGuy',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        name: 'Create user',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    }
]

const Login = () => {
    return (
        <>
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 py-12 px-14 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {files.map((file) => (
                    <li key={file.source} className="relative">
                        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img src={file.source} alt="user icon" className="pointer-events-none object-cover group-hover:opacity-75" />
                            <button type="button" className="absolute inset-0 focus:outline-none">
                                <span className="sr-only">View details for {file.name}</span>
                            </button>
                        </div>
                        <p className="pointer-events-none mt-2 block truncate text-md text-center font-medium text-gray-900">{file.name}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Login;
