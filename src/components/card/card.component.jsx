import "./card.styles.css";

const Card = ({monster}) => {
  const { id, name, email } = monster;
  const dimension = "220";

  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=se2&size=${dimension}x${dimension}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
