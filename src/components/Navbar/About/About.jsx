import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src="/Logoimage.png"
                    alt="About image"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.icons}>
                            <img src="/programing.png" alt="Programming logo" className={styles.icon} />
                            <img src="/html.png" alt="HTML logo" className={styles.icon} />
                            <img src="/css-3.png" alt="CSS logo" className={styles.icon} />
                            <img src="/js.png" alt="JavaScript logo" className={styles.icon} />
                        </div>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I am a frontend developer with experience in designing and building responsive, user-friendly web applications.
                                I specialize in technologies like React, HTML, CSS, and JavaScript focusing on creating intuitive interfaces and seamless user experiences.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.icons}>
                            <img src="/java.png" alt="Java logo" className={styles.icon} />
                            <img src="/leaf.png" alt="Spring Boot logo" className={styles.icon} />
                            <img src="/sql.png" alt="SQL logo" className={styles.icon} />
                        </div>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I am a backend developer skilled in building robust and scalable server-side applications using Java and Spring Boot. 
                                I focus on designing efficient APIs, managing databases, and ensuring secure and optimized application performance.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.icons}>
                            <img src="/figma.png" alt="Figma logo" className={styles.icon} />
                        </div>
                        <div className={styles.aboutItemText}>
                            <h3>UI/UX Designer</h3>
                            <p>
                                I am a UI designer specializing in creating intuitive and visually appealing interfaces. 
                                I focus on user-centered design, using tools like Figma to craft seamless and engaging user experiences.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
