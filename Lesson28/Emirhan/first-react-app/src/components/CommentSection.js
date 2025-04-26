import { CommentSectionStyle } from './CommentSectionStyle.css';
export function CommentSection() {
  return (
    <div>
      <div className="comment-section">
        <h4 className="comment-title pale">Join the conversation</h4>
      </div>
      <div>
        <img
          src="./images/avatar-man.png"
          alt="avatar man"
          className="avatar"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className="comment-input"
        />
      </div>
    </div>
  );
}
