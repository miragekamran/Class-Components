import React from 'react';
import './App.css';


class App extends React.Component {
  handleSingleClickEvent = () => alert("Single Click Event Triggered");

  render() {
    return (
      <div className="App">
        <h1>Event Handlers</h1>
        <button onClick={this.handleSingleClickEvent}>
          Single Click Handler
        </button>
        <button>Double Click Handler</button>
        <div>Mouse Enter</div>
        <div>Mouse Leave</div>
        <input type="text" placeholder="Change me" />
      </div>
    );
  }
}


export default App;
