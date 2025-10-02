import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    const contactInfo = [
        {
            icon: 'fas fa-envelope',
            label: 'Email',
            value: 'marcuerodri@gmail.com',
            link: 'mailto:marcuerodri@gmail.com'
        },
        {
            icon: 'fas fa-phone',
            label: 'Phone',
            value: '+34 644 428 895',
            link: 'tel:+34644428895'
        },
        {
            icon: 'fab fa-linkedin',
            label: 'LinkedIn',
            value: 'marta-cuevas-rodriguez',
            link: 'https://www.linkedin.com/in/marta-cuevas-rodriguez-07564b368'
        },
        {
            icon: 'fab fa-github',
            label: 'GitHub',
            value: 'martacuevasr',
            link: 'https://github.com/martacuevasr'
        }
    ];

    return (
        <div className={styles.contactPage}>
            <div className={styles.container}>
                <div className={styles.contactHeader}>
                    <h1 className={styles.pageTitle}>Get In Touch</h1>
                    <p className={styles.subtitle}>
                        I'm always interested in new opportunities and collaborations. 
                        Let's connect and discuss how we can work together!
                    </p>
                </div>

                {/* TARJETA ÚNICA CON TODA LA INFORMACIÓN DE CONTACTO */}
                <div className={styles.contactMainCard}>
                    <h3 className={styles.contactMainTitle}>Contact Information</h3>
                    <div className={styles.contactList}>
                        {contactInfo.map((contact, index) => (
                            <div key={index} className={styles.contactItem}>
                                <div className={styles.contactItemIcon}>
                                    <i className={contact.icon}></i>
                                </div>
                                <div className={styles.contactItemContent}>
                                    <span className={styles.contactItemLabel}>{contact.label}:</span>
                                    <a 
                                        href={contact.link}
                                        target={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? '_blank' : '_self'}
                                        rel={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? 'noopener noreferrer' : ''}
                                        className={styles.contactItemValue}
                                    >
                                        {contact.value}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SOLO LA TARJETA DE "WHAT I'M LOOKING FOR" */}
                <div className={styles.additionalInfo}>
                    <div className={styles.infoCard}>
                        <h3 className={styles.infoTitle}>What I'm Looking For</h3>
                        <p className={styles.infoText}>
                            Opportunities in health engineering, data science, machine learning, 
                            and innovative healthcare solutions. Open to collaborations, 
                            full-time positions, and exciting projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;