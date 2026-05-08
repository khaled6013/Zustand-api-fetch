import React from "react";

const Messages = () => {
  const messages = [
    {
      id: 1,
      name: "Alex Johnson",
      message: "Hey, can you review the new dashboard design?",
      time: "2 min ago",
      img: "https://i.pravatar.cc/100?img=11",
      online: true,
    },

    {
      id: 2,
      name: "Sarah Smith",
      message: "The client meeting is scheduled for tomorrow.",
      time: "10 min ago",
      img: "https://i.pravatar.cc/100?img=12",
      online: false,
    },

    {
      id: 3,
      name: "John Williams",
      message: "API integration has been completed successfully.",
      time: "30 min ago",
      img: "https://i.pravatar.cc/100?img=13",
      online: true,
    },

    {
      id: 4,
      name: "Emma Brown",
      message: "Can you send me the latest project files?",
      time: "1 hour ago",
      img: "https://i.pravatar.cc/100?img=14",
      online: false,
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Messages
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all conversations and team messages.
          </p>

        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl transition font-medium shadow-sm">
          New Message
        </button>

      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left Sidebar */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

          {/* Search */}
          <div className="p-5 border-b border-gray-100">

            <input
              type="text"
              placeholder="Search messages..."
              className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>

          {/* Message List */}
          <div className="divide-y divide-gray-100">

            {messages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-center gap-4 p-5 hover:bg-gray-50 transition cursor-pointer"
              >

                <div className="relative">

                  <img
                    src={msg.img}
                    alt={msg.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  {msg.online && (
                    <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}

                </div>

                <div className="flex-1 min-w-0">

                  <div className="flex items-center justify-between mb-1">

                    <h3 className="font-semibold text-gray-800 truncate">
                      {msg.name}
                    </h3>

                    <span className="text-xs text-gray-400">
                      {msg.time}
                    </span>

                  </div>

                  <p className="text-sm text-gray-500 truncate">
                    {msg.message}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Chat Area */}
        <div className="xl:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col">

          {/* Chat Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">

            <div className="flex items-center gap-4">

              <img
                src="https://i.pravatar.cc/100?img=11"
                alt=""
                className="w-14 h-14 rounded-full"
              />

              <div>

                <h2 className="font-bold text-gray-800 text-lg">
                  Alex Johnson
                </h2>

                <p className="text-sm text-green-500">
                  Online
                </p>

              </div>

            </div>

            <button className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-2xl transition text-sm font-medium">
              View Profile
            </button>

          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-6 space-y-5 overflow-auto">

            {/* Incoming */}
            <div className="flex items-start gap-3">

              <img
                src="https://i.pravatar.cc/100?img=11"
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <div className="bg-gray-100 px-5 py-3 rounded-2xl rounded-tl-sm max-w-md">

                <p className="text-gray-700">
                  Hey! Can you review the latest dashboard design?
                </p>

                <span className="text-xs text-gray-400 mt-2 block">
                  10:24 AM
                </span>

              </div>

            </div>

            {/* Outgoing */}
            <div className="flex justify-end">

              <div className="bg-blue-500 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-md">

                <p>
                  Sure! I’m checking it now. Looks really clean 🔥
                </p>

                <span className="text-xs text-blue-100 mt-2 block">
                  10:26 AM
                </span>

              </div>

            </div>

            {/* Incoming */}
            <div className="flex items-start gap-3">

              <img
                src="https://i.pravatar.cc/100?img=11"
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <div className="bg-gray-100 px-5 py-3 rounded-2xl rounded-tl-sm max-w-md">

                <p className="text-gray-700">
                  Awesome. Also check the mobile responsiveness.
                </p>

                <span className="text-xs text-gray-400 mt-2 block">
                  10:28 AM
                </span>

              </div>

            </div>

          </div>

          {/* Input */}
          <div className="p-5 border-t border-gray-100">

            <div className="flex items-center gap-4">

              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl transition font-medium">
                Send
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Messages;