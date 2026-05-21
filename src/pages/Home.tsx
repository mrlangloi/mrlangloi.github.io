import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/projects'

const Home = () => (
    <>
        {/* intro */}
        <Hero />

        {/* featured projects */}
        <section id="projects" className="home-section">
            <div className="projects-section">

                <h1>Featured Projects</h1>

                <div className="grid">
                    {featuredProjects.map((project) => (
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
)

export default Home