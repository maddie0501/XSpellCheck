import { useState } from "react";
import "./App.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [input, setInput] = useState("");
  const [suggesttext, setSuggesttext] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value; // take whatever typed
    setInput(text); // set same
    const words = text.split(" "); // split by space
    const correctwords = words.map((word) => {
      const correctword = customDictionary[word.toLowerCase()];
      return correctword || word; // map each word with correct or keep same
    });

    const firstcorrection = words.find(
      (word, index) => word.toLowerCase() !== correctwords[index].toLowerCase()
    );
    // find first wrong word and update with correct one in setsuggest same in return div displayed
    if (firstcorrection) {
      const correctedWord = customDictionary[firstcorrection.toLowerCase()];
      setSuggesttext(correctedWord);
    } else {
      setSuggesttext("");
    }
  };  // note: if multiple then to make a array of all and show same 

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>

      <textarea
        name=""
        id=""
        placeholder="Enter text..."
        value={input}
        onChange={handleInputChange}
        className="text"
      />

      {input && (
        <p>
          Did you mean: <strong>{suggesttext}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;
