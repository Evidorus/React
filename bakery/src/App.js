import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Button from "./components/Button";


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: "Add",
      items: [],
    }
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  selectAdd(){
    this.setState({
      activeTab : "Add",
    });
  };

  selectList(){
    this.setState({
      activeTab : "List",
    });
  };

  selectPay(){
    this.setState({
      activeTab : "Pay",
    });
  };

  addItem(productName, price){
    const items = {name : productName, price : price};
    const newItems = this.state.items;
    newItems.push(items);
    this.setState({
      items: newItems,
    })
    console.log(this.state.items);
  }

  render () {
    if (this.state.activeTab === "Add") {
      return (<div className="flex container-fluid">
                <Button onChangeProduct={this.updateProductName} onChange={this.selectAdd} isSelected={this.state.activeTab === "Add" ? "form-control btn btn-primary" : "form-control btn btn-light"}>Add</Button>
                <Button onChange={this.selectList} isSelected={this.state.activeTab === "List" ? "form-control btn btn-primary" : "form-control btn btn-light"}>List</Button>
                <Button onChange={this.selectPay} isSelected={this.state.activeTab === "Pay" ? "form-control btn btn-primary" : "form-control btn btn-light"}>Pay</Button>
                <Add addItems={this.addItem} baka={this.state.items}/>
              </div>)
    }
    if (this.state.activeTab === "List") {
      return (<div className="flex container-fluid">
                <Button onChange={this.selectAdd} isSelected={this.state.activeTab === "Add" ? "form-control btn btn-primary" : "form-control btn btn-light"}>Add</Button>
                <Button onChange={this.selectList} isSelected={this.state.activeTab === "List" ? "form-control btn btn-primary" : "form-control btn btn-light"}>List</Button>
                <Button onChange={this.selectPay} isSelected={this.state.activeTab === "Pay" ? "form-control btn btn-primary" : "form-control btn btn-light"}>Pay</Button>
                <List baka={this.state.items}/>
              </div>)
    }
    if (this.state.activeTab === "Pay") {
      return (<div className="flex container-fluid">
                <Button onChange={this.selectAdd} isSelected={this.state.activeTab === "Add" ? "form-control btn btn-primary" : "form-control btn btn-light"}>Add</Button>
                <Button onChange={this.selectList} isSelected={this.state.activeTab === "List" ? "form-control btn btn-primary" : "form-control btn btn-light"}>List</Button>
                <Button onChange={this.selectPay} isSelected={this.state.activeTab === "Pay" ? "form-control btn btn-primary" : "form-control btn btn-light"}>Pay</Button>
                <Pay/>
              </div>)
    }
    return (
      <div className="flex">
        <Button onChange={this.selectAdd} isSelected={this.state.activeTab === "Add" ? "form-control btn btn-primary" : "form-control btn btn-light"}>Add</Button>
        <Button onChange={this.selectList} isSelected={this.state.activeTab === "List" ? "form-control btn btn-primary" : "form-control btn btn-light"}>List</Button>
        <Button onChange={this.selectPay} isSelected={this.state.activeTab === "Pay" ? "form-control btn btn-primary" : "form-control btn btn-light"}>Pay</Button>
      </div>  
    );
  };
}
