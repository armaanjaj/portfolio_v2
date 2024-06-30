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
    CIcon,
    ExpressjsIcon,
    FigmaIcon,
    GithubIcon,
    JavaIcon,
    KotlinIcon,
    MUIIcon,
    MySQLIcon,
    NodejsIcon,
    PhpIcon,
    PythonIcon,
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
        colors: ["#e5552a", "#FFFFFF", "#fffff0"],
    },
    {
        id: 2,
        title: "My Inventory",
        des: "Recreated a Java based inventory as a school project to enhance it's capabilities.",
        img: "/p2.png",
        links: ["", "https://github.com/armaanjaj/myinventory"],
        iconLists: [ReactIcon, TailwindCSSIcon, JSIcon, MongoDBIcon],
        colors: ["#70faff", "#000000", "#64748B"],
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
        colors: ["#ffd84d", "#000000", "#546173"],
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
        colors: ["#ff2e2e", "#FFFFFF", "#d9dde3"],
    },
    {
        id: 5,
        title: "Morning Star Contractors",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p5.png",
        links: ["https://www.morningstarcontractors.ca/", ""],
        iconLists: [NextJSIcon, TailwindCSSIcon, TSIcon, FramermotionIcon],
        colors: ["#FEE071", "#1F2937", "#64748B"],
    },
];

export const skills = [
    {
        sectionId: 1,
        sectionTitle: "Langs",
        content: [
            {
                title: "JavaScript",
                logo: JSIcon,
            },
            {
                title: "TypeScript",
                logo: TSIcon,
            },
            {
                title: "C",
                logo: CIcon,
            },
            {
                title: "Java",
                logo: JavaIcon,
            },
            {
                title: "Kotlin",
                logo: KotlinIcon,
            },
            {
                title: "PHP",
                logo: PhpIcon,
            },
            {
                title: "Python",
                logo: PythonIcon,
            },
        ],
    },
    {
        sectionId: 2,
        sectionTitle: "Front-end",
        content: [
            {
                title: "NextJS",
                logo: NextJSIcon,
            },
            {
                title: "TailwindCSS",
                logo: TailwindCSSIcon,
            },
            {
                title: "React",
                logo: ReactIcon,
            },

            {
                title: "Framer Motion",
                logo: FramermotionIcon,
            },
            {
                title: "Material UI",
                logo: MUIIcon,
            },
        ],
    },
    {
        sectionId: 3,
        sectionTitle: "Back-end",
        content: [
            {
                title: "Express.js",
                logo: ExpressjsIcon,
            },
            {
                title: "Node.js",
                logo: NodejsIcon,
            },
        ],
    },
    {
        sectionId: 4,
        sectionTitle: "Databases",
        content: [
            {
                title: "MySQL",
                logo: MySQLIcon,
            },
            {
                title: "MongoDB",
                logo: MongoDBIcon,
            },
        ],
    },
    {
        sectionId: 5,
        sectionTitle: "Tools",
        content: [
            {
                title: "Figma",
                logo: FigmaIcon,
            },
            {
                title: "GitHub",
                logo: GithubIcon,
            },
        ],
    },
];
