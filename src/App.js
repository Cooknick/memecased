import React, { useState } from "react";

import SingleCase from './components/single-case';
import Header from './components/header';
import Footer from './components/footer';
import { clapCase, spongeCase, alarmCase } from './cases';

function App() {
  const [phrase, setPhrase] = useState('');
  const [copiedCase, setCopiedCase] = useState({
    clap: false,
    sponge: false,
    alarm: false,
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
          <SingleCase
            caseChanger={() => alarmCase(phrase)}
            caseName={"Alarm Case"}
            copied={{
              isCopied: copiedCase.alarm,
              setCopied: (value) => setCopiedCase({ alarm: value })
            }}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;


