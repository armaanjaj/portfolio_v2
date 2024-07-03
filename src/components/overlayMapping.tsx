import React from "react";
import AboutMeOverlay from "./AboutMeOverlay";
import ProjectsOverlay from "./ProjectsOverlay";
import BlogsOverlay from "./BlogsOverlay";
import NewsletterOverlay from "./NewsletterOverlay";
import TestimonialOverlay from "./TestimonialOverlay";
import ContactOverlay from "./ContactOverlay";
import { projects } from "../../data";

export const overlayMapping: { [key: number]: React.ReactNode } = {
    1: <AboutMeOverlay />,
    2: <BlogsOverlay />,
    3: <ProjectsOverlay projects={projects} />,
    4: <NewsletterOverlay />,
    5: <TestimonialOverlay />,
    6: <ContactOverlay />,
};
