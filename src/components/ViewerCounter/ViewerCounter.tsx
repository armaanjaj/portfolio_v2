"use client";
import React from "react";
import useViewerCounter from "@/hooks/useViewerCounter";
import { MiniBarLoader } from "../Loaders";

const ViewerCounter = () => {
    const { viewerNumber, getOrdinalSuffix } = useViewerCounter();

    return (
        <div className="relative px-3 py-2 h-full w-full flex flex-col justify-center items-center gap-2">
            {viewerNumber === null ? (
                <MiniBarLoader />
            ) : (
                <div className="text-center">
                    {viewerNumber ? (
                        <p className="font-semibold text-purple-400 text-md">
                            {`You are the ${viewerNumber}${getOrdinalSuffix(
                                Number(viewerNumber)
                            )} viewer.`}
                        </p>
                    ) : (
                        <p className="font-semibold text-purple-400 text-md">
                            Could not fetch viewer number.
                        </p>
                    )}
                </div>
            )}
            <span className="text-lg lg:hidden 2xl:block text-gray-300 text-center">
                I hope you are liking it here.
            </span>
        </div>
    );
};

export default ViewerCounter;
