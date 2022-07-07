import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card_list/card_list.component";
import { waitFor } from "@testing-library/react";

// Component is a self contained piece of code that returns some
// visual UI representation of HTML
class App extends Component {
  // Constructor runs first
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
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
          // Setting monsters equals to users
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    // "aAaA" => "aaaa"
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      // Shorthand for setting this.searchField to searchField
      return { searchField };
    });
  };

  // This runs second
  render() {
    // Pulls value from this.state into var monsters and searchField
    const { monsters, searchField } = this.state;
    // Same logic as above, but onSearchChange is not a state
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={onSearchChange}
        />

        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
