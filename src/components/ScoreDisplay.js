import React, { useEffect, useState } from 'react';
import { fillNoteColor } from '../js/displayHelpers';

const opensheetmusicdisplay = require("opensheetmusicdisplay")

const ScoreDisplay = ({
    selectedScore,
    gradedFeature,
    displayResults,
    setAssessmentPercentages
}) => {

    const [xml, setXml] = useState(null)
    const [svg, setSvg] = useState(null)


    // ON LOAD
    useEffect(() => {


        if (selectedScore) {
            fetch(selectedScore.url)
                .then(response => response.text())
                .then(data => {
                    setXml(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }



    }, [selectedScore])

    useEffect(() => {

        if (xml && selectedScore) {
            const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("sheetmusic")

            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(xml, "text/xml")

            osmd.load(xmlDoc)
                .then(async () => {

                    let svgElements;

                    const checkSVG = setInterval(() => {
                        svgElements = [...document.querySelectorAll("svg")]
                        if (svgElements) {
                            clearInterval(checkSVG)
                            setSvg(svgElements)
                        }
                    }, 50)
                })
        }

    }, [xml, selectedScore])

    useEffect(() => {

        if(svg && displayResults){
            svg.forEach(svgElement => {
                const notes = svgElement.querySelectorAll(".vf-tabnote, .vf-notehead");
                const results = selectedScore.results
                const indexTransform = selectedScore.indexTransform

                
                console.log(results.length)
                
                const overall = selectedScore.results.filter(r => r.assessment.pitch && r.assessment.rhythm).length / results.length
                const pitch = selectedScore.results.filter(r => r.assessment.pitch).length / results.length
                const rhythm = selectedScore.results.filter(r => r.assessment.rhythm).length / results.length

                setAssessmentPercentages({overall, pitch, rhythm})
                
                window.__matchedNotes = []
                let note, cls, passed, choice;
                results.forEach((r, i) => {

                    note = indexTransform ? notes[indexTransform[i]] : notes[i]

                    switch(gradedFeature){
                        case "overview":
                            passed = results[i]?.assessment?.pitch && results[i].assessment.rhythm
                            break;
                        case "pitch":
                            passed = results[i]?.assessment?.pitch
                            break;
                        case "rhythm":
                            passed = results[i]?.assessment?.rhythm
                            break;
                    }

                    if (!passed) {
                        fillNoteColor(note, "red")
                    } else {
                        fillNoteColor(note, "black")
                    }
                })
            })
        }

    }, [gradedFeature, svg, displayResults])

    return (

        <div className="container" style={{
            width: "95vw",
            margin: "0 auto"
        }}>
            <div id="sheetmusic" style={{ height: "auto", width: "95%", margin: "0 auto" }}></div>

        </div>
    )
}

export default ScoreDisplay;