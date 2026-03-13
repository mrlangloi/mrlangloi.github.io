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
        description: "An updated OBS Canvas Overlay using TypeScript, React Compiler, Spring Boot, and PostgreSQL",
        tech: ["TypeScript", "Java", "React", "React Compiler", "Vite", "Node.js", "Spring Boot", "PostgreSQL", "CSS"],
        link: "https://github.com/mrlangloi/obs-canvas"
    },
    {
        title: "SFU Graduation Planner (xHacks 2026)",
        description: "A graduation planner for SFU Computing Science students built during a 24-hour hackathon, xHacks 2026",
        tech: ["JavaScript", "React", "Vite", "Node.js", "CSS"],
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
        tech: ["JavaScript", "React", "Node.js", "CSS"],
        link: "https://github.com/mrlangloi/img-searcher"
    },
];

export const allProjects = allProjectsList.map((project, index) => ({
    id: index + 1,
    ...project
}));