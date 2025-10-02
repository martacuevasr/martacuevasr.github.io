import React from 'react';
import styles from '../styles/Projects.module.css';

// Importa las imágenes locales desde src/assets
import predicciones from '../assets/predicciones.png';
import dashboard from '../assets/dashboard.png';
import app2 from '../assets/app2.jpeg';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Alzheimer’s MRI Image Classification using Deep Learning",
            image: predicciones,
            description:
                "Development of a convolutional neural network (CNN) model to classify brain MRI images and detect patterns associated with Alzheimer’s disease.",
            technologies: ["Python", "PyTorch", "Scikit-learn", "ImageNet models", "NumPy", "Pandas", "CNN"],
            github: "https://github.com/martacuevasr/Clasification_AlzheimerImages"
        },
        {
            id: 2,
            title: "Data Warehouse for Medication Expense Analysis in Hospitals",
            image: dashboard,
            description:
                "Design of a system for hospital data analysis in the U.S. using ETL pipelines, OLAP cubes, and MDX queries. Development of interactive dashboards in Power BI to extract key insights on pharmaceutical expenses.",
            technologies: ["ETL", "Power BI", "OLAP", "MDX"],
            github: "https://github.com/AlexSilvaa9/HealthcareDataWarehouse"
        },
        {
            id: 3,
            title: "Web Application for Skin Disease Detection",
            image: app2,
            description:
                "Review of the state of the art in clinical deep learning and development of a web application for detecting skin diseases from images. Implementation with deep vision models and web technologies.",
            technologies: ["Python", "CNN", "TensorFlow", "FastAPI"],
            github: "https://github.com/AlexSilvaa9/skin_diseases_detection_web_app"
        }
    ];

    return (
        <div className={styles.projectsPage}>
            <div className={styles.container}>
                <div className={styles.projectsHeader}>
                    <h1 className={styles.pageTitle}>My Projects</h1>
                    <p className={styles.subtitle}>
                        Here are some of my recent projects.
                    </p>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.projectImage}>
                                <img src={project.image} alt={project.title} />
                                <div className={styles.imageOverlay}>
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={styles.overlayLink}
                                    >
                                        <i className="fab fa-github"></i>
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <div className={styles.projectTech}>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className={styles.projectDescription}>{project.description}</p>
                            </div>
                            <div className={styles.projectFooter}>
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.githubIcon}
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
