import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
    const [email, setEmail] = useState("rcheung1997@gmail.com");

    return (
        <div className="container">
            {/* Navbar */}
            <Navbar />

            <main className="main-content">

                {/* Intro */}
                <header className="intro">
                    <h1>Hi, I'm Ricky!</h1>
                    <h2>I am a 3rd-year Computing Science SoSy Student @ SFU.</h2>
                    <h2>I have a knack for building applications and troubleshooting technical issues.</h2>
                </header>

                {/* Featured Projects */}
                <section id="projects" className="featured-projects">
                    <h1>Featured Projects</h1>
                    <div className="grid">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                tech={project.tech}
                                link={project.link}
                            />
                        ))}
                    </div>
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;