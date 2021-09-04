import React, { useEffect, useState } from 'react';

const opensheetmusicdisplay = require("opensheetmusicdisplay")

const ScoreDisplay = ({
    selectedScore
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

                            svgElements.forEach(svgElement => {
                                const notes = svgElement.querySelectorAll(".vf-tabnote, .vf-notehead");
                                const results = selectedScore.results
                                const overallGrade = selectedScore.results.filter(r => r.assessment.pitch && r.assessment.rhythm).length / results.length
                                const pitchGrade = selectedScore.results.filter(r => r.assessment.pitch).length / results.length
                                const rhythmGrade = selectedScore.results.filter(r => r.assessment.rhythm).length / results.length

                                console.table({
                                    overallGrade,
                                    pitchGrade,
                                    rhythmGrade
                                })

                                let cls, passed, choice;
                                notes.forEach((note, i) => {
                                    cls = note.classList.value;
                                    passed = results[i].assessment.pitch /* && results[i].assessment.rhythm */


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

    }, [xml, selectedScore])

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