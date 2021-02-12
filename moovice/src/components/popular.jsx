import React from "react"
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: [],
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
        fetch(`https://image.tmdb.org/t/p/w300/${this.state.movies.poster_path}`)
        .then(response => response.blob())
        .then(resultat => {
            console.log(resultat)
            
        })
        .catch(error => console.error(error))
    }

    render(){
        console.log("render",this.state.movies.length)

        // const movies = this.state.movies
        
        return(
            <div>
                {this.state.movies
                    .map((movie, index) => {
                        return(
                            <div className="d-flex justify-content-center">
                                {/* <p key={index}>{movie.title}</p> */}
                                <Card key={index} titre={movie.title} date={movie.release_date} description={movie.overview} affiche={movie.poster_path} {...this.state.movies}></Card>
                            </div>
                    )
                })}
            </div>
        )
    }
}