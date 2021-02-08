import React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Films from "./components/Films"

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <BrowserRouter>
        <h1>Catalogue de films</h1>
        <Films></Films>
      </BrowserRouter>
    )
  }

}