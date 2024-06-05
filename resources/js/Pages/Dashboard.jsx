import React from "react";

const messages = [
    {
        id: 1,
        sender: "Alice",
        text: "Hello, how are you?",
        time: "10:00 AM",
        align: "left",
    },
    {
        id: 2,
        sender: "Bob",
        text: "I am fine, thank you! How about you?",
        time: "10:02 AM",
        align: "right",
    },
    {
        id: 3,
        sender: "Alice",
        text: "I am good too!",
        time: "10:03 AM",
        align: "left",
    },
];

function Test() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
                <div className="h-96 overflow-y-auto">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${
                                message.align === "right"
                                    ? "justify-end"
                                    : "justify-start"
                            } mb-2`}
                        >
                            <div
                                className={`max-w-xs p-3 rounded-lg shadow ${
                                    message.align === "right"
                                        ? "bg-green-100"
                                        : "bg-gray-100"
                                }`}
                            >
                                <div className="text-sm font-semibold">
                                    {message.sender}
                                </div>
                                <div className="text-sm">{message.text}</div>
                                <div className="text-xs text-gray-500 text-right">
                                    {message.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Type a message..."
                    />
                </div>
            </div>
        </div>
    );
}

export default Test;
