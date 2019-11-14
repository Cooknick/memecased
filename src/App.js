import React, { useState } from "react";

import SingleCase from './components/single-case';
import Header from './components/header';
import { clapCase, spongeCase } from './cases';

function App() {
  const [phrase, setPhrase] = useState('');
  const [copiedCase, setCopiedCase] = useState({
    clap: false,
    sponge: false,
  });


  const changePhrase = e => {
    setPhrase(e.target.value);
  };

  return (
    <div className="appWrapper">
      <div className="App" style={{ textAlign: "left" }}>
        <Header />
        <input
          type="text"
          onChange={event => changePhrase(event)}
          placeholder="Paste your text here."
        />
        <div style={{ textAlign: "left" }}>
          <SingleCase
            caseChanger={() => clapCase(phrase)}
            caseName={"Clap Case"}
            copied={{
              isCopied: copiedCase.clap,
              setCopied: (value) => setCopiedCase({ clap: value })
            }}
          />
          <SingleCase
            caseChanger={() => spongeCase(phrase)}
            caseName={"Sponge Case"}
            copied={{
              isCopied: copiedCase.sponge,
              setCopied: (value) => setCopiedCase({ sponge: value })
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;


