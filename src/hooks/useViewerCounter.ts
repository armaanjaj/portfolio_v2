import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

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

const useViewerCounter = () => {
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

    return { viewerNumber, getOrdinalSuffix };
};

export default useViewerCounter;
