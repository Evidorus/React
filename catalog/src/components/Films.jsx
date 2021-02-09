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
          <div>
            {this.props.film}
            {this.props.match.params.name}
          </div>
        )
    }
}