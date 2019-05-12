import React from "react";
import "./App.css";
import { get } from "http";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
    this.getData();
  }

  getData() {
    fetch("https://swapi.co/api/planets/?format=json")
      .then(result => result.json())
      .then(data => {
        this.setState({
          planets: data.results
        });
      });
      
  }
  getFilm(film) {
    fetch(`${film}`)
      .then(result => result.json())
      .then(data => {
        console.log(data.title);
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.planets.map(planet => {
          return (
            <li className="planet">
              <h1>{planet.name}</h1>
              <ul className="films">
                {planet.films.map(film => {
                  this.getFilm(film);
                  return (<li>{film}</li>)
                })}
              </ul>
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;
