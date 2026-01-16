
interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    link: string;
};

const ProjectCard = (props: ProjectProps) => {

    const { title, description, tech, link } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src="https://placehold.co/600x400/png"></img>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tech-stack tech-stack-wrapper">
                    {tech.map((t, index) => (
                        <span key={index} className="tag">{t}</span>
                    ))}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer">Github</a>
            </div>

        </div>
    );
};

export default ProjectCard;