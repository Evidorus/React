import React from "react"
import "./Films.css"

export default class Films extends React.Component{
    constructor(props){
      super(props);
      this.state = {
            
      }
    }


    render(){
        return(
          <div className="fond2">
            {this.props.movies
            .filter((movie) => {
              return movie.id === parseInt(this.props.match.params.id)
            })
            .map((movie) => {
              return (
                <div>
                  <img src={movie.image} alt={`l'affiche de ${movie.title}`}/>
                  <h2>{movie.title}</h2>
                  <h2>{movie.director}</h2>
                  <h2>{movie.stars}</h2>
                  <h2>{movie.description}</h2>
                </div>
              )
            })}
          </div>
        )
    }
}