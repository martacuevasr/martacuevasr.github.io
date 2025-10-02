import React from 'react';
import styles from '../styles/About.module.css';

// Importa las imágenes locales desde src/assets
import memoji from '../assets/memoji.png';
import nifi from '../assets/nifi.png';
import sparql from '../assets/sparql.png';
import hl7 from '../assets/hl7.webp';

const About = () => {
    const skillCategories = [
        {
            title: "Programming Languages & Frameworks",
            skills: [
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
                { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
                { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
                { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
                { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "Elasticsearch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" }
            ]
        },
        {
            title: "Data Science & Machine Learning",
            skills: [
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
                { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
                { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
                { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
                { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
                { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                { name: "Ollama", logo: "https://avatars.githubusercontent.com/u/151674099?s=280&v=4" },
                { name: "Matplotlib", logo: "https://matplotlib.org/stable/_static/images/logo2.svg" },
                { name: "Plotly", logo: "https://images.plot.ly/logo/new-branding/plotly-logomark.png" },
                { name: "RStudio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg" }
            ]
        },
        {
            title: "Data Engineering",
            skills: [
                { name: "ETL", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
                { name: "Apache NiFi", logo: nifi }, // Import local
                { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
                { name: "Data Warehouse", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png" },
                { name: "XML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg" },
                { name: "RDF", logo: "https://www.w3.org/RDF/icons/rdf_w3c_icon.128.gif" },
                { name: "OWL", logo: "https://protege.stanford.edu/assets/images/protege-logo.png" },
                { name: "SPARQL", logo: sparql }, // Import local
                { name: "MDX", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103665.png" },
                { name: "HL7", logo: hl7 }, // Import local
                { name: "FHIR", logo: "https://www.hl7.org/fhir/assets/images/fhir-logo-www.png" },
                { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }
            ]
        },
        {
            title: "Cloud & DevOps",
            skills: [
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
            ]
        }
    ];

    return (
        <div className={styles.aboutPage}>
            <div className={styles.aboutMeSection}>
                <div className={styles.container}>
                    <div className={styles.aboutMeCard}>
                        <div className={styles.profileImage}>
                            <img src={memoji} alt="Marta Cuevas" className={styles.profileImg} />
                        </div>
                        <div className={styles.aboutText}>
                            <p className={styles.greeting}>
                                Hello! I'm <span className={styles.highlight}>Marta Cuevas</span> from <span className={styles.highlight}>Málaga</span>, Spain.
                            </p>
                            <p className={styles.description}>
                                I recently completed my studies as a <strong>Health Engineer</strong>. I love <strong>sports</strong>, <strong>traveling</strong>, 
                                and <strong>meeting new people</strong>. Always eager to learn new things and explore different cultures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.skillsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Technologies & Tools</h2>
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className={styles.skillCategory}>
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.skillsGrid}>
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className={styles.skillItem}>
                                        <div className={styles.skillIcon}>
                                            <img 
                                                src={skill.logo} 
                                                alt={skill.name}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className={styles.fallbackIcon} style={{display: 'none'}}>
                                                {skill.name.charAt(0)}
                                            </div>
                                        </div>
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
