import './CommentSectionStyle.css';
export function CommentSection() {
  return (
    <div className="comment-input-group">
      <img src="./images/avatar-man.webp" alt="avatar man" className="avatar" />
      <form>
        <textarea
          type="text"
          placeholder="Add a comment..."
          className="comment-input"
        />
        <button type="submit" className="comment-button">
          Submit
        </button>
      </form>
    </div>
  );
}
