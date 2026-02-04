import Course from "../components/Course";
import { courses } from "../data/courses";
import myProfileImage from "../assets/my_image.jpg";

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content-wrapper">
                <div className="about-text-side">
                    <h1>About Me</h1>
                    <p>
                        I'm a 3rd year Computing Science student at Simon Fraser University, concentrating in Software Systems. I enjoy building software and understanding the methods and patterns that enhances scalability.
                    </p>
                    <div className="courses-container">
                        <h3>Relevant Courses Taken</h3>
                        <ul className="courses-grid">
                            {courses.map((course) => (
                                <Course id={course.id} code={course.code} title={course.title} />
                            ))}
                        </ul>
                    </div>
                    <p>
                        When I'm not developing software, debugging code, or studying for exams, you'll likely find me exploring new tools or gaming on Steam.
                    </p>
                </div>

                <div className="about-image-side">
                    <img src={myProfileImage} alt="Ricky C." className="profile-photo" />
                </div>
            </div>
        </section>
    );
};

export default About;