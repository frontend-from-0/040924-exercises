import { HeaderStyle } from './HeaderStyle.css';
export function Header() {
  return (
    <header className="app-header">
      <h1 className="title">10 Secrets for managing a remote team</h1>
      <div className="header-content">
        <img
          src="./images/avatar-women.webp"
          alt="avatar-women"
          className="avatar"
        />
        <p>Shedrack eze | 2nd January,2022</p>
      </div>
    </header>
  );
}
