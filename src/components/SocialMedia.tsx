import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { socialLinks } from "../../data";

const SocialMedia = () => {
    return (
        <BackgroundGradientAnimation className="grid grid-cols-2 grid-rows-2 gap-0 w-full h-full py-14 px-10">
            <div className="absolute -left-1 -bottom-4 text-4xl z-0 text-white opacity-40 font-bold uppercase">
                <span>socials</span>
            </div>

            {socialLinks.map(
                ({ href, label, target, icon: Icon, className, isCopy }, i) => (
                    <StyledSocialLinks
                        key={i}
                        href={href}
                        label={label}
                        target={target}
                        className={className}
                        isCopy={isCopy}
                    >
                        <Icon />
                    </StyledSocialLinks>
                )
            )}
        </BackgroundGradientAnimation>
    );
};

const StyledSocialLinks = ({
    children,
    label,
    href,
    target,
    className,
    isCopy,
}: {
    children: React.ReactNode;
    label: string;
    target: string;
    href: string;
    className?: string;
    isCopy?: boolean;
}) => {
    const [hovered, setHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide confirmation after 2 seconds
    };

    if (isCopy) {
        return (
            <button
                aria-label={label}
                onClick={handleCopy}
                className={`relative group rounded-full w-fit mx-auto bg-gray-900 p-2 text-white hover:bg-gray-800 transition-colors duration-300 text-3xl ${className}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {children}
                <AnimatePresence>
                    {hovered && !copied && (
                        <motion.div
                            initial={{ opacity: 0, x: -10, y: -10, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 1000,
                                    damping: 100,
                                },
                            }}
                            exit={{ opacity: 0, x: -10, y: -10, scale: 0.6 }}
                            className="absolute top-10 left-2 transform -translate-x-1/2 mt-2 flex flex-col items-center justify-center rounded-tl-none rounded-md bg-black z-50 shadow-xl px-4 py-2"
                        >
                            <div className="font-bold text-white relative z-30 text-sm">
                                Copy to clipboard
                            </div>
                        </motion.div>
                    )}
                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, x: -10, y: -10, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 1000,
                                    damping: 100,
                                },
                            }}
                            exit={{ opacity: 0, x: -10, y: -10, scale: 0.6 }}
                            className="absolute top-10 left-2 transform -translate-x-1/2 mt-2 flex flex-col items-center justify-center rounded-tl-none rounded-md bg-green-500 z-50 shadow-xl px-4 py-2"
                        >
                            <div className="font-bold text-white relative z-30 text-base">
                                Copied!
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        );
    }

    return (
        <Link
            href={href}
            aria-label={label}
            target={target}
            className={`rounded-full w-fit mx-auto bg-gray-900 p-2 text-white hover:bg-gray-800 transition-colors duration-300 text-3xl ${className}`}
        >
            {children}
        </Link>
    );
};

export default SocialMedia;
