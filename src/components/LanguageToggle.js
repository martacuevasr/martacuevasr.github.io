import React, { useState } from 'react';

const LanguageToggle = ({ onLanguageChange }) => {
    const [currentLang, setCurrentLang] = useState('es');

    const handleLanguageChange = (lang) => {
        setCurrentLang(lang);
        if (onLanguageChange) {
            onLanguageChange(lang);
        }
    };

    return (
        <div className="language-toggle">
            <button 
                className={`lang-btn ${currentLang === 'es' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('es')}
            >
                Español
            </button>
            <button 
                className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
            >
                English
            </button>
        </div>
    );
};

export default LanguageToggle;