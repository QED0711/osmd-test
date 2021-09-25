import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

import aMin9ExampleAudio from '../audio/a_min9_example.wav'
import cMajExampleAudio from '../audio/c_maj_example.wav'
import twelveBbExampleAudio from '../audio/12_bb_example.wav'
import susSlashExampleAudio from '../audio/sus_slash_example.wav'

const opensheetmusicdisplay = require("opensheetmusicdisplay")


const SCORES = {
    "a_min": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/main/src/scores/a_minor9_noteflight.xml",
        exampleAudio: aMin9ExampleAudio
    },
    "c_maj": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/feature/demo_results/src/scores/c_maj_noteflight.xml",
        exampleAudio: cMajExampleAudio
    },
    "12_bb": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/feature/demo_results/src/scores/12_bb_noteflight.xml",
        exampleAudio: twelveBbExampleAudio
    },
    "sus_slash": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/feature/demo_results/src/scores/Sus_Slash.xml",
        exampleAudio: susSlashExampleAudio
    }
}

const UngradedDisplay = () => {

    const [xml, setXml] = useState(null)
    const [svg, setSvg] = useState(null)
    const { songTitle } = useParams()
    const [playingAudio, setPlayingAudio] = useState(false);
    const audioRef = useRef(null)

    // EVENTS
    const handleToggleAudio = () => {
        const audioElement = audioRef.current
        if(audioElement){
            playingAudio 
                ? audioElement.pause()
                : audioElement.play()

            setPlayingAudio(!playingAudio)
        }
    }

    // EFFECTS
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
            const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("sheetmusic", {drawTitle: false})

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
        <>
        <audio ref={audioRef} className="sample-audio" controls>
            <source src={SCORES[songTitle]?.exampleAudio} type="audio/wav" />
        </audio>
        <button className="audio-toggle" onClick={handleToggleAudio}>{playingAudio ? "Pause" : "Play"}</button>
        <div className="container" style={{
            width: "100vw",
            margin: "0 auto"
        }}>
            <div id="sheetmusic" style={{ height: "auto", width: "100%", margin: "0 auto" }}></div>

        </div>
        </>
    )

}

export default UngradedDisplay