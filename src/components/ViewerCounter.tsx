"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface ViewerResponse {
    viewerNumber: number;
    token: string;
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
                const decoded: DecodedToken = jwtDecode(data.token);
                setViewerNumber(decoded.viewerNumber.toString() || "");
                Cookies.set("viewer_token", data.token, { expires: 1 / 48 });
            } catch (error) {
                console.error("Error fetching viewer number:", error);
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
                    setViewerNumber(decoded.viewerNumber.toString() || "");
                }
            } catch (error) {
                console.error("Error decoding token:", error);
                setViewerNumber("");
            }
        }
    }, []);

    return (
        <div className="px-3 py-2 flex flex-col justify-center items-center gap-2">
            {viewerNumber != "" && (
                <div className="text-center">
                    {viewerNumber ? (
                        <p className="font-semibold text-green-400 text-md">
                            {`You are the ${viewerNumber}${getOrdinalSuffix(
                                Number(viewerNumber)
                            )} viewer.`}
                        </p>
                    ) : (
                        <Loader />
                    )}
                </div>
            )}
            <span className="text-sm text-gray-300">
                I hope you are liking it here.
            </span>
        </div>
    );
};

const Loader = () => (
    <svg
        className="animate-spin h-5 w-5 text-green-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        ></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
        ></path>
    </svg>
);

export default ViewerCounter;
