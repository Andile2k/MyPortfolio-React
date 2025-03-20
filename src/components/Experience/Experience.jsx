import React from "react";
import skills from "../../data/skills.json";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                {/* Skills */}
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <div key={id} className={styles.skillItem}>
                            <img 
                                src={skill.imageSrc} 
                                alt={skill.title} 
                                className={styles.skillImage}
                                onError={(e) => {
                                    e.currentTarget.src = "/placeholder.png";
                                    console.error("Failed to load:", skill.imageSrc);
                                }}
                            />
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>

                {/* Company Logos Below Skills */}
                <div className={styles.companyLogos}>
                    {history.map((historyItem, id) => (
                        <div key={id} className={styles.historyItem}>
                            <img className={styles.companyLogo} src={historyItem.imageSrc} alt={`${historyItem.organisation} Logo`} />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => (
                                        <li key={id}>{experience}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
