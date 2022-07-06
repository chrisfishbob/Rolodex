import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { waitFor } from "@testing-library/react";

// Component is a self contained piece of code that returns some
// visual UI representation of HTML
class App extends Component {
  // Constructor runs first
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // Mounting is the first time a component gets placed on the DOM
  // Remounted can only happen if remounted
  // This runs third
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  // This runs second
  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={(event) => {
            // "aAaA" => "aaaa"
            const searchString = event.target.value.toLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString);
            });

            this.setState(() => {
              return {monsters: filteredMonsters};
            })
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
