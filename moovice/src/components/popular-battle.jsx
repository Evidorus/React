
import React from "react"
import Card from "./Card"

export default class PopularBattle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            currentBattle: 0,

        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ca6a8c7473b663934ff3f280ebf2cfb8")
        .then(response => response.json())
        .then(result => {
            console.log(result)
            this.setState({
                movies: result.results
            }) 
            console.log("aaaa",this.state.movies.length)
        })
        .catch(error => console.error(error))
    }

    render(){
        console.log("render",this.state.movies.length)
        
        return(
            <div>
                {this.state.movies
                    .slice(0,2)
                    .map((movie, index) => {
                        return(
                            <div>
                                <Card key={index} titre={movie.title} date={movie.release_date} description={movie.overview} affiche={movie.poster_path} {...this.state.movies}></Card>
                            </div>
                        )
                    })
                }
                            
            </div>
        )
    }
}