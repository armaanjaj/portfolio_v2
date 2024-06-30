"use client";

import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import {
    FaMapMarkerAlt,
    FaMinus,
    FaPlus,
    FaSearchLocation,
} from "react-icons/fa";
import Map, { MapRef } from "react-map-gl";

const MAX_ZOOM = 10;
const MIN_ZOOM = 4;
const INITIAL_VIEW_STATE = {
    latitude: 51.048583,
    longitude: -114.056033,
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
        <section className="relative w-full h-full group">
            <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center dark:bg-gray-800 bg-gray-300 bg-opacity-20 backdrop-blur transition-opacity duration-300 ease-in-out z-[2] text-2xl dark:text-white px-5 py-2 gap-5 group-hover:opacity-0 pointer-events-none text-black">
                <span className="text-center">
                    Hover to discover where I’m hiding!
                </span>
                <FaMapMarkerAlt className="z-10 text-red-500" />
            </div>
            <div className="w-full h-full opacity-100 z-[1] pointer-events-auto">
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
                        <div className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 absolute inset-x-3 bottom-3 flex items-center justify-between z-[3]">
                            <button
                                className={cn(
                                    "bg-black bg-opacity-50 backdrop-blur-[2px] rounded-full p-2 text-white",
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
                                    "bg-black bg-opacity-50 backdrop-blur-[2px] rounded-full p-2 text-white",
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
        </section>
    );
}
