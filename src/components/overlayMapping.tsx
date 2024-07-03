import React from "react";
import AboutMeOverlay from "./About/AboutMeOverlay";
import ProjectsOverlay from "./Project/ProjectsOverlay";
import BlogsOverlay from "./Blog/BlogsOverlay";
import NewsletterOverlay from "./TO-DO/NewsletterOverlay";
import TestimonialOverlay from "./TO-DO/TestimonialOverlay";
import ContactOverlay from "./Contact/ContactOverlay";
import { projects } from "../../data";

export const overlayMapping: { [key: number]: React.ReactNode } = {
    1: <AboutMeOverlay />,
    2: <BlogsOverlay />,
    3: <ProjectsOverlay projects={projects} />,
    4: <NewsletterOverlay />,
    5: <TestimonialOverlay />,
    6: <ContactOverlay />,
};
