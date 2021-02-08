import React from "react"

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <button onClick={this.props.onChangeCountry}>{this.props.children}</button>
        )
    }
}