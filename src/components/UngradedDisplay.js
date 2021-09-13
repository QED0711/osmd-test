import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const opensheetmusicdisplay = require("opensheetmusicdisplay")

const SCORES = {
    "a_min": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/main/src/scores/a_minor9_noteflight.xml",
    },
    "c_maj": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/feature/demo_results/src/scores/c_maj_noteflight.xml",
    },
    "12_bb": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/feature/demo_results/src/scores/12_bb_noteflight.xml",
    },
    "sus_slash": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/feature/demo_results/src/scores/Sus_Slash.xml",
    }
}

const UngradedDisplay = () => {

    const [xml, setXml] = useState(null)
    const [svg, setSvg] = useState(null)
    const { songTitle } = useParams()

    useEffect(() => {

        if (!!SCORES[songTitle]) {
            fetch(SCORES[songTitle].url)
                .then(response => response.text())
                .then(data => {
                    setXml(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }, [songTitle])

    useEffect(() => {
        if (xml) {
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
    }, [xml])

    return (
        <div className="container" style={{
            width: "95vw",
            margin: "0 auto"
        }}>
            <div id="sheetmusic" style={{ height: "auto", width: "95%", margin: "0 auto" }}></div>

        </div>
    )

}

export default UngradedDisplay