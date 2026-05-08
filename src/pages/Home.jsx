import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 md:p-10 text-white shadow-lg">

        <p className="uppercase tracking-widest text-sm text-blue-100 mb-3">
          Dashboard Overview
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome Back, Admin 👋
        </h1>

        <p className="text-blue-100 text-base md:text-lg max-w-2xl mb-8">
          Manage your users, messages, and settings from one clean and modern dashboard.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/users"
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            View Users
          </Link>

          <Link
            to="/messages"
            className="border border-white/40 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            Messages
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <p className="text-gray-500 text-sm mb-2">
            Total Users
          </p>

          <h2 className="text-3xl font-bold text-gray-800">
            120
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <p className="text-gray-500 text-sm mb-2">
            Active Projects
          </p>

          <h2 className="text-3xl font-bold text-gray-800">
            15
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <p className="text-gray-500 text-sm mb-2">
            Messages
          </p>

          <h2 className="text-3xl font-bold text-gray-800">
            245
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <p className="text-gray-500 text-sm mb-2">
            Revenue
          </p>

          <h2 className="text-3xl font-bold text-gray-800">
            $12.4K
          </h2>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-3xl p-6 mt-8 shadow-sm border border-gray-100">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Recent Activity
          </h2>

          <button className="text-blue-600 hover:underline text-sm">
            View All
          </button>
        </div>

        <div className="space-y-5">

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              A
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Alex updated the dashboard
              </h3>

              <p className="text-sm text-gray-500">
                2 minutes ago
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
              J
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                John added a new user
              </h3>

              <p className="text-sm text-gray-500">
                10 minutes ago
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
              S
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Sarah sent new messages
              </h3>

              <p className="text-sm text-gray-500">
                1 hour ago
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;