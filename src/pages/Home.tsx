import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Home = () => (
    <>
        {/* Intro */}
        <Hero />
        {/* Featured Projects */}
        <section id="projects" className="home-section">
            <div className="featured-projects">
                <h1>Featured Projects</h1>
                <div className="grid">
                    {projects.map((project) => (
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
    </>
);

export default Home;