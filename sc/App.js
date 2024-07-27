import React from "react";
import Dictionary from "./components/Dictionary";
import Thesaurus from "./components/Thesaurus";
import './App.css'

const App = () => {
    return(
        <div className="App">
            {/* Give the app a title */}
            <h1>Dictionary and Thesaurus App!</h1>
            {/* Bring in the functional components */}
            <Dictionary />
            <Thesaurus />
        </div>
    )
}
export default App