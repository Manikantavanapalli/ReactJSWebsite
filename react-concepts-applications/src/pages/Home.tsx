import React from 'react';
import { Link } from 'react-router-dom';

const concepts: string[] = ["React ProjectSetup", "Dependencies"];

const Home: React.FC = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white py-8 shadow-xl">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-5xl font-bold tracking-tight">ReactJS Concepts</h1>
                        <p className="mt-2 text-lg font-medium">
                            Dive into key React concepts with real-world examples.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Link
                            to="/login"
                            className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition-all"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {concepts.map((concept) => (
                        <Link
                            key={concept}
                            to="/projectsetup"
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
                        >
                            <div className="p-8 text-center">
                                <button className="w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold text-lg rounded-lg hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-400 transition-all">
                                    {concept}
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-md font-medium">
                        Built with ❤️ to make React concepts easier to learn.
                    </p>
                    <p className="text-sm mt-2">
                        &copy; {new Date().getFullYear()} ReactJS Concepts. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
