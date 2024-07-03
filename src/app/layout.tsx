import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/utils/Provider";
import { OverlayProvider } from "@/context/OverlayContext";
import Overlay from "@/components/Overlays/Overlay";

const robotoCondensed = Roboto_Condensed({
    subsets: ["latin"],
    weight: ["500"],
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
    title: "Armaan Jaj - Developer, Designer",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning lang="en">
            <body className={robotoCondensed.className}>
                {/* <body> */}
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <OverlayProvider>
                        {children}
                        <Overlay />
                    </OverlayProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

