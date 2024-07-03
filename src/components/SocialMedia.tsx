import Link from "next/link";
import React, { useState } from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { socialLinks } from "../../data";

const SocialMedia = () => {
    return (
        <BackgroundGradientAnimation className="flex flex-col justify-center items-center w-full h-full py-[10%] px-[10%]">
            <div className="absolute -left-1 -bottom-4 text-4xl z-0 text-white opacity-40 font-bold uppercase">
                <span>socials</span>
            </div>

            {socialLinks
                .filter((link) => link.isCopy)
                .map(({ href, label, icon: Icon, className, isCopy }, i) => (
                    <StyledSocialLinks
                        key={i}
                        href={href}
                        label={label}
                        className={className}
                        isCopy={isCopy}
                    >
                        <Icon className="text-2xl md:text-base" />
                        <span className="text-2xl md:text-base">Copy Email</span>
                    </StyledSocialLinks>
                ))}

            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                {socialLinks
                    .filter((link) => !link.isCopy)
                    .map(
                        ({ href, label, target, icon: Icon, className }, i) => (
                            <StyledSocialLinks
                                key={i}
                                href={href}
                                label={label}
                                target={target}
                                className={className}
                            >
                                <Icon className="text-2xl md:text-base" />
                            </StyledSocialLinks>
                        )
                    )}
            </div>
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
    target?: string;
    href: string;
    className?: string;
    isCopy?: boolean;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (isCopy) {
        return (
            <button
                aria-label={label}
                onClick={handleCopy}
                className={`relative flex items-center group rounded-lg p-1 w-fit mx-auto bg-white text-gray-900 transition-colors duration-300 hover:text-gray-500 ${className}`}
            >
                {children}
                {copied && (
                    <span className="absolute top-full mt-2 p-1 bg-green-500 text-white text-sm rounded-md shadow-lg z-10">
                        Copied!
                    </span>
                )}
            </button>
        );
    }

    return (
        <Link
            href={href}
            aria-label={label}
            target={target}
            className={`relative flex items-center group rounded-lg p-1 w-fit mx-auto bg-white text-gray-900 transition-colors duration-300  hover:text-gray-500 ${className}`}
        >
            {children}
        </Link>
    );
};

export default SocialMedia;
