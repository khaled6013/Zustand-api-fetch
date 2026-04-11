import { useEffect } from "react";
import useStore from "./store";

function App() {
  const { users, fetchUsers, loading } = useStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="hidden md:block w-60 bg-white border-r border-gray-200">

        <div className="p-6 font-bold text-xl text-blue-600">
          Dashboard
        </div>

        <nav className="space-y-2 px-4 text-gray-600">
          <p className="p-2 hover:bg-gray-100 rounded cursor-pointer">Home</p>
          <p className="p-2 hover:bg-gray-100 rounded cursor-pointer">Users</p>
          <p className="p-2 hover:bg-gray-100 rounded cursor-pointer">Messages</p>
          <p className="p-2 hover:bg-gray-100 rounded cursor-pointer">Settings</p>
        </nav>

      </div>

      <div className="flex-1 flex flex-col">

        <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex justify-between items-center">

          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-200 rounded-lg px-4 py-2 w-40 md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-gray-600">Admin</span>

            <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center">
              A
            </div>
          </div>

        </div>

        {/* Content */}
        <div className="p-4 md:p-6 overflow-auto">

          <h1 className="text-xl md:text-2xl font-bold mb-6">
            Team Members
          </h1>

          {loading && <p>Loading...</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition"
              >
                <div className="w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">
                  {user.name.charAt(0)}
                </div>

                <h3 className="font-semibold text-gray-800">
                  {user.name}
                </h3>

                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-500">{user.phone}</p>

                <button className="mt-3 text-blue-600 text-sm hover:underline">
                  View Profile
                </button>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;