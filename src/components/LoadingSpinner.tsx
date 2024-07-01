import React from "react";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"></div>
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
