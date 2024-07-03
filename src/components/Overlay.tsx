"use client";
import React, { useEffect } from "react";
import { useOverlay } from "@/context/OverlayContext";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Overlay = () => {
    const { isOverlayVisible, overlayContent, hideOverlay } = useOverlay();

    const handleClose = () => {
        hideOverlay();
    };

    useEffect(() => {
        if (isOverlayVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOverlayVisible]);

    return (
        <AnimatePresence>
            {isOverlayVisible && (
                <motion.div
                    className="fixed inset-0 p-0 shadow-md bg-black bg-opacity-50 backdrop-blur flex justify-center items-center w-full h-full z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                        onClick={handleClose}
                        className="absolute top-5 right-5 text-xl font-bold dark:text-black text-white p-2 bg-gray-900 dark:bg-white rounded-full"
                    >
                        <IoClose className="text-2xl font-bold" />
                    </button>
                    <motion.div
                        className="bg-white dark:bg-gray-900 dark:bg-opacity-95 py-3 px-5 pr-1 rounded-lg shadow-lg relative w-[90vw] h-[75vh] md:w-[90vw] md:h-[90vh] xl:w-[80vw] xl:h-[80vh] border dark:border-gray-800 border-gray-400 overflow-hidden"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="overflow-y-auto styledScrollBar h-full w-full">
                            {overlayContent}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Overlay;
