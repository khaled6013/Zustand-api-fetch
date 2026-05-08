import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WeeklyPerformance from "../components/WeeklyPerformance";

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1500;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2 className="text-3xl font-bold text-gray-800">
      {count}
    </h2>
  );
};

const Home = () => {
  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-[32px] p-8 md:p-12 text-white shadow-xl">

        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <p className="uppercase tracking-[4px] text-sm text-blue-100 mb-4">
            Modern Dashboard
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Welcome Back, Admin 👋
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mb-8 leading-relaxed">
            Monitor analytics, manage users, track activities, and control your entire system from one premium dashboard interface.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/users"
              className="bg-white text-blue-600 px-7 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition"
            >
              Explore Users
            </Link>

            <button className="border border-white/30 px-7 py-3 rounded-2xl font-semibold hover:bg-white/10 transition">
              Analytics Report
            </button>

          </div>

        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-gray-500 text-sm">
                Total Users
              </p>

              <Counter end={120} />

            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
              👥
            </div>

          </div>

          <p className="text-sm text-green-500 font-medium">
            +12% this month
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-gray-500 text-sm">
                Projects
              </p>

              <Counter end={15} />

            </div>

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
              🚀
            </div>

          </div>

          <p className="text-sm text-green-500 font-medium">
            +8% this week
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-gray-500 text-sm">
                Messages
              </p>

              <Counter end={245} />

            </div>

            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl">
              💬
            </div>

          </div>

          <p className="text-sm text-green-500 font-medium">
            +24 today
          </p>

        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-gray-500 text-sm">
                Revenue
              </p>

              <h2 className="text-3xl font-bold text-gray-800">
                $12.4K
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
              💰
            </div>

          </div>

          <p className="text-sm text-green-500 font-medium">
            +18% growth
          </p>

        </div>

      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        {/* Animated Performance */}
        <WeeklyPerformance />

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl transition font-medium">
              Add New User
            </button>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-2xl transition">
              Create Project
            </button>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-2xl transition">
              Send Message
            </button>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-2xl transition">
              Generate Report
            </button>

          </div>

        </div>

      </div>

      {/* Tasks + Notifications */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        {/* Tasks */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold text-gray-800">
                Today's Tasks
              </h2>

              <p className="text-sm text-gray-500">
                Manage your workflow
              </p>

            </div>

            <button className="text-blue-600 text-sm hover:underline">
              View All
            </button>

          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">

              <div>

                <h3 className="font-semibold text-gray-800">
                  Update Dashboard UI
                </h3>

                <p className="text-sm text-gray-500">
                  Due Today
                </p>

              </div>

              <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                Completed
              </span>

            </div>

            <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">

              <div>

                <h3 className="font-semibold text-gray-800">
                  Fix API Issues
                </h3>

                <p className="text-sm text-gray-500">
                  Due Tomorrow
                </p>

              </div>

              <span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">
                Pending
              </span>

            </div>

            <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">

              <div>

                <h3 className="font-semibold text-gray-800">
                  Team Meeting
                </h3>

                <p className="text-sm text-gray-500">
                  4:00 PM
                </p>

              </div>

              <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                Scheduled
              </span>

            </div>

          </div>

        </div>

        {/* Notifications */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold text-gray-800">
                Notifications
              </h2>

              <p className="text-sm text-gray-500">
                Latest updates
              </p>

            </div>

            <button className="text-blue-600 text-sm hover:underline">
              Clear All
            </button>

          </div>

          <div className="space-y-5">

            <div className="flex gap-4">

              <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">
                🔔
              </div>

              <div>

                <h3 className="font-semibold text-gray-800">
                  New project created
                </h3>

                <p className="text-sm text-gray-500">
                  5 minutes ago
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <div className="w-11 h-11 rounded-2xl bg-green-100 flex items-center justify-center">
                ✅
              </div>

              <div>

                <h3 className="font-semibold text-gray-800">
                  Payment received
                </h3>

                <p className="text-sm text-gray-500">
                  1 hour ago
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <div className="w-11 h-11 rounded-2xl bg-purple-100 flex items-center justify-center">
                💬
              </div>

              <div>

                <h3 className="font-semibold text-gray-800">
                  12 new messages
                </h3>

                <p className="text-sm text-gray-500">
                  Today
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;