import React from "react";
import "./App.css";
import Counter from "./counter";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
  }
  decrementCount1 = () => {
    let result = this.state.count1;
    if (result === 0) {
      return;
    } else {
      result--;
      this.setState({ count1: result });
    }
  };
  decrementCount2 = () => {
    let result = this.state.count2;
    if (result === 0) {
      return;
    } else if (result === this.state.count1) {
      this.decrementCount1();
      result--;
      this.setState({ count2: result });
    } else {
      result--;
      this.setState({ count2: result });
    }
  };
  incrementCount1 = () => {
    let result = this.state.count1;
    if (result === 100) {
      return;
    } else if (result === this.state.count2) {
      this.incrementCount2();
      result++;
      this.setState({ count1: result });
    } else {
      result++;
      this.setState({ count1: result });
    }
  };
  incrementCount2 = () => {
    let result = this.state.count2;
    if (result === 100) {
      return;
    } else {
      result++;
      this.setState({ count2: result });
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter</h1>
          <Counter
            resultatDuCounter={this.state.count1}
            retire={this.decrementCount1}
            ajoute={this.incrementCount1}
          />
          <Counter
            resultatDuCounter={this.state.count2}
            retire={this.decrementCount2}
            ajoute={this.incrementCount2}
          />
        </header>
      </div>
    );
  }
}
export default App;