import { useEffect } from "react";
import { useOverlay } from "@/context/OverlayContext";

const useOverlayLogic = () => {
    const { isOverlayVisible, overlayContent, hideOverlay } = useOverlay();

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

    return { isOverlayVisible, overlayContent, hideOverlay };
};

export default useOverlayLogic;
