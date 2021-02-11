import React from "react"

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
                            <div>
                                <p key={index}>{movie.title}</p>
                            </div>
                    )
                })}
            </div>
        )
    }
}