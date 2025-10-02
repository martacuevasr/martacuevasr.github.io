# Portfolio Website

This is a personal portfolio website for Marta Cuevas, an engineer in health. The website showcases her skills, projects, resume, and contact information.

## Features

- **Home Page**: Introduces Marta Cuevas and her profession.
- **About Page**: Contains personal information, skills, and tools used.
- **Projects Page**: Lists various projects with details fetched from a JSON file.
- **Resume Page**: Allows users to download the CV in both English and Spanish.
- **Contact Page**: Displays personal contact information including phone number and email.

## Project Structure

```
portfolio-website
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Navigation.js
│   │   └── LanguageToggle.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Resume.js
│   │   └── Contact.js
│   ├── styles
│   │   ├── globals.css
│   │   ├── Home.module.css
│   │   ├── About.module.css
│   │   ├── Projects.module.css
│   │   ├── Resume.module.css
│   │   └── Contact.module.css
│   ├── assets
│   │   ├── documents
│   │   │   ├── cv-english.pdf
│   │   │   └── cv-spanish.pdf
│   │   └── data
│   │       ├── projects.json
│   │       ├── skills.json
│   │       └── translations.json
│   ├── utils
│   │   └── i18n.js
│   ├── App.js
│   └── index.js
├── public
│   └── index.html
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License.