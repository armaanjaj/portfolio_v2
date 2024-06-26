"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <>
            <div className="w-fit bg-white p-5 rounded text-black cursor-pointer" onClick={() => setTheme("dark")}>
                Toggle dark
            </div>
            <div className="w-fit bg-white p-5 rounded text-black cursor-pointer" onClick={() => setTheme("light")}>
                Toggle light
            </div>
        </>
    );
}
