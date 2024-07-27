# Dictionary and Thesaurus App

A simple React application that allows users to search for word definitions and synonyms using dictionary and thesaurus APIs.

## Features

- **Dictionary**: Fetches and displays the definition of a given word.
- **Thesaurus**: Fetches and displays synonyms for a given word.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **Dictionary API**: [DictionaryAPI.dev](https://dictionaryapi.dev/)
- **Thesaurus API**: [Datamuse API](https://www.datamuse.com/api/)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/dictionary-thesaurus-app.git
   cd dictionary-thesaurus-app

2. **Install dependencies:**
    
    npm install

3. **Run the app:**

    npm start

    The app should now be running at http://localhost:3000.

## Project Structure

dictionary-thesaurus-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Dictionary.js
│   │   ├── Thesaurus.js
│   ├── services/
│   │   └── api.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── package.json
├── package-lock.json
└── README.md