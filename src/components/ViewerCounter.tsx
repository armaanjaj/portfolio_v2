"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { MiniBarLoader } from "./Loaders";

interface ViewerResponse {
    savedViewer: {
        viewerNumber: number;
        token: string;
    };
}

interface DecodedToken {
    viewerNumber: number;
    exp: number;
    iat: number;
}

const getOrdinalSuffix = (num: number): string => {
    if (num % 10 === 1 && num % 100 !== 11) {
        return "st";
    } else if (num % 10 === 2 && num % 100 !== 12) {
        return "nd";
    } else if (num % 10 === 3 && num % 100 !== 13) {
        return "rd";
    } else {
        return "th";
    }
};

const ViewerCounter = () => {
    const [viewerNumber, setViewerNumber] = useState<string | null>(null);

    useEffect(() => {
        const fetchViewerNumber = async () => {
            try {
                const { data } = await axios.get<ViewerResponse>(
                    "/api/viewerCounter"
                );
                const decoded: DecodedToken = jwtDecode(data.savedViewer.token);
                setViewerNumber(decoded.viewerNumber.toString());
                Cookies.set("viewer_token", data.savedViewer.token, {
                    expires: 1 / 48,
                });
            } catch (error) {
                setViewerNumber("");
            }
        };

        const token = Cookies.get("viewer_token");

        if (!token) {
            fetchViewerNumber();
        } else {
            try {
                const decoded: DecodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                if (decoded.exp < currentTime) {
                    fetchViewerNumber();
                } else {
                    setViewerNumber(decoded.viewerNumber.toString());
                }
            } catch (error) {
                setViewerNumber("");
            }
        }
    }, []);

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

const Loader = () => (
    <div className="relative w-[90%] mx-auto h-4 bg-gray-200 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-purple-400 animate-pulse rounded-lg" />
    </div>
);

export default ViewerCounter;
