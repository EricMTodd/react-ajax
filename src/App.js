import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CrimesList from "./CrimesList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      crimes: []
    }
  }

  getCrimes = async () => {
    try {
      // Fetch is a new native function to JavaScript.
      // Other Ajax packages commonly used with react are: superagent and axios

      // The fetch function by default makes a get request. The first argument is the endpoint.
      const crimes = await fetch("https://data.cityofchicago.org/resource/crimes.json");
      const crimesJson = await crimes.json();
      return crimesJson
      console.log(crimesJson)
    } catch (err) {
      return err
      console.log(err, "error in catch block")
    }
  }

  deleteCrime = (index, e) => {
    const state = this.state;
    state.crimes.splice(index, 1)
    this.setState(state);
  }

  componentDidMount() {
    // We want to setState immediatly after we get the data.
    this.getCrimes().then((data) => {
      console.log(data);
      this.setState({crimes: data})
    });
  }

  render() {
    return (
      <div className="App">
        <CrimesList crimes={this.state.crimes} deleteCrime={this.deleteCrime}/>
      </div>
    );
  }
}

export default App;
