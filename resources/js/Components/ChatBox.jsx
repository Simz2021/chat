import React, { useState, useEffect, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const ChatBox = ({ auth, messages }) => {
    const [messageInput, setMessageInput] = useState("");
    const [chatMessages, setChatMessages] = useState(messages);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToBottom();

    useEffect(() => {
        scrollToBottom();
    }, [chatMessages]);

    useEffect(() => {
        Pusher.logToConsole = true;

        // window.Echo = new Echo({
        //     broadcaster: "pusher",
        //     key: "bbdbdc9c506adc6577cf",
        //     cluster: "mt1",
        //     forceTLS: false,
        // });

        window.Echo.channel("chat").listen("MessageSent", (e) => {
            console.log("New Message", e);
            setChatMessages([...chatMessages, e.message]);
        });

        return () => {
            window.Echo.leaveChannel("chat");
        };
    }, [chatMessages]);

    const handleSendMessage = () => {
        Inertia.post("/send-message", {
            user_id: auth?.user?.id, // Replace with the actual user ID
            message: messageInput,
        });

        setMessageInput("");
    };

    return (
        <div className="flex flex-col h-full bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex-1 overflow-y-auto mb-4">
                {chatMessages.map((message) => (
                    <div
                        className={`flex justify-start  ${
                            message.user.id === auth?.user?.id
                                ? "justify-end"
                                : "justify-start"
                        }`}
                    >
                        <div
                            key={message.id}
                            className={`flex p-4 mb-2 rounded-lg ${
                                message.user.id === auth?.user?.id
                                    ? "bg-blue-500 text-white"
                                    : "bg-white text-black"
                            } shadow-md`}
                        >
                            <img
                                src={`storage/user.png`}
                                alt={`${message.user.name}'s avatar`}
                                className="w-10 h-10 rounded-full mr-4"
                            />
                            <div>
                                <div className="font-bold">
                                    {message.user.name}
                                </div>
                                <div className="text-sm">{message.message}</div>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-gray-200 flex items-center">
                <input
                    type="text"
                    placeholder="Type a message"
                    className="w-full p-2 border border-gray-300 rounded-lg mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                    onClick={handleSendMessage}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
