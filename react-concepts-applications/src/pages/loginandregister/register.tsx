import React from 'react';

const Register: React.FC = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-200">
            {/* Header */}
            <h1 className="text-4xl font-bold text-indigo-700 mb-8">Create an Account</h1>

            {/* Form */}
            <form className="bg-white p-8 rounded-lg shadow-lg w-96">
                {/* Full Name */}
                <div className="mb-4">
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
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

                {/* Confirm Password */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="+91"
                        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-blue-400 transition-all"
                >
                    Register
                </button>
            </form>

            {/* Footer */}
            <p className="text-sm text-gray-700 mt-6">
                Already have an account?{" "}
                <a href="/login" className="text-blue-600 font-medium hover:underline">
                    Login
                </a>
            </p>
        </div>
    );
};

export default Register;
