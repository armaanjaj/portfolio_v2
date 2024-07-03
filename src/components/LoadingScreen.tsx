import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
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
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 rounded-xl"/ >
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

export default LoadingScreen;
