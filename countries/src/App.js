import React from "react"
import './App.css';
import Button from "./composants/Button"
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Countries extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      name:"",
      capital:"",
      flag:"",
      population:"",
      region:"",
    }
    console.log(this.state.region)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getCountry = this.getCountry.bind(this)
  }

  getCountry(country){
    this.componentDidMount(country)
  }
    

  componentDidMount(){
    fetch(`https://restcountries.eu/rest/v2/name/france`)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.setState({
        name: result[0].name,
        capital: result[0].capital,
        flag: result[0].flag,
        population: result[0].population,
        region: result[0].region,
      });
    })
    .catch(error => console.error(error));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button onChangeCountry={this.getCountry("france")}>France</Button>
          <Button onChangeCountry={this.getCountry("brazil")}>Brazil</Button>
          <Button onChangeCountry={this.getCountry("croatia")}>Croatia</Button>
          <p>Name : {this.state.name}</p> 
          <p>Capital : {this.state.capital}</p>
        
          <p>Population : {this.state.population}</p>
          <p>Region : {this.state.region}</p>
        </header>
      </div>

    )
  }
}
