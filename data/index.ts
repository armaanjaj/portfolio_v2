import {
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
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    SocialGitHubIcon,
    ProjectNextJSIcon,
    NewsletterIcon,
    BlogsIcon,
    AboutIcon,
} from "@/utils/icons";

export const navLinks = [
    {id:1, name: "About", link: "/about", icon: AboutIcon },
    {id:2, name: "Blogs", link: "/blogs", icon: BlogsIcon },
    {id:3, name: "Work", link: "/work", icon: ProjectsIcon },
    {id:4, name: "Newsletters", link: "/newsletters", icon: NewsletterIcon },
    {id:5, name: "Testimonials", link: "/testimonials", icon: TestimonialsIcon },
    {id:6, name: "Contact", link: "/contact", icon: ContactIcon },
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
        iconLists: [ProjectNextJSIcon, TailwindCSSIcon, JSIcon, MongoDBIcon],
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
        iconLists: [
            ProjectNextJSIcon,
            TailwindCSSIcon,
            TSIcon,
            FramermotionIcon,
        ],
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
        iconLists: [
            ProjectNextJSIcon,
            TailwindCSSIcon,
            TSIcon,
            FramermotionIcon,
        ],
        colors: ["#ff2e2e", "#FFFFFF", "#d9dde3"],
    },
    {
        id: 5,
        title: "Morning Star Contractors",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p5.png",
        links: ["https://www.morningstarcontractors.ca/", ""],
        iconLists: [
            ProjectNextJSIcon,
            TailwindCSSIcon,
            TSIcon,
            FramermotionIcon,
        ],
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

export const socialLinks = [
    {
        href: "https://www.linkedin.com/in/connectarmaan",
        label: "LinkedIn",
        target: "_blank",
        icon: LinkedinIcon,
        className: "",
    },
    {
        href: "https://www.instagram.com/armaan_jaj",
        label: "Instagram",
        target: "_blank",
        icon: InstagramIcon,
        className: "",
    },
    {
        href: "https://www.github.com/armaanjaj",
        label: "GitHub",
        target: "_blank",
        icon: SocialGitHubIcon,
        className: "",
    },
    {
        href: "armaansjaj0129@gmail.com",
        label: "Email",
        target: "",
        icon: MailIcon,
        className: "",
        isCopy: true,
    },
];

export const blogs = [
    {
        blogId: 1,
        blogTitle: "The Rise of JavaScript Frameworks in 2024",
        blogDescription:
            "A deep dive into the latest JavaScript frameworks gaining traction this year and how they're shaping the future of web development.",
        dateCreated: "2024-01-15",
        href: "/blogs/rise-of-js-frameworks-2024",
        cover: "/b1.jpg",
    },
    {
        blogId: 2,
        blogTitle: "AI in Software Development: Trends and Predictions",
        blogDescription:
            "Exploring the impact of artificial intelligence on software development, current trends, and what to expect in the coming years.",
        dateCreated: "2024-02-10",
        href: "/blogs/ai-in-software-development",
        cover: "/b2.jpg",
    },
    {
        blogId: 3,
        blogTitle: "A Guide to Full-Stack Development in 2024",
        blogDescription:
            "Everything you need to know about becoming a full-stack developer this year, including the essential tools and technologies.",
        dateCreated: "2024-03-05",
        href: "/blogs/guide-to-full-stack-development",
        cover: "/b3.jpg",
    },
    {
        blogId: 4,
        blogTitle: "Top 10 DevOps Practices for Efficient Software Delivery",
        blogDescription:
            "Discover the best DevOps practices to enhance your software delivery process and ensure continuous integration and deployment.",
        dateCreated: "2024-04-12",
        href: "/blogs/top-devops-practices",
        cover: "/b4.jpg",
    },
    {
        blogId: 5,
        blogTitle: "Embracing Quantum Computing: What Developers Need to Know",
        blogDescription:
            "An introduction to quantum computing for developers, covering the basics, current advancements, and how to get started.",
        dateCreated: "2024-05-20",
        href: "/blogs/embracing-quantum-computing",
        cover: "/b5.jpg",
    },
];
