import Image from "next/image";
import React from "react";

const AboutMe = () => {
    return (
        <section className="relative p-0 m-0 min-w-fit min-h-fit w-full h-full overflow-hidden flex flex-col justify-center items-start">
            <div className="select-none absolute left-0 -bottom-4 uppercase text-4xl z-[1] opacity-60 font-bold">
                <h1>About me</h1>
            </div>
            <div
                className="absolute bottom-4 -right-16 h-28 w-60"
                onContextMenu={(event: any) => {
                    event.preventDefault();
                }}
            >
                <Image
                    src={"/imageSelf.jpeg"}
                    width={400}
                    height={350}
                    alt="Armaan Jaj"
                    className="object-cover rounded-full  pointer-events-none border border-white select-none"
                    onContextMenu={(event: any) => {
                        event.preventDefault();
                    }}
                />
            </div>
            <div className="absolute top-3 left-3 right-3 border border-gray-600 backdrop-blur-lg text-white z-[1] max-w-full p-4 bg-gray-900 bg-opacity-70 rounded-md shadow-md">
                <h2 className="text-xl font-bold mb-2">Hey, I'm Armaan!</h2>
                <p className="text-base">
                    A detail-oriented coder with a love for design and nature. I
                    strive for perfection in every pixel and laugh in the face
                    of bugs (sometimes literally).
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
