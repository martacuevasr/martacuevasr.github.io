import React, { useState } from 'react';
import styles from '../styles/Resume.module.css';

const Resume = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('es');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleDownload = () => {
        const cvFile = selectedLanguage === 'es' ? '/cv-es.pdf' : '/cv-en.pdf';
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = `CV_Marta_Cuevas_${selectedLanguage.toUpperCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.resumePage}>
            <div className={styles.container}>
                <div className={styles.resumeHeader}>
                    <h1 className={styles.pageTitle}>Resume</h1>
                    <p className={styles.subtitle}>
                        Descarga mi currículum vitae completo
                    </p>
                </div>

                <div className={styles.resumeCard}>
                    <div className={styles.cardContent}>
                        <div className={styles.cvIcon}>
                            <i className="fas fa-file-pdf"></i>
                        </div>
                        
                        <h3 className={styles.cardTitle}>Currículum Vitae</h3>
                        <p className={styles.cardDescription}>
                            Obtén una visión completa de mi experiencia académica, 
                            habilidades técnicas y proyectos realizados.
                        </p>

                        <div className={styles.languageSelector}>
                            <p className={styles.selectorLabel}>Selecciona el idioma:</p>
                            <div className={styles.languageButtons}>
                                <button 
                                    className={`${styles.languageBtn} ${selectedLanguage === 'es' ? styles.active : ''}`}
                                    onClick={() => handleLanguageChange('es')}
                                >
                                    <i className="fas fa-flag"></i>
                                    Español
                                </button>
                                <button 
                                    className={`${styles.languageBtn} ${selectedLanguage === 'en' ? styles.active : ''}`}
                                    onClick={() => handleLanguageChange('en')}
                                >
                                    <i className="fas fa-flag"></i>
                                    English
                                </button>
                            </div>
                        </div>

                        <div className={styles.downloadSection}>
                            <button 
                                className={styles.downloadButton}
                                onClick={handleDownload}
                            >
                                <i className="fas fa-download"></i>
                                Descargar CV {selectedLanguage === 'es' ? '(Español)' : '(English)'}
                            </button>
                        </div>

                        <div className={styles.additionalInfo}>
                            <div className={styles.infoItem}>
                                <i className="fas fa-envelope"></i>
                                <span>marcuerodri@gmail.com</span>
                            </div>
                            <div className={styles.infoItem}>
                                <i className="fas fa-phone"></i>
                                <span>+34 644 428 895</span>
                            </div>
                            <div className={styles.infoItem}>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Málaga, España</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;