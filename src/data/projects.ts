export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
}

const featuredProjectsList = [
    {
        title: "Personal Calendar Tracker",
        description: "A RESTful personal calendar and tracker application developed using Java and Spring Boot",
        tech: ["Java", "Spring Boot", "Swing"],
        link: "https://github.com/mrlangloi/ImportantDaysTracker"

    },
    {
        title: "OBS Canvas Overlay",
        description: "An Open Broadcaster Software (OBS) overlay for live-stream moderators to display media to viewers",
        tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
        link: "https://github.com/mrlangloi/canvas-overlay-client"
    },
    {
        title: "Stock Image Searcher",
        description: "An image searcher using Pexels Image API to find and display stock images based on user queries",
        tech: ["JavaScript", "React", "HTML/CSS"],
        link: "https://github.com/mrlangloi/img-searcher"
    },
];

export const featuredProjects = featuredProjectsList.map((project, index) => ({
    id: index + 1,
    ...project
}))

const allProjectsList = [
    {
        title: "OBS Canvas Overlay v2 (Work in Progress)",
        description: "An updated OBS Canvas Overlay using TypeScript, React Compiler, and PostgreSQL",
        tech: ["TypeScript", "React", "React Compiler", "Node.js", "Express", "PostgreSQL"],
        link: "https://github.com/mrlangloi/obs-canvas"
    },
    {
        title: "CS SFU Course Planner (Hackathon Project)",
        description: "A Computer Sciencecourse planner for SFU students built during SystemsHacks 2026",
        tech: ["JavaScript", "React", "CSS"],
        link: "https://github.com/mrlangloi/obs-canvas"
    },
    {
        title: "Personal Calendar Tracker",
        description: "A RESTful personal calendar and tracker application developed using Java and Spring Boot",
        tech: ["Java", "Spring Boot", "Swing"],
        link: "https://github.com/mrlangloi/ImportantDaysTracker"

    },
    {
        title: "OBS Canvas Overlay",
        description: "An Open Broadcaster Software (OBS) overlay for live-stream moderators to display media to viewers",
        tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "CSS"],
        link: "https://github.com/mrlangloi/canvas-overlay-client"
    },
    {
        title: "Stock Image Searcher",
        description: "An image searcher using Pexels Image API to find and display stock images based on user queries",
        tech: ["JavaScript", "React", "CSS"],
        link: "https://github.com/mrlangloi/img-searcher"
    },
];

export const allProjects = allProjectsList.map((project, index) => ({
    id: index + 1,
    ...project
}));