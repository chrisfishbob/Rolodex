import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { waitFor } from "@testing-library/react";

// Component is a self contained piece of code that returns some
// visual UI representation of HTML
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Daquon",
          id: "0",
        },
        {
          name: "Mark",
          id: "1",
        },
        {
          name: "Jamal",
          id: "2",
        },
        {
          name: "Saquon",
          id: "3",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
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
