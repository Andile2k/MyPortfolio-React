import React from "react";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
                <div className={styles.content}>
                <img src="src\assets\selfie (1).jpg" alt="Andile's Profile" className={styles.heroImag} />
                <h1 className={styles.title}>Hi, I'm Andile</h1>
                    <p className={styles.description}>
                    I I'm a Junior Full Stack Developer passionate about building dynamic web applications. 
                    I work with React, Java, Spring Boot, and databases to create seamless user experiences.
                    </p>
                    <a href="nailto:myemail@gmail.com" className={styles.contactBtn}>Contact Me</a>
                </div>
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
        </section>
    );    
};