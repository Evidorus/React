import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'

export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: [],
        }
        console.log(this.state.movies)
    }

    render(){
        let url = `https://image.tmdb.org/t/p/w300/${this.props.affiche}`
        return(
            <div className="container">


                <div className="movie-card">
                    <div className="movie-header">
                        <img className="movie-header" src={url} alt=""/>
                        <div className="header-icon-container">
                            <a href="#">
                                <i className="material-icons header-icon"></i>
                            </a>
                        </div>
                    </div>
                    <div className="movie-content">
                        <div className="movie-content-header">
                            <a href="#">
                                <h3 className="movie-title">{this.props.titre}</h3>
                            </a>
                        </div>
                        <div className="movie-info">
                            <div className="info-section">
                                <label>Date of Release</label>
                                <span>{this.props.date}</span>
                            </div>
                            <div className="info-section">
                                <label>description</label>
                                <span>{this.props.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}