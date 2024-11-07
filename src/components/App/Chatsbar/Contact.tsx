import React from "react";

const Contact = ({
  src = "/api/placeholder/32/32",
  contactName = "John Doe",
  lastMsg = "Hello there!",
}) => {
  return (
    <button className="w-full text-left p-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-gray-50 rounded-lg transition-all duration-200 group">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            className="rounded-full object-cover w-12 h-12 border-2 border-transparent group-hover:border-indigo-200 transition-all duration-200"
            src={src}
            alt={contactName}
          />
          <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
            {contactName}
          </h4>
          <p className="text-sm text-gray-500 truncate">{lastMsg}</p>
        </div>
      </div>
    </button>
  );
};

export default Contact;
