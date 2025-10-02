import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <section className={styles.homeBody}>
            <div className="home-container">
                <div className="home-image">
                    <div className={styles.profileImage}>
                        <img 
                            src="%PUBLIC_URL%/memoji.png" 
                            alt="Marta Cuevas - Memoji" 
                            className={styles.memojiImage}
                        />
                    </div>
                </div>
                <div className="home-content">
                    <h1 className={styles.homeTitle}>
                        Hi, I'm  <span className="highlight">Marta Cuevas</span>
                    </h1>
                    <h2 className={styles.homeSubtitle}>
                        Health Engineer | Ingeniera de la Salud
                    </h2>
                    <p className={styles.homeDescription}>
                        Passionate about technology, data science, and healthcare innovation. 
                        Always eager to learn new things and explore different cultures through travel and sports.
                    </p>
                    <div className="home-buttons">
                        <Link to="/projects" className={`${styles.btnPrimary} ${styles.btn}`}>
                            <i className="fas fa-rocket"></i>
                             View My Work
                        </Link>
                        <Link to="/contact" className={`${styles.btnSecondary} ${styles.btn}`}>
                            <i className="fas fa-envelope"></i>
                             Get In Touch
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Home;
