import React from "react"

export default class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: "",
        }
    }

    componentDidMount(){
        this.getFilms()
    }

    getFilms(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ca6a8c7473b663934ff3f280ebf2cfb8")
        .then(response => response.json())
        .then(result => {
            console.log(result)
            result.map((films) => {
                return (films === result.results.original_title)
            })
            this.setState({
                movies: result.original_title
            })
        })
        .catch(error => console.error(error))
    }

    render(){
        return(
            <h1>{this.state.movies}</h1>
        )
    }
}