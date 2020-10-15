import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { TEST_XML } from "./test";
import { processXML } from './processXML';

const opensheetmusicdisplay = require("opensheetmusicdisplay")


// CONFIG
const BEETHOVEN = "https://raw.githubusercontent.com/opensheetmusicdisplay/opensheetmusicdisplay/develop/test/data/Beethoven_AnDieFerneGeliebte.xml"
const DEBUSSY = "https://raw.githubusercontent.com/opensheetmusicdisplay/opensheetmusicdisplay/develop/test/data/Debussy_Mandoline.xml"
const BACH = "https://raw.githubusercontent.com/opensheetmusicdisplay/opensheetmusicdisplay/develop/test/data/JohannSebastianBach_Air.xml"



function App() {

    const [xml, setXML] = useState(null)

    // EVENTS
    const fetchData = url => e => {

        fetch(url)
            .then(response => response.text())
            .then(data => {
                setXML(data)
            })

    }


    useEffect(() => {

        if (xml) {
            const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("sheetmusic")

            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(xml, "text/xml")
            const processedXML = processXML(xmlDoc)

            osmd.load(processedXML)
                .then(() => { osmd.render() })
        }

    }, [xml])

    return (
        <div className="App">

            <button className="selection-button" onClick={fetchData(BEETHOVEN)}>Test 1</button>
            <button className="selection-button" onClick={fetchData(DEBUSSY)}>Test 2</button>
            <button className="selection-button" onClick={fetchData(BACH)}>Test 3</button>
            <div className="container" style={{
                width: "95vw",
                margin: "0 auto"
            }}>
                <div id="sheetmusic" style={{ height: "auto", width: "95%", margin: "0 auto" }}></div>

            </div>
        </div>
    );
}

export default App;
