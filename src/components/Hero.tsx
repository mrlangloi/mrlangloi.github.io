import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles["hero-section"]}>
            <div className={styles["hero-content"]}>
                <p className={styles["hero-eyebrow"]}>Hello, I'm</p>
                <h1 className={styles["hero-title"]}>Ricky C.!</h1>
                <div className={styles["hero-description"]}>
                    <h2>3rd-year Software Systems Student @ Simon Fraser University</h2>
                    <p>I excel in building applications and troubleshooting technical issues.</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;