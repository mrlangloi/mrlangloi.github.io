import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles["hero-section"]}>
            <div className={styles["hero-content"]}>

                {/* ── Left: text ── */}
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
                        "Software Systems Student @ SFU"
                    </p>

                    <p className={styles["hero-bio"]}>
                        I build applications and understand the methods and patterns
                        that enhance scalability. Focused on clean systems design
                        and writing software that lasts.
                    </p>
                </div>

                {/* ── Right: fake code panel ── */}
                <div className={styles["hero-code-panel"]}>
                    <div className={styles["hero-code-titlebar"]}>
                        <span className={styles["hero-code-dot"]} />
                        <span className={styles["hero-code-dot"]} />
                        <span className={styles["hero-code-dot"]} />
                        <span className={styles["hero-code-filename"]}>ricky.ts</span>
                    </div>
                    <div className={styles["hero-code-body"]}>
                        <div className={styles["hero-code-nums"]}>
                            {Array.from({ length: 18 }, (_, i) => (
                                <span key={i}>{i + 1}</span>
                            ))}
                        </div>
                        <div className={styles["hero-code-lines"]}>
                            <span className={styles["cl"]}><span className={styles["c-key"]}>interface</span> <span className={styles["c-type"]}>Developer</span> <span className={styles["c-punct"]}>{"{"}</span></span>
                            <span className={styles["cl"]}>{"  "}<span className={styles["c-key"]}>name</span><span className={styles["c-punct"]}>:</span>     <span className={styles["c-type"]}>string</span><span className={styles["c-punct"]}></span></span>
                            <span className={styles["cl"]}>{"  "}<span className={styles["c-key"]}>degree</span><span className={styles["c-punct"]}>:</span>   <span className={styles["c-type"]}>string</span></span>
                            <span className={styles["cl"]}>{"  "}<span className={styles["c-key"]}>stack</span><span className={styles["c-punct"]}>:</span>    <span className={styles["c-type"]}>string</span><span className={styles["c-punct"]}>[]</span></span>
                            <span className={styles["cl"]}>{"  "}<span className={styles["c-key"]}>status</span><span className={styles["c-punct"]}>:</span>   <span className={styles["c-str"]}>"available"</span> <span className={styles["c-punct"]}>|</span> <span className={styles["c-str"]}>"busy"</span></span>
                            <span className={styles["cl"]}><span className={styles["c-punct"]}>{"}"}</span></span>
                            <span className={styles["cl"]}>&nbsp;</span>
                            <span className={styles["cl"]}><span className={styles["c-key"]}>const</span> <span className={styles["c-type"]}>me</span><span className={styles["c-punct"]}>:</span> <span className={styles["c-type"]}>Developer</span> <span className={styles["c-punct"]}>=</span> <span className={styles["c-punct"]}>{"{"}</span></span>
                            <span className={styles["cl"]}>{"  "}<span className={styles["c-key"]}>name</span><span className={styles["c-punct"]}>:</span>     <span className={styles["c-str"]}>"Ricky Cheung"</span><span className={styles["c-punct"]}>,</span></span>
                            <span className={styles["cl"]}>{"  "}<span className={styles["c-key"]}>degree</span><span className={styles["c-punct"]}>:</span>   <span className={styles["c-str"]}>"BSc Computing Science"</span><span className={styles["c-punct"]}>,</span></span>
                            <span className={styles["cl"]}>{"  "}<span className={styles["c-key"]}>stack</span><span className={styles["c-punct"]}>:</span>    <span className={styles["c-punct"]}>[</span></span>
                            <span className={styles["cl"]}>{"    "}<span className={styles["c-str"]}>"TypeScript"</span><span className={styles["c-punct"]}>,</span> <span className={styles["c-str"]}>"React"</span><span className={styles["c-punct"]}>,</span></span>
                            <span className={styles["cl"]}>{"    "}<span className={styles["c-str"]}>"Java"</span><span className={styles["c-punct"]}>,</span> <span className={styles["c-str"]}>"Spring Boot"</span><span className={styles["c-punct"]}>,</span></span>
                            <span className={styles["cl"]}>{"    "}<span className={styles["c-str"]}>"PostgreSQL"</span><span className={styles["c-punct"]}>,</span></span>
                            <span className={styles["cl"]}>{"  "}<span className={styles["c-punct"]}>],</span></span>
                            <span className={styles["cl"]}>{"  "}<span className={styles["c-key"]}>status</span><span className={styles["c-punct"]}>:</span>   <span className={styles["c-str"]}>"available"</span><span className={styles["c-punct"]}>,</span></span>
                            <span className={styles["cl"]}><span className={styles["c-punct"]}>{"}"}</span><span className={styles["c-punct"]}>;</span></span>
                            <span className={styles["cl"]}>&nbsp;<span className={styles["hero-cursor"]} /></span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;