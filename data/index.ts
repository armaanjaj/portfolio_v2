import {
    HouseIcon,
    ProjectsIcon,
    TestimonialsIcon,
    ContactIcon,
    NextJSIcon,
    TailwindCSSIcon,
    JSIcon,
    MongoDBIcon,
    ReactIcon,
    TSIcon,
    FramermotionIcon,
} from "@/utils/icons";

export const navLinks = [
    { name: "About", link: "/about", icon: HouseIcon },
    { name: "Blogs", link: "/blogs", icon: HouseIcon },
    { name: "Projects", link: "/projects", icon: ProjectsIcon },
    { name: "Technologies", link: "/technologies", icon: ProjectsIcon },
    { name: "Testimonials", link: "/testimonials", icon: TestimonialsIcon },
    { name: "Contact", link: "/contact", icon: ContactIcon },
];

export const projects = [
    {
        id: 1,
        title: "We-DD",
        des: "Taxi booking website for a Calgary based company and increased their revenue.",
        img: "/p1.png",
        links: [
            "https://we-dd.vercel.app/",
            "https://github.com/armaanjaj/we-dd-mern",
        ],
        iconLists: [NextJSIcon, TailwindCSSIcon, JSIcon, MongoDBIcon],
    },
    {
        id: 2,
        title: "My Inventory",
        des: "Recreated a Java based inventory as a school project to enhance it's capabilities.",
        img: "/p2.png",
        links: ["", "https://github.com/armaanjaj/myinventory"],
        iconLists: [ReactIcon, TailwindCSSIcon, JSIcon, MongoDBIcon],
    },
    {
        id: 3,
        title: "Portfolio V1",
        des: "First version of my personal portfolio website. Used great animations.",
        img: "/p3.png",
        links: [
            "https://www.armaancodes.com/v1",
            "https://github.com/armaanjaj/portfolio_v1",
        ],
        iconLists: [NextJSIcon, TailwindCSSIcon, TSIcon, FramermotionIcon],
    },
    {
        id: 4,
        title: "Sumit Nanda Real Estate",
        des: "A personal website with admin panel for real estate professional.",
        img: "/p4.png",
        links: [
            "https://www.sumitnanda.ca/",
            "https://github.com/armaanjaj/sumit-nanda-real-estate",
        ],
        iconLists: [NextJSIcon, TailwindCSSIcon, TSIcon, FramermotionIcon],
    },
    {
        id: 5,
        title: "Morning Star Contractors",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p5.png",
        links: ["https://www.morningstarcontractors.ca/", ""],
        iconLists: [NextJSIcon, TailwindCSSIcon, TSIcon, FramermotionIcon],
    },
];
