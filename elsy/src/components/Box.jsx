import React from "react";

export class Box extends React.Component {
    render() {
        if (this.props.icon !== "local_drink" ) {
            return (
                <div class="box col-sm-3 col-6">
                    <span style={{fontSize : 100, color : this.props.color}} class="material-icons">
                        {this.props.icon}
                    </span>
                    <p>{this.props.value}{this.props.unit}</p>
                    <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange}/> 
                </div>   
            ) 
        }
        else {
            return (
                <div class="box col-sm-3 col-6">
                    <span style={{fontSize : 100, color : this.props.color}} class="material-icons">
                        {this.props.icon}
                    </span>
                    <p>{this.props.value}{this.props.unit}</p>
                </div>   
            )
        }
    }           
}        
        
    


export default Box;