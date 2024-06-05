import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import ChatBox from "../Components/ChatBox";
import { Inertia } from "@inertiajs/inertia";

const ChatPage = () => {
    const { auth, messages, currentUser } = usePage().props;

    const logout = (e) => {
        e.preventDefault();
        Inertia.get("/logout");
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/4">
                <div className="flex justify-start mx-8 my-4">
                    <span>
                        Welcome, <b>{auth?.user?.name}</b>
                    </span>
                </div>
            </div>
            <div className="w-1/2">
                <ChatBox
                    auth={auth}
                    messages={messages}
                    currentUser={currentUser}
                />
            </div>
            <div className="w-1/4">
                <div className="flex justify-end mx-8 my-4">
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white p-2 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
