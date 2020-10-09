import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {TEST_XML} from "./test";

const opensheetmusicdisplay = require("opensheetmusicdisplay")

function App() {

  useEffect(() => {
    console.log(opensheetmusicdisplay)

    const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("sheetmusic")

    osmd.load(TEST_XML)
      .then(() => {
        osmd.render()
        osmd.cursor.show()
        osmd.cursor.next()

        debugger
      })
    // console.log(osmd)

  
    
  }, [])

  return (
    <div className="App">
      <div id="sheetmusic"></div>
    </div>
  );
}

export default App;
