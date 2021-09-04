import React, { useEffect, useState } from 'react';


import cMaj from './results/C_major.json'
import aMin from './results/A_min9.json'


import './App.css';

import { TEST_XML } from "./test";
import { processXML } from './processXML';
import ControlPanel from './components/ControlPanel';
import ScoreDisplay from './components/ScoreDisplay';

const opensheetmusicdisplay = require("opensheetmusicdisplay")


// CONFIG
const BEETHOVEN = "https://raw.githubusercontent.com/opensheetmusicdisplay/opensheetmusicdisplay/develop/test/data/Beethoven_AnDieFerneGeliebte.xml"
const DEBUSSY = "https://raw.githubusercontent.com/opensheetmusicdisplay/opensheetmusicdisplay/develop/test/data/Debussy_Mandoline.xml"
const BACH = "https://raw.githubusercontent.com/opensheetmusicdisplay/opensheetmusicdisplay/develop/test/data/JohannSebastianBach_Air.xml"

const VEEVR_TEST = "https://raw.githubusercontent.com/QED0711/osmd-test/main/src/scores/12%20Bar%20Blues%20in%20A%20(Alternate%20RhythmLead).xml"

const C_MAJOR = "https://raw.githubusercontent.com/QED0711/osmd-test/main/src/scores/c_maj_noteflight.xml"
const A_MIN9 = "https://raw.githubusercontent.com/QED0711/osmd-test/main/src/scores/a_minor9_noteflight.xml"



function App() {

    const [xml, setXML] = useState(null)
    const [svg, setSvg] = useState(null)
    const [selectedScore, setSelectedScore] = useState(null)

    // EVENTS
    const fetchData = (url, score) => e => {



        svg && svg.forEach(el => el.remove())
        setSvg(null)

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
            // const processedXML = processXML(xmlDoc)

            osmd.load(xmlDoc)
                .then(async () => {

                    let svgElements;

                    const checkSVG = setInterval(() => {
                        svgElements = [...document.querySelectorAll("svg")]
                        if (svgElements) {
                            clearInterval(checkSVG)
                            setSvg(svgElements)

                            svgElements.forEach(svgElement => {
                                const notes = svgElement.querySelectorAll(".vf-tabnote, .vf-notehead");
                                const results = aMin



                                let cls, passed, choice;
                                notes.forEach((note, i) => {
                                    cls = note.classList.value;
                                    passed = results[i].assessment.rhythm /* && results[i].assessment.rhythm */


                                    // choice = Math.random()

                                    if (!passed) {
                                        if (cls === "vf-notehead") {
                                            note.querySelector("path").setAttribute("fill", "red")
                                        } else if (cls === "vf-tabnote") {
                                            for (let rect of note.querySelectorAll("rect")) {
                                                rect.setAttribute("fill", "red")
                                            }
                                        }
                                    }
                                })
                            })
                        }
                    }, 50)
                })
        }

    }, [xml])

    return (
        <div className="App">

            <ControlPanel {...{ selectedScore, setSelectedScore }} />
            <ScoreDisplay {...{ selectedScore }} />


        </div>
    );
}

export default App;
