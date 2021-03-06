import React from 'react'

const TrBotContext = React.createContext({
    patterns: [],
    patternSelect: 0,
    currentPatternId: null,
    bpm: 120,
    volume: 100,
    kickSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    snareSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    hh1Steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    hh2Steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    clapSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    percSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    currentStep: null,
    updatePatternSelect: () => {},
    updateBpm: () => {},
    updateVolume: () => {},
    updateStep: () => {},
    playSequencer: () => {},
    stopSequencer: () => {},
    savePattern: () => {},
    deletePattern: () => {},
    clearSteps: () => {}
})

export default TrBotContext;