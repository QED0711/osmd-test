import React from 'react'

const AssessmentPanel = ({
    selectedScore,
    // setSelectedScore,
    gradedFeature,
    setGradedFeature,
    displayResults,
    setDisplayResults,
    assessmentPercentages,
    setAssessmentPercentages
}) => {

    // EVENTS
    const handleGradedFeatureSelection = feature => () => {
        setGradedFeature(feature)
    }

    return (
        <div>
            {
                (selectedScore && displayResults)
                &&
                <div>
                    <button className={`graded-feature-button ${gradedFeature === "overview" ? "selected" : ""}`} onClick={handleGradedFeatureSelection("overview")}>
                        Overview {(assessmentPercentages?.overall * 100).toFixed(2)}%
                    </button>
                    <button className={`graded-feature-button ${gradedFeature === "pitch" ? "selected" : ""}`} onClick={handleGradedFeatureSelection("pitch")}>
                        Pitch {(assessmentPercentages?.pitch * 100).toFixed(2)}%
                    </button>
                    <button className={`graded-feature-button ${gradedFeature === "rhythm" ? "selected" : ""}`} onClick={handleGradedFeatureSelection("rhythm")}>
                        Rhythm {(assessmentPercentages?.rhythm * 100).toFixed(2)}%
                    </button>
                </div>
            }
        </div>
    )

}

export default AssessmentPanel;