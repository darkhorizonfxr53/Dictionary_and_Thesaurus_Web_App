import React, { useState } from 'react'
import { fetchDictionaryData } from './services/Api' //Fetch from the API

const Dictionary = () => {
    //use useState for the user's input and the word's definition
    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('')

    const handleSearch = async () => {
        setError(null) //Reset error state
        const data = await fetchDictionaryData(word);
        if (data){   //if the word is found
            setDefinition(data[0])   //display the definition
        } else { //If the word is not found
            setError("Could not fetch the definition!")
        }
    }
    return (
        <div>
            <h2>Dictionary</h2>
            <input
                type='text'
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder='Enter a word'
             />
             <button onClick={handleSearch}>Search</button>
             {definition && (
                <div>
                    <h3>{definition.word}</h3>
                    <p>{definition.meanings[0].definitions[0].definition}</p>
                </div>
             )}
        </div>
    )
}

export default Dictionary