import React, {Component} from 'react';
import './App.css'
import TrBotContext from './TrBotContext.js'
import {Route} from 'react-router-dom'
import * as Tone from 'tone'
import LandingPage from './LandingPage/LandingPage'
import CreateAccount from './CreateAccount/CreateAccount';
import SavePattern from './SavePattern/SavePattern'
import Interface from './Interface/Interface'
import {allSampler} from './samplers.js'
import {API_ENDPOINT} from './config'

class App extends Component {
  static contextType = TrBotContext

    constructor(props) {
        super(props);
        
        this.state = {
            patterns: [],
            patternSelect: null,
            currentPatternId: null,
            bpm: 120,
            volume: 100,
            kickSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            snareSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            hh1Steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            hh2Steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            clapSteps:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            percSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            currentStep: null
        }

    }


    createInstrSteps = (patternSelect) => { //generates steps based on the selected pattern
      this.setState({
          kickSteps: this.state.patterns[patternSelect].kick_steps,
          snareSteps: this.state.patterns[patternSelect].snare_steps,
          hh1Steps: this.state.patterns[patternSelect].hh1_steps,
          hh2Steps: this.state.patterns[patternSelect].hh2_steps,
          clapSteps: this.state.patterns[patternSelect].clap_steps,
          percSteps: this.state.patterns[patternSelect].perc_steps,
      })
    }


    updatePatternSelect = (index, patternId) => { //updates patternSelect id from PatternSelect component
      this.setState({
          patternSelect: index,
          currentPatternId: patternId

      }, () => {
          this.createInstrSteps(this.state.patternSelect)
      }) 
      
    }

    updateBpm = (bpm) => { //updates tempo from TransportSliders component
      this.setState({
          bpm: bpm
      })
      Tone.Transport.bpm.value = this.state.bpm
    }

    updateVolume = (vol) => { //updates volume from TransportSliders component
      this.setState({
          volume: vol,
      })
      this.gainControl()
    }

    gainControl = () => { //creates a Gain object from Tone.js that controls the output volume
      allSampler.disconnect()
      const gain = new Tone.Gain(this.state.volume / 100 < .05 ? 0 : this.state.volume / 100 )
      allSampler.connect(gain)
      gain.toDestination()
    }


    updateStep = (stepIndex, value, instrument) => { //function used to toggle step value on/off (1/0) in Instrument component
      
      switch (instrument) {
          case 'kick':
              const oldKickSteps = this.state.kickSteps;
              oldKickSteps[stepIndex] = 1 - value
              const newKickSteps = oldKickSteps

              this.setState({
                  kickSteps: newKickSteps
              })
              break;
          case 'snare':
              const oldSnareSteps = this.state.snareSteps;
              oldSnareSteps[stepIndex] = 1 - value
              const newSnareSteps = oldSnareSteps

              this.setState({
                  snareSteps: newSnareSteps
              })
              break;
          case 'hh1':
              const oldHh1Steps = this.state.hh1Steps;
              oldHh1Steps[stepIndex] = 1 - value
              const newHh1Steps = oldHh1Steps

              this.setState({
                  hh1Steps: newHh1Steps
              })
              break;
          case 'hh2':
              const oldHh2Steps = this.state.hh2Steps;
              oldHh2Steps[stepIndex] = 1 - value
              const newHh2Steps = oldHh2Steps
              
              this.setState({
                  hh2Steps: newHh2Steps
              })
              break;
          case 'clap':
              const oldClapSteps = this.state.clapSteps;
              oldClapSteps[stepIndex] = 1 - value
              const newClapSteps = oldClapSteps
              
              this.setState({
                  clapSteps: newClapSteps
              })
              break;
          case 'perc':
              const oldPercSteps = this.state.percSteps;
              oldPercSteps[stepIndex] = 1 - value
              const newPercSteps = oldPercSteps
              
              this.setState({
                  percSteps: newPercSteps
              })
              break;
          default:
      }  
    }

    playSequencer = () => { //connects the sampler instrument (allSampler) to the Transport of Tone.js. Allows for playback to repeat and keeps audio in sync
      allSampler.disconnect() //resets playback if already playing
      Tone.Transport.cancel()
      
      this.gainControl()

      const instrumentSeqs = [this.state.kickSteps, this.state.snareSteps, this.state.hh1Steps, this.state.hh2Steps, this.state.clapSteps, this.state.percSteps]
      const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4']
      let index = 0;

      this.setState({
          currentStep: -4
      })

      Tone.start()                    
      Tone.Transport.scheduleRepeat(repeat, '16n')
      Tone.Transport.scheduleRepeat(this.transportVisual, '4n')
      Tone.Transport.start()
      
      
      function repeat(time) {
          let step = index % 16; //sequence repeats after 16steps of playback
          for (let i = 0; i < notes.length; i++) { 
              let note = notes[i]
              let sequence = instrumentSeqs[i];
              if (sequence[step] === 1)allSampler.triggerAttackRelease([note], '16n', time) 
          }
          index++;
      }

    }

