import translations from '../assets/data/translations.json';

const i18n = {
    currentLanguage: 'es', // Default language

    setLanguage(language) {
        this.currentLanguage = language;
    },

    translate(key) {
        return translations[this.currentLanguage][key] || key;
    },

    getCurrentLanguage() {
        return this.currentLanguage;
    }
};

export default i18n;