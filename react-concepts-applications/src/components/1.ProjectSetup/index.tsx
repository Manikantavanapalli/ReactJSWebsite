import React from "react";
import { FaReact, FaTools, FaCog, FaArrowRight, FaCheckCircle, FaCogs, FaWrench, FaCubes, FaNetworkWired, FaPlay, FaRocket } from "react-icons/fa";

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
        {/* Section: How to Install Node.js and npm */}
        <section className="mb-12 p-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
            <FaCogs className="mr-2 text-green-500" />
            How to Install Node.js and npm
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Installation Steps */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <FaArrowRight className="mr-2 text-indigo-600" />
                Steps to Install
              </h3>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li>
                  Visit the official Node.js website:{" "}
                  <a
                    href="https://nodejs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    https://nodejs.org
                  </a>
                </li>
                <li>Download the LTS (Long-Term Support) version for stability.</li>
                <li>Run the installer and follow the prompts.</li>
                <li>Ensure the checkbox to install npm along with Node.js is selected.</li>
              </ol>
              <p className="text-gray-700">
                <strong>Note:</strong> For macOS or Linux, you can also use a package
                manager like Homebrew or apt.
              </p>
            </div>

            {/* Checking Versions */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <FaArrowRight className="mr-2 text-indigo-600" />
                How to Check Versions
              </h3>
              <p className="mb-4">
                After installation, verify the versions of Node.js and npm using the
                following commands:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  Check Node.js version:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">node -v</code>
                </li>
                <li>
                  Check npm version:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">npm -v</code>
                </li>
              </ul>
              <p className="text-gray-700">
                The version numbers confirm successful installation.
              </p>
            </div>
          </div>

          {/* Importance of Node.js and npm */}
          <div className="mt-8 bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Why Are Node.js and npm Important?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Node.js:</strong> A runtime environment for executing JavaScript
                code outside the browser. Essential for modern web development,
                especially backend services and tools.
              </li>
              <li>
                <strong>npm (Node Package Manager):</strong> A tool to install, manage,
                and share JavaScript libraries and frameworks. Crucial for managing
                project dependencies.
              </li>
              <li>
                Together, they form the backbone of modern JavaScript development,
                enabling efficient workflows and scalable applications.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Ways to Set Up a ReactJS Project */}
        <section className="mb-12 p-6 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
            <FaTools className="mr-2 text-pink-500" />
            Ways to Set Up a ReactJS Project
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Create React App (CRA) */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <FaArrowRight className="mr-2 text-indigo-600" />
                A. Using Create React App (CRA)
              </h3>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li>Open your terminal.</li>
                <li>
                  Run:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    npx create-react-app my-app
                  </code>
                </li>
                <li>
                  Navigate:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">cd my-app</code>
                </li>
                <li>
                  Start:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">npm start</code>
                </li>
              </ol>
              <p className="text-gray-700">
                <strong>When to Use CRA:</strong> Perfect for beginners, with built-in
                Webpack and Babel for hassle-free setup.
              </p>
            </div>

            {/* Vite */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <FaArrowRight className="mr-2 text-indigo-600" />
                B. Using Vite
              </h3>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li>Open your terminal.</li>
                <li>
                  Run:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    npm create vite@latest my-app --template react
                  </code>
                </li>
                <li>
                  Navigate:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">cd my-app</code>
                </li>
                <li>
                  Install:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">npm install</code>
                </li>
                <li>
                  Start:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code>
                </li>
              </ol>
              <p className="text-gray-700">
                <strong>When to Use Vite:</strong> Faster and ideal for small to medium
                projects needing quick builds and hot module replacement (HMR).
              </p>
            </div>

            {/* Manual Setup */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <FaArrowRight className="mr-2 text-indigo-600" />
                C. Manual Setup
              </h3>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li>Create a new folder and open it in the terminal.</li>
                <li>
                  Initialize:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">npm init -y</code>
                </li>
                <li>
                  Install React:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    npm install react react-dom
                  </code>
                </li>
                <li>
                  Add Webpack and Babel:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    npm install webpack webpack-cli webpack-dev-server babel-loader
                    @babel/core @babel/preset-react html-webpack-plugin --save-dev
                  </code>
                </li>
                <li>Create and configure necessary files.</li>
                <li>
                  Start:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">npx webpack serve</code>
                </li>
              </ol>
              <p className="text-gray-700">
                <strong>When to Use Manual Setup:</strong> Best for advanced users
                requiring full control over project configuration.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Key Tools in Modern JavaScript Development */}
        <section className="mb-12 p-6 bg-gradient-to-r from-yellow-50 via-green-50 to-blue-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
            <FaWrench className="mr-2 text-green-500" />
            Understanding Key Tools in Modern JavaScript Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Webpack */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <FaCubes className="mr-2 text-indigo-600" />
                Webpack
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>What it is:</strong> A module bundler for JavaScript applications.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>How it works:</strong> Webpack bundles your JavaScript, CSS, and other assets into a single file (or multiple files) to optimize performance.
              </p>
              <p className="text-gray-700">
                <strong>Where it's used:</strong> Used in large applications to manage dependencies and improve load times.
              </p>
            </div>

            {/* npm */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <FaNetworkWired className="mr-2 text-indigo-600" />
                npm (Node Package Manager)
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>What it is:</strong> A package manager for JavaScript.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>How it works:</strong> npm allows you to install, update, and manage libraries or dependencies for your project.
              </p>
              <p className="text-gray-700">
                <strong>Where it's used:</strong> Essential for managing third-party libraries and tools in any Node.js project.
              </p>
            </div>

            {/* npx */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <FaPlay className="mr-2 text-indigo-600" />
                npx
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>What it is:</strong> A tool to execute Node.js packages without installing them globally.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>How it works:</strong> npx downloads and runs a package temporarily, saving disk space.
              </p>
              <p className="text-gray-700">
                <strong>Where it's used:</strong> Used for running CLI commands like <code>npx create-react-app</code>.
              </p>
            </div>

            {/* Vite */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold flex items-center mb-4">
                <FaRocket className="mr-2 text-indigo-600" />
                Vite
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>What it is:</strong> A fast build tool and development server.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>How it works:</strong> Vite uses native ES modules in the browser for faster builds and hot module replacement.
              </p>
              <p className="text-gray-700">
                <strong>Where it's used:</strong> Ideal for modern frontend projects where performance is critical.
              </p>
            </div>
          </div>

          {/* Additional Tools */}
          <div className="mt-8 bg-gradient-to-l from-purple-100 via-yellow-50 to-green-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Additional Tools You Should Know
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Babel:</strong> A JavaScript compiler that converts ES6+ code into backwards-compatible JavaScript for older browsers.
              </li>
              <li>
                <strong>ESLint:</strong> A linting tool to analyze and fix issues in your JavaScript code.
              </li>
              <li>
                <strong>Prettier:</strong> A code formatter to ensure consistent code style.
              </li>
              <li>
                <strong>Parcel:</strong> A zero-config bundler alternative to Webpack for small projects.
              </li>
            </ul>
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
