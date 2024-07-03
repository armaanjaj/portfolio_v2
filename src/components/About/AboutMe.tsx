import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="relative p-0 m-0 h-52 w-full lg:h-full overflow-hidden flex flex-col justify-center items-start about-me-section-bg-pattern">
            <div className="select-none absolute left-0 -bottom-4 uppercase text-4xl z-[1] opacity-60 font-bold">
                <h1>About me</h1>
            </div>
            <div className="text-sm xl:text-lg 2xl:text-xl font-bold 2xl:mb-2 ml-3">
                Hey, I&apos;m Armaan!
            </div>
            <div
                className="absolute bottom-4 -right-16 h-28 w-60"
                onContextMenu={(event) => {
                    event.preventDefault();
                }}
            >
                <Image
                    src={"/imageSelf.jpeg"}
                    width={200}
                    height={175}
                    alt="Armaan Jaj"
                    className="object-cover rounded-full pointer-events-none border border-white select-none"
                    onContextMenu={(event) => {
                        event.preventDefault();
                    }}
                />
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isExpanded ? "100%" : "0%",
                    opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 right-0 border-2 border-gray-600 backdrop-blur-lg text-white z-[1] p-2 sm:p-4 bg-gray-900 bg-opacity-70 rounded-xl shadow-md overflow-hidden flex-col justify-center items-center flex px-4 py-2"
            >
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-sm xl:text-lg 2xl:text-xl font-bold 2xl:mb-2"
                            >
                                Hey, I'm Armaan!
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                A detail-oriented coder with a love for design
                                and nature. I strive for perfection in every
                                pixel and laugh in the face of bugs (sometimes
                                literally).
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-[2]">
                <button
                    onClick={toggleExpand}
                    className="text-white bg-purple-500 hover:bg-purple-700 rounded-full rounded-tr-none rounded-tl-none w-6 h-6 flex items-center justify-center shadow-xl"
                >
                    {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
            </div>
        </section>
    );
};

export default AboutMe;
