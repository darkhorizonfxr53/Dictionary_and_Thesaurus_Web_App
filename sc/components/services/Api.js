import axios from 'axios';

// Base URLs for the dictionary and thesaurus APIs
const DICTIONARY_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';
const THESAURUS_API_URL = 'https://api.datamuse.com/words?ml=';

/**
 * Fetches dictionary data for a given word.
 * @param {string} word - The word to fetch the definition for.
 * @returns {Promise<Object|null>} - The dictionary data or null in case of an error.
 */
export const fetchDictionaryData = async (word) => {
  try {
    const response = await axios.get(`${DICTIONARY_API_URL}/${word}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error(`Error: ${error.response.status} - ${error.response.data.message}`);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Error: No response received from the dictionary API');
    } else {
      // Something else happened while setting up the request
      console.error(`Error: ${error.message}`);
    }
    return null;
  }
};

/**
 * Fetches thesaurus data (synonyms) for a given word.
 * @param {string} word - The word to fetch synonyms for.
 * @returns {Promise<Array|null>} - The list of synonyms or null in case of an error.
 */
export const fetchThesaurusData = async (word) => {
  try {
    const response = await axios.get(`${THESAURUS_API_URL}${word}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error(`Error: ${error.response.status} - ${error.response.data.message}`);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Error: No response received from the thesaurus API');
    } else {
      // Something else happened while setting up the request
      console.error(`Error: ${error.message}`);
    }
    return null;
  }
};
