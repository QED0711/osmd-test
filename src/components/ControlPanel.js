import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';

import aMinResults from '../results/A_min9.json'
import cMajResults from '../results/C_major.json'
import bluesResults from '../results/12_bb.json'
import susSlashResults from '../results/sus_slash.json'

import aMinAudio from '../audio/A_min9.wav'
import cMajAudio from '../audio/C_major.wav'
import bluesAudio from "../audio/12_bar_blues_audio.wav"
import susSlashAudio from '../audio/sus_slash.wav'

const SCORES = {
    "a_min": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/feature/demo_results/src/scores/a_minor9_noteflight.xml",
        results: aMinResults,
        audio: aMinAudio
    },
    "c_maj": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/feature/demo_results/src/scores/c_maj_noteflight.xml",
        results: cMajResults,
        indexTransform: [0, 1, 2, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35, 36, 38, 40, 41, 43, 45, 46, 47, 48],
        audio: cMajAudio
    },
    "12_bb": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/feature/demo_results/src/scores/12_bb_noteflight.xml",
        indexTransform: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136
        ],
        results: bluesResults,
        audio: bluesAudio
    },
    "sus_slash": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/feature/demo_results/src/scores/Sus_Slash.xml",
        indexTransform: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 24, 25, 26, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 64, 65, 66, 67, 68, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 114, 115, 116, 117, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174
        ],
        results: susSlashResults,
        audio: susSlashAudio
    }
}

const MOCK_STAGES = [
    "Uploading", "Uploading", "Uploading", "Uploading",
    "Formatting Submission", "Formatting Submission",
    "Transcribing to MIDI", "Transcribing to MIDI", "Transcribing to MIDI", "Transcribing to MIDI", "Transcribing to MIDI", "Transcribing to MIDI", "Transcribing to MIDI",
    "Formatting Results", "Formatting Results",
]

const ControlPanel = ({
    selectedScore,
    setSelectedScore,
    gradedFeature,
    setGradedFeature,
    displayResults,
    setDisplayResults,
    assessmentPercentages,
    setAssessmentPercentages
}) => {

    // STATE
    const [assessing, setAssessing] = useState(false)
    const [assessmentStage, setAssessmentStage] = useState(0)
    const {songTitle} = useParams()
    console.log({songTitle})

    // EVENTS
    const handleSongSelection = e => {
        e.target.value && setSelectedScore(SCORES[e.target.value])
        setGradedFeature("overview")
        setDisplayResults(false)
    }

    const handleAssessPerformanceClick = async () => {
        setAssessing(true)
        await new Promise(resolve => setTimeout(resolve, 15000))
        setAssessing(false)
        setDisplayResults(true)
    }

    const handleGradedFeatureSelection = feature => () => {
        setGradedFeature(feature)
    }

    // ONLOAD
    useEffect(() => {
        if(assessing){
            const assessmentStageInterval = setInterval(() => {
                if(assessmentStage >= 15) {
                    clearInterval(assessmentStageInterval);
                    return;
                }
                setAssessmentStage(stage => stage + 1)
            }, 1000)
        }

    }, [assessing])

    useEffect(() => {
        
        if(!!songTitle && songTitle in SCORES){
            setSelectedScore(SCORES[songTitle])
            setGradedFeature("overview")
            setDisplayResults(true)
        }
    }, [songTitle])



    return (
        <div>

            {/* <select id="example-select" onChange={handleSongSelection}>
                <option value={null}>Select a Song</option>
                <option value="aMin">A Minor 9</option>
                <option value="cMaj">C Major Pentatonic</option>
            </select> */}

            {
                selectedScore
                &&
                <div className="sample-audio">
                    {/* <h2>Sample Audio</h2> */}
                    <audio id="user-audio" controls >
                        <source src={selectedScore.audio} type="audio/wav" />
                    </audio>
                </div>

            }

            <div id="assessment-panel">
                {
                    assessing
                    &&
                    <h2 id="assessment-stage">{MOCK_STAGES[assessmentStage]}...</h2>
                }
                {
                    (selectedScore && !displayResults && !assessing)
                    &&
                    <button id="assessment-button" class="selected" onClick={handleAssessPerformanceClick} disabled={displayResults}>Assess Performance</button>
                }

                {
                    (selectedScore && displayResults)
                    &&
                    <>

                        <button className={`graded-feature-button ${gradedFeature === "overview" ? "selected" : ""}`} onClick={handleGradedFeatureSelection("overview")}>
                            Overview {(assessmentPercentages?.overall * 100).toFixed(2)}%
                        </button>
                        <button className={`graded-feature-button ${gradedFeature === "pitch" ? "selected" : ""}`} onClick={handleGradedFeatureSelection("pitch")}>
                            Pitch {(assessmentPercentages?.pitch * 100).toFixed(2)}%
                        </button>
                        <button className={`graded-feature-button ${gradedFeature === "rhythm" ? "selected" : ""}`} onClick={handleGradedFeatureSelection("rhythm")}>
                            Rhythm {(assessmentPercentages?.rhythm * 100).toFixed(2)}%
                        </button>
                    </>
                }

            </div>







        </div>
    )
}

export default ControlPanel