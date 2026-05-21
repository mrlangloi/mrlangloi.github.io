import { heroLines } from '../data/heropanel'
import CodePanel from './CodePanel'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className={styles["hero-section"]}>
            <div className={styles["hero-content"]}>

                {/* left-side text */}
                <div className={styles["hero-left"]}>
                    <div className={styles["hero-status"]}>
                        <span className={styles["hero-status-dot"]} />
                        Open to opportunities
                    </div>

                    <h1 className={styles["hero-title"]}>
                        <span className={styles["hero-title-accent"]}>Ricky</span> C.
                    </h1>

                    <p className={styles["hero-role"]}>
                        <span className={styles["hero-role-prefix"]}>const role = </span>
                        "Software Systems @ Simon Fraser University"
                    </p>

                    <p className={styles["hero-bio"]}>
                        I build software and applications that last.
                    </p>
                </div>

                {/* code panel */}
                <CodePanel filename="ricky.ts" lines={heroLines} />

            </div>
        </section>
    )
}

export default Hero