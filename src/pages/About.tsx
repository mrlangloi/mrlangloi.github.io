import Course from "../components/Course";
import { courses } from "../data/courses";
import myProfileImage from "../assets/my_image.jpg";
import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles["about-section"]}>
            <h2 className={styles["about-heading"]}>about.md</h2>

            <div className={styles["about-content-wrapper"]}>
                {/* Text side */}
                <div className={styles["about-text-side"]}>
                    <h1>About Me</h1>
                    <p className={styles["about-intro"]}>
                        I'm a Computer Science student at Simon Fraser University,
                        concentrating in Software Systems. I enjoy building software and understanding
                        the methods and patterns that enhance scalability.
                    </p>

                    <div className={styles["courses-container"]}>
                        <h3 className={styles["courses-label"]}>Relevant Courses</h3>
                        <ul className={styles["courses-grid"]}>
                            {courses.map((course) => (
                                <Course
                                    key={course.id}
                                    id={course.id}
                                    code={course.code}
                                    title={course.title}
                                    codeClassName={styles["course-code"]}
                                />
                            ))}
                        </ul>
                    </div>

                    <p className={styles["about-outro"]}>
                        When I'm not developing software, debugging code, or studying for exams,
                        you'll likely find me exploring new tools or gaming on Steam.
                    </p>
                </div>

                {/* Image side — terminal-framed */}
                <div className={styles["about-image-side"]}>
                    <div className={styles["photo-frame"]}>
                        <div className={styles["photo-frame-bar"]}>
                            <span className={styles["photo-frame-dot"]} />
                            <span className={styles["photo-frame-dot"]} />
                            <span className={styles["photo-frame-dot"]} />
                            <span className={styles["photo-frame-label"]}>ricky.jpg</span>
                        </div>
                        <img
                            src={myProfileImage}
                            alt="Ricky Cheung"
                            className={styles["profile-photo"]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;