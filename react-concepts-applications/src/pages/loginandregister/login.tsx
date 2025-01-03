import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-200">
            {/* Header */}
            <h1 className="text-4xl font-bold text-indigo-700 mb-8">Welcome Back!</h1>
            <p className="text-lg text-gray-700 mb-6">Log in to access your account</p>

            {/* Form */}
            <form className="bg-white p-8 rounded-lg shadow-lg w-96">
                {/* Email */}
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                </div>

                {/* Forgot Password */}
                <div className="text-right mb-6">
                    <a
                        href="/forgot-password"
                        className="text-blue-600 text-sm font-medium hover:underline"
                    >
                        Forgot Password?
                    </a>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-blue-400 transition-all"
                >
                    Login
                </button>
            </form>

            {/* Footer */}
            <p className="text-sm text-gray-700 mt-6">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-600 font-medium hover:underline">
                    Register Now
                </a>
            </p>
        </div>
    );
};

export default Login;
