"use client";

import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Map, { MapRef } from "react-map-gl";

const MAX_ZOOM = 10;
const MIN_ZOOM = 4;
const INITIAL_VIEW_STATE = {
    latitude: 51.0447,
    longitude: -114.0719,
    zoom: MAX_ZOOM,
};

const mapboxToken: string | undefined =
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Location() {
    const [currentZoom, setCurrentZoom] = useState<number>(MAX_ZOOM);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

    const mapRef = useRef<MapRef>(null);

    const { theme } = useTheme();

    const handleZoom = (zoomIn: boolean) => {
        if (!isButtonDisabled) {
            setCurrentZoom((prevZoom) => prevZoom + (zoomIn ? 1 : -1));
            zoomIn ? mapRef.current?.zoomIn() : mapRef.current?.zoomOut();
            disableButton();
        }
    };

    const disableButton = () => {
        setIsButtonDisabled(true);
        setTimeout(() => setIsButtonDisabled(false), 300);
    };

    return (
        <div className="relative w-full h-full">
            <Map
                mapboxAccessToken={mapboxToken}
                mapStyle={`mapbox://styles/mapbox/${
                    theme === "dark" ? "dark-v11" : "streets-v12"
                }`}
                ref={mapRef}
                scrollZoom={false}
                dragPan={false}
                doubleClickZoom={false}
                attributionControl={false}
                dragRotate={false}
                pitchWithRotate={false}
                touchZoomRotate={false}
                antialias={true}
                onLoad={() => setIsMapLoaded(true)}
                initialViewState={INITIAL_VIEW_STATE}
                maxZoom={MAX_ZOOM}
                minZoom={MIN_ZOOM}
            >
                {isMapLoaded && (
                    <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                        <button
                            className={cn(
                                "bg-black bg-opacity-50 backdrop-blur rounded-full p-2 text-white",
                                currentZoom === MIN_ZOOM
                                    ? "invisible"
                                    : "cancel-drag"
                            )}
                            aria-label="Zoom Out"
                            type="button"
                            onClick={() => handleZoom(false)}
                        >
                            <FaMinus />
                        </button>
                        <button
                            className={cn(
                                "bg-black bg-opacity-50 backdrop-blur rounded-full p-2 text-white",
                                currentZoom === MAX_ZOOM
                                    ? "invisible"
                                    : "cancel-drag"
                            )}
                            aria-label="Zoom In"
                            type="button"
                            onClick={() => handleZoom(true)}
                        >
                            <FaPlus />
                        </button>
                    </div>
                )}
            </Map>
        </div>
    );
}
