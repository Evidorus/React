import React from "react"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Weekly from "./components/weekly"
import WeeklyBattle from "./components/weekly-battle"
import Popular from "./components/popular"
import PopularBattle from "./components/popular-battle"
import Favorites from "./components/favorites"
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <BrowserRouter>
        <h1>Bienvenue sur mon site</h1>
        <nav>
          <Link to={"/weekly"}>Weekly</Link>
          <Link to={"/weekly-battle"}>Weekly-Battle</Link>
          <Link to={"/popular"}>Popular</Link>
          <Link to={"/popular-battle"}>Popular-Battle</Link>
          <Link to={"/favorites"}>Favorites</Link>
        </nav> 

        <Switch>
          <Route 
            path="/weekly"
            render={(props) => {
              return <Weekly {...props}/>
            }}/>
          <Route 
            path="/weekly-battle"
            render={(props) => {
              return <WeeklyBattle {...props}/>
            }}/>
          <Route 
            path="/popular"
            render={(props) => {
              return <Popular {...props}/>
            }}/>
          <Route 
            path="/popular-battle"
            render={(props) => {
              return <PopularBattle {...props}/>
            }}/>
          <Route 
            path="/favorites"
            render={(props) => {
              return <Favorites {...props}/>
            }}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
