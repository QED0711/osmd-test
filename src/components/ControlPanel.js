import React from 'react';

import aMinResults from '../results/A_min9.json'

const SCORES = {
    "aMin": {
        url: "https://raw.githubusercontent.com/QED0711/osmd-test/main/src/scores/a_minor9_noteflight.xml",
        results: aMinResults
    }
}

const ControlPanel = ({
    selectedScore,
    setSelectedScore
}) => {
    console.log(selectedScore)

    const handleSongSelection = e => {
        e.target.value && setSelectedScore(SCORES[e.target.value])
    }

    return (
        <div>

            <select onChange={handleSongSelection}>
                <option value={null}>Select a Song</option>
                <option value="aMin">A Minor 9</option>
            </select>

            
            


        </div>
    )
}

export default ControlPanel