import React from "react";
import './App.css';
import './styles/global.css';
import Box from "./components/Box"

const waterMin = 1.5;
const waterMax = 6;
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      water : 0,
      heart : 120,
      temperature : -10,
      steps : 3000,
      onHeartChange : (value) => {
        this.setState({heart:value.target.value});
        this.state.calculateWater();
      },
      onStepsChange : (value) => {
        this.setState({steps:value.target.value});
        this.state.calculateWater();
      },
      onTempChange : (value) => {
        this.setState({temperature:value.target.value});
        this.state.calculateWater();
      },
      calculateWater : () => {
        let water = this.state.water;
        if (this.state.temperature > 20) {
          const nbSup20 = this.state.temperature - 20;
          const nbLitreToAdd = 0.02 * nbSup20;
          water = water + nbLitreToAdd;
        }
        if (this.state.heart > 120) {
          const nbHeartBeatSup = this.state.heart -120;
          const nbHeartToAdd = 0.0008 * nbHeartBeatSup;
          water = water + nbHeartToAdd;
        }
        if (this.state.steps > 10000) {
          const nbStepsSup = this.state.steps -120;
          const nbHeartToAdd = 0.0008 * nbStepsSup;
          water = water + nbHeartToAdd;
        }
        
      }
    }
  }
  

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
          {/* Water */}
          <Box icon={"local_drink"} color={"#3A85FF"} min={waterMin} max={waterMax} value={this.state.water} unit={"L"} />
          {/* Steps */}
          <Box icon={"directions_walk"} color={"black"} min={stepsMin} max={stepsMax} value={this.state.steps} unit={"steps"} onChange={this.state.onStepsChange}/>
          {/* Heart */}
          <Box icon={"favorite"} color={"red"} min={heartMin} max={heartMax} value={this.state.heart} unit={"bpm"} onChange={this.state.onHeartChange}/>
          {/* Temperature */}
          <Box icon={"wb_sunny"} color={"yellow"} min={tempMin} max={tempMax} value={this.state.temperature} unit={"°C"} onChange={this.state.onTempChange}/>
        </div>
      </div>
    );
  }
}

export default App;