    transportVisual = () => { //visualizer set to follow each quarter note of playback
        this.setState(prevState => ({
            currentStep: (prevState.currentStep + 4) % 16})
        )
    }

    stopSequencer = () => {
      Tone.Transport.stop()
      Tone.Transport.cancel()
      allSampler.disconnect()
      this.setState({
          currentStep: null
      })
    }

    clearSteps = () => { //clears out any steps in current pattern
        this.setState({
            kickSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            snareSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            hh1Steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            hh2Steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            clapSteps:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            percSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        })

        this.stopSequencer()
    }

    savePattern = (patternData) => {
        this.setState({
            currentStep: null
        })

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(patternData)
        }

        fetch(`${API_ENDPOINT}api/patterns`, requestOptions)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Could not save pattern')
                }
                return response.json()
            })
            .catch(err => err.message)
               

        this.state.patterns.push(patternData)
        
        setTimeout(() => { // refreshes pattern list and updates pattern ID's from database and sets up new blank pattern
            fetch(`${API_ENDPOINT}api/patterns`)
                .then(response => {
                    if(!response.ok) {
                        throw new Error('Could not retrieve updated patterns')
                    }
                    return response.json()
                })
                .then(responseJson => {
                    this.setState({
                        patterns: responseJson,
                        currentPatternId: null,
                        patternSelect: null,
                        kickSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        snareSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        hh1Steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        hh2Steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        clapSteps:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        percSteps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  
                    })
                })
                .catch(err => err.message)
        }, 200)
    }

    deletePattern = (id) => {
        this.stopSequencer() //stop playback
        this.setState({
            currentStep: null
        })
        
        fetch(`${API_ENDPOINT}api/patterns/${id}`, {method: 'DELETE'})
          .then(response => {
              if(!response.ok) throw new Error('Could not delete pattern')  
          })
          .catch(err => err.message)


        const newPatternsList = this.state.patterns.filter(pattern => pattern.id !== id)

        const emptySteps = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        
        this.setState({
            patterns: newPatternsList,
            currentPatternId: newPatternsList[this.state.patternSelect] === undefined ? null : newPatternsList[this.state.patternSelect].id,
            kickSteps: newPatternsList[this.state.patternSelect] === undefined ? emptySteps : newPatternsList[this.state.patternSelect].kick_steps,
            snareSteps: newPatternsList[this.state.patternSelect] === undefined ? emptySteps : newPatternsList[this.state.patternSelect].snare_steps,
            hh1Steps: newPatternsList[this.state.patternSelect] === undefined ? emptySteps : newPatternsList[this.state.patternSelect].hh1_steps,
            hh2Steps: newPatternsList[this.state.patternSelect] === undefined ? emptySteps : newPatternsList[this.state.patternSelect].hh2_steps,
            clapSteps: newPatternsList[this.state.patternSelect] === undefined ? emptySteps : newPatternsList[this.state.patternSelect].clap_steps,
            percSteps: newPatternsList[this.state.patternSelect] === undefined ? emptySteps : newPatternsList[this.state.patternSelect].perc_steps

        })
    }

    componentDidMount() {

      fetch(`${API_ENDPOINT}api/patterns`)
          .then(response => {
              if(!response.ok) {
                  throw new Error('Could not retrieve patterns')
              }
              return response.json()
          })
          .then(responseJson => {
              this.setState({
                  patterns: responseJson
              })
              if(responseJson.length > 0) {
                this.createInstrSteps(this.state.patternSelect)
              }
          })
          .catch(err => err.message)

          
      
    }


    render() {
        const contextValue = {
            patterns: this.state.patterns,
            patternSelect: this.state.patternSelect,
            currentPatternId: this.state.currentPatternId,
            bpm: this.state.bpm,
            volume: this.state.volume,
            kickSteps: this.state.kickSteps,
            snareSteps: this.state.snareSteps,
            hh1Steps: this.state.hh1Steps,
            hh2Steps: this.state.hh2Steps,
            clapSteps:this.state.clapSteps,
            percSteps: this.state.percSteps,
            currentStep: this.state.currentStep,
            updatePatternSelect: this.updatePatternSelect,
            updateBpm: this.updateBpm,
            updateVolume: this.updateVolume,
            updateStep: this.updateStep,
            playSequencer: this.playSequencer,
            stopSequencer: this.stopSequencer,
            savePattern: this.savePattern,
            deletePattern: this.deletePattern,
            clearSteps: this.clearSteps
        }

    return (
      <main className='App'>
        <TrBotContext.Provider value={contextValue}>
          <Route
            exact
            path={'/'}
            component={LandingPage}/>
          <Route
            exact
            path={'/createaccount'}
            component={CreateAccount}/>
          <Route
            exact
            path={'/trbot'}
            component={Interface}/>
          <Route
            exact
            path={'/savepattern'}
            component={SavePattern}/>
          </TrBotContext.Provider>
      </main>
    )
  }
}

export default App;
