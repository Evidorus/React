import React from "react"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Weekly from "./components/weekly"
import WeeklyBattle from "./components/weekly-battle"
import Popular from "./components/popular"
import PopularBattle from "./components/popular-battle"
import Favorites from "./components/favorites"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <BrowserRouter>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
          <a class="navbar-brand" href="#">CpasBien</a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to={"/weekly"}>Weekly</Link> 
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/weekly-battle"}>Weekly-Battle</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/popular"}>Popular</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/popular-battle"}>Popular-Battle</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/favorites"}>Favorites</Link>
            </li>
          </ul>
        </nav>
        {/* <h1>Bienvenue sur mon site</h1>
        <nav>
          
          
          <Link </Link>
          <Link </Link>
        </nav>  */}

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
