import React from "react"
class Counter extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.resultatDuCounter}</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.props.retire}>
                    -
                    </button>
                    <button className="btn btn-secondary" onClick={this.props.ajoute}>
                    +
                    </button>
                </div>
            </div>
        )
    }
}
export default Counter;