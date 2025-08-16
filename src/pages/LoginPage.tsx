import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white/30 rounded-2xl shadow-2xl backdrop-blur-lg flex flex-col items-center justify-center">
        <h2 className="text-4xl font-extrabold text-center text-white mb-7 drop-shadow-2xl tracking-tight">
          Welcome Back!
        </h2>
        <form className="space-y-6 w-full">
          <div className="flex items-center bg-white/80 rounded-lg px-4 py-3 shadow-inner focus-within:ring-2 focus-within:ring-pink-400">
            <FaUser className="text-pink-400 mr-3 text-xl" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none text-gray-900 font-medium placeholder:text-gray-500"
            />
          </div>
          <div className="flex items-center bg-white/80 rounded-lg px-4 py-3 shadow-inner focus-within:ring-2 focus-within:ring-pink-400">
            <FaLock className="text-pink-400 mr-3 text-xl" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none text-gray-900 font-medium placeholder:text-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 border border-white/20"
          >
            Log In
          </button>
        </form>
        <div className="mt-7 text-center text-white opacity-90">
          <span>Don’t have an account? </span>
          <a
            href="/signup"
            className="underline text-pink-200 font-semibold hover:text-white transition-colors"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}