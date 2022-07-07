import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => setMonsters(users));
    console.log("Fired");
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  console.log("Render");

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// Component is a self contained piece of code that returns some
// visual UI representation of HTML
// class App extends Component {
//   // Constructor runs first
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // Mounting is the first time a component gets placed on the DOM
//   // Remounted can only happen if remounted
//   // This runs third
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((Response) => Response.json())
//       .then((users) =>
//         this.setState(() => {
//           // Setting monsters equals to users
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     // "aAaA" => "aaaa"
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       // Shorthand for setting this.searchField to searchField
//       return { searchField };
//     });
//   };

//   // This runs second
//   render() {
//     // Pulls value from this.state into var monsters and searchField
//     const { monsters, searchField } = this.state;
//     // Same logic as above, but onSearchChange is not a state
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="search-box"
//         />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
