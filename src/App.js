import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {TEST_XML} from "./test";
import { processXML } from './processXML';

const opensheetmusicdisplay = require("opensheetmusicdisplay")

function App() {

  useEffect(() => {
    console.log(opensheetmusicdisplay)

    const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("sheetmusic")


    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(TEST_XML, "text/xml")
    const processedXML = processXML(xmlDoc)

    

    osmd.load(processedXML)
      .then(() => {
        osmd.render()
      })
    
  }, [])

  return (
    <div className="App">
      <div className="container" style={{
        width: "95vw",
        margin: "0 auto"
      }}>
        <div id="sheetmusic" style={{height: "auto", width: "95%", margin: "0 auto", border: "2px solid red"}}></div>

      </div>
    </div>
  );
}

export default App;
