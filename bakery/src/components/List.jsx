import React from  "react";
import '../App.css';

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
        }
        console.log(this.state.items)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        this.setState({
            items : this.props.baka
        })
    }

    render () {
        return (
            <div className="container-fluid flex">
                    {this.props.baka.map(curr => {
                        return ( <li className="flex2">{curr.name} - {curr.price}</li> )
                    })}
            </div>
        )
    };
};