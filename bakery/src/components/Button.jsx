import React from  "react"

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <button className={this.props.isSelected} onClick={this.props.onChange}>{this.props.children}</button>
            </div>  
        )
    };
};