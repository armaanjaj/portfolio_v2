import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 scale-125 max-h-fit">
            <Link
                href="https://www.linkedin.com/in/yourprofile"
                aria-label="LinkedIn"
                className="rounded-full bg-gray-600 p-2 text-white hover:bg-purple-600 transition-colors duration-300 text-xl"
            >
                <FaLinkedin />
            </Link>
            <Link
                href="https://www.instagram.com/yourprofile"
                aria-label="Instagram"
                className="rounded-full bg-gray-600 p-2 text-white hover:bg-purple-600 transition-colors duration-300 text-xl"
            >
                <FaInstagram />
            </Link>
            <Link
                href="https://www.github.com/yourprofile"
                aria-label="GitHub"
                className="rounded-full bg-gray-600 p-2 text-white hover:bg-purple-600 transition-colors duration-300 text-xl"
            >
                <FaGithub />
            </Link>
            <Link
                href="mailto:youremail@example.com"
                aria-label="Email"
                className="rounded-full bg-gray-600 p-2 text-white hover:bg-purple-600 transition-colors duration-300 text-xl"
            >
                <FaEnvelope />
            </Link>
        </div>
    );
};

export default SocialMedia;
