import React, { useEffect, useState } from 'react';


import cMaj from './results/C_major.json'
import aMin from './results/A_min9.json'


import './App.css';

import { TEST_XML } from "./test";
import { processXML } from './processXML';
import ControlPanel from './components/ControlPanel';
import ScoreDisplay from './components/ScoreDisplay';
import AssessmentPanel from './components/AssessmentPanel';

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
    const [displayResults, setDisplayResults] = useState(false)
    const [gradedFeature, setGradedFeature] = useState("overview")
    const [assessmentPercentages, setAssessmentPercentages] = useState(null)



    return (
        <div className="App">

            <ControlPanel {...{
                selectedScore,
                setSelectedScore,
                gradedFeature,
                setGradedFeature,
                displayResults,
                setDisplayResults,
                assessmentPercentages,
                setAssessmentPercentages
            }} />
            <ScoreDisplay {...{
                selectedScore,
                gradedFeature,
                displayResults,
                setAssessmentPercentages
            }} />


        </div>
    );
}

export default App;
