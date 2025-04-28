import './Card.css';

export function Card({ cake }) {
  return (
    <div className="Card" style={cake.theme}>
      <h1>{cake.name}</h1>
      <img className="avatar" src={cake.image} alt={cake.name} />
      <ul>
        {cake.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button className="card-button">View Recipe</button>
    </div>
  );
}

