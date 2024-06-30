import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
// import BorderButton from "./BorderButton";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can add the logic to handle the email submission
        // For example, sending it to an API endpoint
        setSubmitted(true);
    };

    return (
        <div className="p-6 dark:bg-[#F7F2F2] bg-gray-900 rounded-lg shadow-md w-full h-full max-w-md">
            <h2 className="text-2xl font-semibold dark:text-gray-800 text-gray-200 mb-4">
                Subscribe to my Newsletter
            </h2>
            <p className="dark:text-gray-600 text-gray-400 mb-6">
                Get the latest updates right in your inbox.
            </p>
            {submitted ? (
                <div className="text-green-500 text-lg">
                    Thank you for subscribing!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        className="pb-1 px-1 bg-transparent text-gray-200 dark:text-gray-800 border-b border-gray-300 dark:border-gray-700 outline-none"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {/* <a href="">
                        <BorderButton
                            title="Subscribe"
                            icon={<FaLocationArrow />}
                            position="right"
                            otherClasses="dark:hover:bg-[#ffffff] dark:bg-[#F7F2F2] hover:bg-gray-800 transition-colors bg-gray-900 dark:text-gray-800 text-gray-200"
                        />
                    </a> */}
                    <button type="submit" className="px-6 py-2 rounded-3xl dark:bg-[#ffffff] hover:bg-gray-800 transition-colors bg-gray-900 dark:text-gray-800 text-gray-200 w-fit border-2 flex flex-row justify-center items-center gap-2 flex-nowrap">
                        Subscribe <IoSend  />
                    </button>
                </form>
            )}
        </div>
    );
};

export default Newsletter;
