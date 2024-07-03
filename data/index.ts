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
    { id: 1, name: "About", link: "/about", icon: AboutIcon },
    { id: 2, name: "Blogs", link: "/blogs", icon: BlogsIcon },
    { id: 3, name: "Work", link: "/work", icon: ProjectsIcon },
    // {id:4, name: "Newsletters", link: "/newsletters", icon: NewsletterIcon },
    // {id:5, name: "Testimonials", link: "/testimonials", icon: TestimonialsIcon },
    { id: 6, name: "Contact", link: "/contact", icon: ContactIcon },
];

export const projects = [
    {
        id: 1,
        title: "We-DD",
        des: "Developed a comprehensive taxi booking platform for a Calgary-based company, significantly boosting their revenue. The website features a user-friendly interface for booking taxis. The project was built using modern web technologies to ensure a seamless and responsive user experience.",
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
        des: "Enhanced a school project by recreating a Java-based inventory management system, expanding its functionalities and improving its performance. The new system offers advanced inventory tracking, reporting features, and a modern user interface, making it easier for users to manage their stock efficiently.",
        img: "/p2.png",
        links: ["", "https://github.com/armaanjaj/myinventory"],
        iconLists: [ReactIcon, TailwindCSSIcon, JSIcon, MongoDBIcon],
        colors: ["#70faff", "#000000", "#64748B"],
    },
    {
        id: 3,
        title: "Portfolio V1",
        des: "Designed and developed the first version of my personal portfolio website, showcasing my skills and projects with visually appealing animations. The website highlights my expertise in web development through dynamic content, smooth transitions, and an intuitive layout, providing an engaging experience for visitors.",
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
        des: "Created a professional website and admin panel for a real estate agent, enabling efficient property management and client interactions. The platform includes property listings, search functionality, and a secure admin panel for managing content. It offers a sleek design and seamless user experience tailored to the needs of the real estate industry.",
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
        des: "Developed a comprehensive and visually appealing website for Morning Star Contractors, a general construction company. The site provides detailed information about the company's services, which include various construction and renovation solutions. It also features a blog section, contact forms, and an organized list of services to enhance user engagement and facilitate easy communication. The website is designed to be user-friendly and responsive, ensuring a seamless experience across all devices.",
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
        className: "flex flex-row justify-around items-center gap-3",
        isCopy: true,
    },
];

export const roadmapData = [
    {
        id: 1,
        title: "Front-End Development",
        steps: [
            "Step 1: Learn HTML - Structure web pages using semantic elements.",
            "Step 2: Learn CSS - Style web pages with CSS properties and layouts.",
            "Step 3: Learn JavaScript - Add interactivity with JavaScript basics.",
            "Step 4: Understand version control with Git - Basic commands and workflows.",
            "Step 5: Get comfortable with a frontend framework (React, Vue, Angular) - Build single-page applications.",
            "Step 6: Learn Responsive Design - Use media queries and responsive units.",
            "Step 7: Explore CSS Preprocessors (Sass, LESS) - Write more maintainable CSS.",
            "Step 8: Get familiar with build tools (Webpack, Gulp) - Automate tasks and bundle resources.",
            "Step 9: Learn about CSS frameworks (Bootstrap, Tailwind CSS) - Use prebuilt components and utilities.",
            "Step 10: Dive into advanced JavaScript (ES6+, Async/Await, Promises) - Write modern and efficient code.",
            "Step 11: Understand state management (Redux, Vuex) - Manage complex state in applications.",
            "Step 12: Learn testing tools (Jest, Cypress) - Write tests for components and applications.",
            "Step 13: Explore Progressive Web Apps (PWA) - Make your web apps more like native apps.",
            "Step 14: Understand web performance optimization - Improve load times and efficiency.",
            "Step 15: Stay updated with latest trends and best practices - Continuous learning.",
        ],
    },
    {
        id: 2,
        title: "Back-End Development",
        steps: [
            "Step 1: Learn a server-side language (Node.js, Python, Ruby) - Choose one and master its syntax and concepts.",
            "Step 2: Understand RESTful APIs - Design and implement RESTful web services.",
            "Step 3: Get familiar with databases (SQL, NoSQL) - Learn about relational and non-relational databases.",
            "Step 4: Learn about ORMs (Sequelize, TypeORM, Mongoose) - Interact with databases using ORM tools.",
            "Step 5: Understand authentication and authorization - Implement user login, roles, and permissions.",
            "Step 6: Learn about server-side frameworks (Express, Django, Flask) - Build and manage back-end applications.",
            "Step 7: Get familiar with version control with Git - Basic commands and workflows.",
            "Step 8: Explore server management and deployment - Set up servers and deploy applications (Heroku, AWS, DigitalOcean).",
            "Step 9: Learn about middleware and services - Use middleware for request handling and services for business logic.",
            "Step 10: Understand security best practices - Protect applications from common threats (XSS, SQL Injection).",
            "Step 11: Get comfortable with Docker and containerization - Containerize applications for consistency and scalability.",
            "Step 12: Learn about microservices architecture - Build and manage microservices-based applications.",
            "Step 13: Explore GraphQL - Implement flexible and efficient data fetching.",
            "Step 14: Understand testing and debugging tools (Mocha, Chai, Jest) - Write and run tests for back-end code.",
            "Step 15: Stay updated with latest trends and best practices - Continuous learning.",
        ],
    },
    {
        id: 3,
        title: "Full-Stack Development",
        steps: [
            "Step 1: Master HTML, CSS, and JavaScript - Build and style web pages.",
            "Step 2: Learn a front-end framework (React, Vue, Angular) - Build single-page applications.",
            "Step 3: Get comfortable with a server-side language (Node.js, Python, Ruby) - Build back-end services.",
            "Step 4: Understand RESTful APIs and GraphQL - Implement web services for data exchange.",
            "Step 5: Learn about databases (SQL, NoSQL) - Manage and interact with data storage.",
            "Step 6: Understand authentication and authorization - Secure applications with user roles and permissions.",
            "Step 7: Get familiar with version control with Git - Manage code with basic commands and workflows.",
            "Step 8: Learn about state management (Redux, Vuex) - Manage complex state in front-end applications.",
            "Step 9: Explore CSS frameworks and preprocessors (Bootstrap, Tailwind CSS, Sass) - Use prebuilt components and write maintainable CSS.",
            "Step 10: Learn about server-side frameworks (Express, Django, Flask) - Build and manage back-end applications.",
            "Step 11: Get familiar with build tools (Webpack, Gulp) - Automate tasks and bundle resources.",
            "Step 12: Understand server management and deployment - Deploy applications to servers (Heroku, AWS, DigitalOcean).",
            "Step 13: Learn about Docker and containerization - Containerize applications for consistency and scalability.",
            "Step 14: Understand microservices architecture - Build and manage microservices-based applications.",
            "Step 15: Explore Progressive Web Apps (PWA) - Enhance web applications to behave more like native apps.",
            "Step 16: Learn about performance optimization - Improve load times and efficiency for both front-end and back-end.",
            "Step 17: Understand testing tools (Jest, Mocha, Cypress) - Write and run tests for both front-end and back-end code.",
            "Step 18: Stay updated with latest trends and best practices - Continuous learning.",
        ],
    },
];
