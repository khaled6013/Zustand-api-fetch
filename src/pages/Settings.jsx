import React, { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your account preferences and dashboard settings.
        </p>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left Side */}
        <div className="xl:col-span-2 space-y-6">

          {/* Profile */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

            <div className="flex items-center gap-5 mb-8">

              <img
                src="https://i.pravatar.cc/150?img=15"
                alt=""
                className="w-24 h-24 rounded-full object-cover"
              />

              <div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Admin User
                </h2>

                <p className="text-gray-500">
                  admin@example.com
                </p>

                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-2xl transition">
                  Change Photo
                </button>

              </div>

            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  defaultValue="Admin User"
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  defaultValue="admin@example.com"
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  defaultValue="+880 1234 567890"
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>

                <input
                  type="text"
                  defaultValue="Administrator"
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

            </div>

            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl transition font-medium">
              Save Changes
            </button>

          </div>

          {/* Security */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Security
            </h2>

            <div className="space-y-5">

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

            </div>

            <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl transition font-medium">
              Update Password
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="space-y-6">

          {/* Preferences */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Preferences
            </h2>

            <div className="space-y-6">

              {/* Dark Mode */}
              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold text-gray-800">
                    Dark Mode
                  </h3>

                  <p className="text-sm text-gray-500">
                    Enable dark dashboard theme
                  </p>

                </div>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                    darkMode ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >

                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                      darkMode ? "translate-x-7" : ""
                    }`}
                  ></div>

                </button>

              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold text-gray-800">
                    Notifications
                  </h3>

                  <p className="text-sm text-gray-500">
                    Receive email notifications
                  </p>

                </div>

                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                    notifications ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >

                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                      notifications ? "translate-x-7" : ""
                    }`}
                  ></div>

                </button>

              </div>

            </div>

          </div>

          {/* System Info */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              System Info
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Version
                </span>

                <span className="font-medium text-gray-800">
                  v2.1.0
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Last Update
                </span>

                <span className="font-medium text-gray-800">
                  2 Days Ago
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Server Status
                </span>

                <span className="text-green-500 font-medium">
                  Online
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Settings;