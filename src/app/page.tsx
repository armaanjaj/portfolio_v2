"use client";
import Hero from "@/components/Hero";
import { FullScreenLoader } from "@/components/Loaders";
import ModeToggle from "@/components/ModeToggle";
import StickyCursor from "@/components/StickyCursor";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (loading || !mounted) {
        return <FullScreenLoader />;
    } else {
        return (
            <main
                className={`relative min-h-screen w-screen ${
                    theme === "dark" || resolvedTheme === "dark"
                        ? "bg-[#090C10]"
                        : "bg-[#F7F2F2]"
                }  flex justify-center items-center flex-col overflow-y-auto overflow-x-hidden mx-auto`}
            >
                <div className="min-h-screen w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                    <div className="relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                        <Hero />
                    </div>
                </div>
                <StickyCursor />
                <div className="hidden absolute top-5 right-5 md:flex flex-col justify-center items-center">
                    <ModeToggle />
                </div>
            </main>
        );
    }
}

