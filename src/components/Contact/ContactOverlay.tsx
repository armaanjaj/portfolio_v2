import React from "react";
import { socialLinks } from "../../../data";

const ContactOverlay = () => {
    return (
        <div className="h-full w-full flex flex-col justify-start items-start gap-5 relative">
            <span className="font-bold uppercase text-3xl">Contact</span>
            <div>Let's get in touch and create something amazing together!</div>
            <div className="flex flex-row justify-center items-center gap-8 w-full h-1/2">
                {socialLinks.map(
                    (link, index) =>
                        !link.isCopy && (
                            <a
                                key={index}
                                href={link.href}
                                target={link.target}
                                className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition duration-300"
                            >
                                <link.icon className="w-10 h-10" />
                            </a>
                        )
                )}
            </div>
        </div>
    );
};

export default ContactOverlay;
