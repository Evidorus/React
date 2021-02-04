import React from  "react"

const min = 1;
const max = 10;

export default class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productName : "",
            price : 1,
        }
        this.updateItemName = this.updateItemName.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.add = this.add.bind(this);
    }

    updatePrice(e){
        this.setState({
            price : e.target.value,
        })
    }

    updateItemName(e){
        this.setState({
            productName : e.target.value,
        })
    }

    add(){
        this.props.addItems(this.state.productName,this.state.price)
    }

    render () {
        return (
            <div className="flex">
                <input onChange={this.updateItemName} type="text"></input>
                <input onChange={this.updatePrice} type="range" min={min} max={max}/>
                <button onClick={this.add}>Add</button>
            </div>
            
        )
    };
};