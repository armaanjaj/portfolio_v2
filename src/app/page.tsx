"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (<div>Loading...</div>);
    }

    return (
        <main
            className={`relative h-screen w-screen ${
                theme === "dark" || resolvedTheme === "dark"
                    ? "bg-black"
                    : "bg-[#F7F2F2]"
            }  flex justify-center items-center flex-col overflow-hidden mx-auto`}
        >
            <Hero />
        </main>
    );
}

