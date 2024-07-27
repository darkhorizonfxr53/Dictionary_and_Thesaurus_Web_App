import React, { useState } from "react";
import { fetchThesaurusData } from "./services/Api"; //fetch the data from the api

const Thesaurus = () => {
    //use useState for the words given as well as their synonyms
    const [word , setWord] = useState('');
    const [synonyms, setSynonyms] = useState('')
    //Create a function to get the data from the api
    const handleSearch = async () => {
        const data = await fetchThesaurusData(word);
        //If a synonym for the user's input exists
        if(data) {
            setSynonyms(data)
            //Some error handling in case a user puts in a wrong word
        } else {
            alert("Synonym not found!")
        }
    }
    return (
        <div>
          <h2>Thesaurus</h2>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Enter a word"
          />
          <button onClick={handleSearch}>Search</button>
          {synonyms.length > 0 && (
            <ul>
              {synonyms.map((synonym, index) => (
                <li key={index}>{synonym.word}</li>
              ))}
            </ul>
          )}
        </div>
      );
    };
    export default Thesaurus;