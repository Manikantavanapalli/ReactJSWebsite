import React from 'react';
const dependencies = [
    {
        category: "State Management",
        items: [
            { name: "react-redux", description: "Official bindings for using Redux with React." },
            { name: "redux-thunk", description: "Middleware for managing asynchronous logic in Redux." },
            { name: "@reduxjs/toolkit", description: "Simplifies Redux logic with less boilerplate." },
        ],
    },
    {
        category: "API Handling",
        items: [
            { name: "axios", description: "For making HTTP requests to APIs." },
            { name: "react-query", description: "Advanced data-fetching and caching solution." },
            { name: "graphql & apollo-client", description: "For GraphQL APIs." },
        ],
    },
    {
        category: "Forms and Validation",
        items: [
            { name: "formik", description: "Form handling library." },
            { name: "react-hook-form", description: "Lightweight form handling library." },
            { name: "yup", description: "Schema validation for forms." },
        ],
    },
    {
        category: "Utility Functions",
        items: [
            { name: "lodash", description: "Utility functions for arrays, objects, and more." },
            { name: "date-fns", description: "Date utility library." },
            { name: "clsx", description: "Conditional className handling." },
        ],
    },
    {
        category: "UI Enhancements",
        items: [
            { name: "headlessui", description: "Unstyled accessible UI components." },
            { name: "@heroicons/react", description: "Beautiful, free SVG icons." },
            { name: "react-toastify", description: "For notifications and alerts." },
        ],
    },
    {
        category: "Testing",
        items: [
            { name: "jest", description: "Testing framework for JavaScript." },
            { name: "@testing-library/react", description: "Utility for testing React components." },
            { name: "cypress", description: "End-to-end testing framework." },
        ],
    },
    {
        category: "Internationalization",
        items: [
            { name: "react-i18next", description: "Internationalization framework for React." },
        ],
    },
    {
        category: "Animation",
        items: [
            { name: "framer-motion", description: "Declarative animations for React components." },
        ],
    },
    {
        category: "Performance and Monitoring",
        items: [
            { name: "@sentry/react", description: "Error tracking and performance monitoring." },
            { name: "react-helmet", description: "Manage document head for SEO." },
        ],
    },
    {
        category: "Environment Variable Management",
        items: [
            { name: "dotenv", description: "Load environment variables from `.env` files." },
        ],
    },
    {
        category: "Styling (Tailwind CSS)",
        items: [
            { name: "@tailwindcss/forms", description: "Better form styles." },
            { name: "@tailwindcss/aspect-ratio", description: "Manage aspect ratios." },
            { name: "@tailwindcss/typography", description: "Improves text rendering." },
        ],
    },
    {
        category: "Linting and Formatting",
        items: [
            { name: "eslint", description: "Linter for identifying and fixing code issues." },
            { name: "prettier", description: "Code formatter." },
            { name: "eslint-config-airbnb", description: "Airbnb's ESLint rules." },
        ],
    },
];

const DependenciesList: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white py-8 shadow-lg">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold">
                        Dependencies and Their Purposes
                    </h1>
                    <p className="mt-2 text-lg">
                        Learn about key dependencies that power modern React applications.
                    </p>
                </div>

            </header>

            <div className="space-y-6">
                {dependencies.map((category) => (
                    <div key={category.category} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                        <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
                            {category.category}
                        </h2>
                        <ul className="space-y-4">
                            {category.items.map((item) => (
                                <li key={item.name} className="border-b pb-3 hover:bg-gray-100 transition-colors duration-200">
                                    <span className="font-bold text-blue-600">{item.name}</span>:{" "}
                                    <span className="text-gray-700">{item.description}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DependenciesList;
