import React from "react";
import { FaReact, FaTools, FaCog, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Documentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-200 to-red-300 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white py-8 shadow-lg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">ReactJS Project Setup Documentation</h1>
          <p className="mt-2 text-lg">Learn how to set up a React project and understand how it works!</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-xl mt-8 mb-16">
        {/* Section 1: Introduction */}
        <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaReact className="mr-2 text-purple-600" /> What is ReactJS?
          </h2>
          <p>
            ReactJS is a JavaScript library used to build user interfaces (UIs). It helps developers create dynamic and
            interactive web applications by breaking down the UI into reusable components. React makes web development
            easier and faster by allowing developers to update only parts of the page without reloading the entire page.
          </p>
        </section>

        {/* Section 2: Ways to Set Up a ReactJS Project */}
        <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaTools className="mr-2 text-pink-500" /> Ways to Set Up a ReactJS Project
          </h2>
          <p className="mb-4">
            There are three main ways to set up a ReactJS project. Choose the one that suits your needs:
          </p>

          {/* CRA */}
          <div className="mb-8">
            <h3 className="text-xl font-bold flex items-center">
              <FaArrowRight className="mr-2 text-indigo-600" /> A. Using Create React App (CRA)
            </h3>
            <ol className="list-decimal list-inside ml-4 mb-4">
              <li>Open your terminal.</li>
              <li>
                Run the following command: <code className="bg-gray-200 p-1 rounded">npx create-react-app my-app</code>
              </li>
              <li>Navigate into your project folder: <code className="bg-gray-200 p-1 rounded">cd my-app</code></li>
              <li>Start the development server: <code className="bg-gray-200 p-1 rounded">npm start</code></li>
            </ol>
            <p>
              <strong>When to Use CRA:</strong> Great for beginners as it sets up everything for you, including Webpack,
              Babel, and more. The easiest way to start building a React app.
            </p>
          </div>

          {/* Vite */}
          <div className="mb-8">
            <h3 className="text-xl font-bold flex items-center">
              <FaArrowRight className="mr-2 text-indigo-600" /> B. Using Vite
            </h3>
            <ol className="list-decimal list-inside ml-4 mb-4">
              <li>Open your terminal.</li>
              <li>
                Run the following commands:{" "}
                <code className="bg-gray-200 p-1 rounded">npm create vite@latest my-app --template react</code>
              </li>
              <li>Navigate into your project folder: <code className="bg-gray-200 p-1 rounded">cd my-app</code></li>
              <li>Install dependencies: <code className="bg-gray-200 p-1 rounded">npm install</code></li>
              <li>Start the development server: <code className="bg-gray-200 p-1 rounded">npm run dev</code></li>
            </ol>
            <p>
              <strong>When to Use Vite:</strong> Vite is faster than CRA and suitable for small to medium projects where
              quick builds and hot module replacement (HMR) matter.
            </p>
          </div>

          {/* Manual Setup */}
          <div className="mb-8">
            <h3 className="text-xl font-bold flex items-center">
              <FaArrowRight className="mr-2 text-indigo-600" /> C. Manual Setup
            </h3>
            <ol className="list-decimal list-inside ml-4 mb-4">
              <li>Create a new folder and open it in the terminal.</li>
              <li>Initialize a Node.js project: <code className="bg-gray-200 p-1 rounded">npm init -y</code></li>
              <li>
                Install React and React DOM:{" "}
                <code className="bg-gray-200 p-1 rounded">npm install react react-dom</code>
              </li>
              <li>
                Install Webpack, Babel, and other tools:{" "}
                <code className="bg-gray-200 p-1 rounded">
                  npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-react
                  html-webpack-plugin --save-dev
                </code>
              </li>
              <li>Create configuration files (e.g., webpack.config.js and .babelrc).</li>
              <li>Start your app: <code className="bg-gray-200 p-1 rounded">npx webpack serve</code></li>
            </ol>
            <p>
              <strong>When to Use Manual Setup:</strong> Best for advanced users who need full control over the project
              configuration.
            </p>
          </div>
        </section>

        {/* Section 3: How ReactJS Works */}
        <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaCog className="mr-2 text-purple-600" /> How ReactJS Works Behind the Scenes
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Component-Based Architecture:</strong> React apps are built using reusable components, which are
              pieces of the UI like buttons or forms.
            </li>
            <li>
              <strong>Virtual DOM:</strong> React creates an in-memory copy of the DOM and efficiently updates only the
              changed parts.
            </li>
            <li>
              <strong>React Rendering:</strong> Components are rendered and injected into the real DOM, usually inside a{" "}
              <code className="bg-gray-200 p-1 rounded">&lt;div id="root"&gt;</code>.
            </li>
            <li>
              <strong>Development Server:</strong> Tools like CRA or Vite provide live-reloading during development.
            </li>
            <li>
              <strong>Bundling and Transpiling:</strong> Tools like Webpack bundle files, and Babel transpiles modern
              JavaScript (e.g., JSX) into plain JavaScript.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-l from-green-50 via-teal-50 to-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaCheckCircle className="mr-2 text-green-600" /> Conclusion
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>CRA:</strong> Easiest and beginner-friendly.
            </li>
            <li>
              <strong>Vite:</strong> Faster and better for modern apps.
            </li>
            <li>
              <strong>Manual Setup:</strong> Best for advanced users who need complete control.
            </li>
          </ul>
          <p className="mt-4">
            Choose the method that suits your project needs and skill level. React makes building dynamic UIs simpler
            and faster!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} ReactJS Concepts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Documentation;
