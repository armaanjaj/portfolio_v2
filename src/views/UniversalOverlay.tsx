import React from "react";
import { IoIosClose } from "react-icons/io";

interface UniversalOverlayTypes {
    isOpen: boolean;
    title: string;
    description: string;
    onClose: () => void;
}

const UniversalOverlay: React.FC<UniversalOverlayTypes> = ({
    isOpen,
    onClose,
    title,
    description,
}) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
                        <button
                            className="absolute top-2 right-2 text-gray-800 dark:text-gray-200"
                            onClick={onClose}
                        >
                            <IoIosClose className="text-3xl" />
                        </button>
                        <h4 className="font-bold tracking-wide text-gray-900 dark:text-white text-2xl mb-4">
                            {title}
                        </h4>
                        <p className="tracking-wide leading-relaxed text-sm text-gray-700 dark:text-gray-300">
                            {description}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default UniversalOverlay;
