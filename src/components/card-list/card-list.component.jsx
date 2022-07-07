import Card from "../card/card.component";
import "./card-list.styles.css";

// Since we know props is always going to be the first parameter, we 
// can do the destructuring in the parameter itself
const CardList = ({ monsters }) => (
  // The return statement here is implicit
  <div className="card-list">
    {monsters.map((monster) => {
      //const { name, id, email } = monster;
      return <Card monster={monster} />;
    })}
  </div>
);

// Exporting allows other files to import the code
// that you wrote here
export default CardList;
