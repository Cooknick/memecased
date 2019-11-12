import React, { useState } from "react";

function App() {
  const [phrase, setPhrase] = useState("");

  let upperCase = () => phrase.toUpperCase();
  let lowerCase = () => phrase.toLowerCase();

  let clapCase = () => {
    if (phrase.length === 0) {
      return "";
    }
    return phrase.replace(/\s/g, " 👏 ") + " 👏";
  };

  let spongeCase = () => {
    let charArray = [];

    if (phrase.length === 0) {
      return "";
    }

    for (let i = 0; phrase.length > i; i++) {
      let singleChar = phrase.charAt(i);
      if (i % 2 != 0) {
        charArray.push(singleChar.toUpperCase());
      } else {
        charArray.push(singleChar);
      }
    }
    return charArray.join('');
  };

  const changePhrase = e => {
    setPhrase(e.target.value);
  };

  return (
    <div className="App" style={{textAlign:"left"}}>
      <h1>Case Changer 3000</h1>
      <p>Input Phase:   
      <input
        type="text"
        onChange={event => changePhrase(event)}
        placeholder="words"
      /></p>
      <hr />
      <div style={{textAlign:"left"}}>
        <p>
          <b>Clap Case:</b> {clapCase()}
        </p>
        <p>
          <b>SpongeBob Case:</b> {spongeCase()}
        </p>
      </div>
    </div>
  );
}

export default App;


