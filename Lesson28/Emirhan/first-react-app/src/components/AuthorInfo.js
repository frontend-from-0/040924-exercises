import AuthorInfoStyle from './AuthorInfoStyle.css';
export function AuthorInfo() {
  return (
    <div className="author-info">
      <img
        src="./images/avatar-women.webp"
        alt="avatar women"
        className="avatar"
      />
      <div className="author-text">
        <p>Written by</p>
        <h4 className="name">Shedrack Eze</h4>
        <p className="pale">CEO Team App</p>
      </div>
    </div>
  );
}
