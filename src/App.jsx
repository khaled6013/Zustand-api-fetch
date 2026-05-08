import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import useStore from "./store";

function UsersPage() {
  const { users, fetchUsers, loading } = useStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="p-4 md:p-6 overflow-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Team Members
      </h1>

      {loading && (
        <p className="text-gray-500">Loading...</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold shadow">
                {user.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  {user.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Team Member
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>

            <button className="mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="p-6 text-2xl font-bold">
      Welcome Home
    </div>
  );
}

function MessagesPage() {
  return (
    <div className="p-6 text-2xl font-bold">
      Messages Page
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="p-6 text-2xl font-bold">
      Settings Page
    </div>
  );
}

function Layout() {
  const navClass = ({ isActive }) =>
    `block p-3 rounded-xl transition ${
      isActive
        ? "bg-blue-500 text-white shadow"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">

        <div className="p-6 text-2xl font-bold text-blue-600">
          Dashboard
        </div>

        <nav className="flex flex-col gap-2 px-4">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/users" className={navClass}>
            Users
          </NavLink>

          <NavLink to="/messages" className={navClass}>
            Messages
          </NavLink>

          <NavLink to="/settings" className={navClass}>
            Settings
          </NavLink>
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex justify-between items-center">

          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-200 rounded-xl px-4 py-2 w-44 md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-gray-600 font-medium">
              Admin
            </span>

            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow">
              A
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;