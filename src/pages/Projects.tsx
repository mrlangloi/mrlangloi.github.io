import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../data/projects';

const Projects = () => {
    return (
        <section className="home-section">
            <div className="projects-section">
                <h1>All Projects</h1>
                <div className="grid">
                    {allProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;