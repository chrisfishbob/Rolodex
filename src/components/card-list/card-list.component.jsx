import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";


class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster;
          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  }
}

// Exporting allows other files to import the code
// that you wrote here
export default CardList;
