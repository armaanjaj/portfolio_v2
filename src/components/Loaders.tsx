import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MiniBarLoader = () => {
    return (
        <div className="relative w-[90%] mx-auto h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-purple-400 animate-pulse rounded-lg" />
        </div>
    );
};

export const CircleLoader = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"></div>
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            </div>
        </div>
    );
};

export const FullScreenLoader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(interval);
                return 100;
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className="relative w-1/2 h-16 bg-gray-900 rounded-xl overflow-hidden bg-opacity-50 backdrop-blur">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-900"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 rounded-xl" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center flex-row w-full text-gray-300 text-xl font-semibold z-10">
                    <AnimatePresence>
                        {progress > 0 && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-sm"
                            >
                                Loading Your Experience...
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
                <div className="absolute inset-0 border-2 border-purple-700 rounded-xl opacity-50" />
                <div className="absolute inset-0 backdrop-blur-sm rounded-xl" />
            </div>
        </motion.div>
    );
};
