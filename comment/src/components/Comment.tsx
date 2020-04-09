import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Comment.css";

type UserProps = {
  user: {
    userName: string;
    title: string;
    profileImage: string;
    lastPosting: string;
    content: string;
    replies: number;
    upvotes: number;
    downvotes: number;
  }[];
};

function Comment({ user }: UserProps) {
  const {
    userName,
    title,
    profileImage,
    lastPosting,
    content,
    replies,
    upvotes,
    downvotes,
  } = user[0];
  return (
    <>
      <li data-testid="comment-container" className="comment-container">
        <div className="profile-image">
          <img src={profileImage} alt="profile image" />
        </div>
        <div className="user-name">
          <b>{userName}</b> <span className="title">{title}</span>
          <span className="posting-time"> &middot; {lastPosting}</span>
        </div>
        <div className="content">{content}</div>
        <section className="btn-section">
          <button className="reply">REPLY</button>
          <span className="replies">{replies}</span> REPLIES
          <span className="vote">
            <button>
              <FontAwesomeIcon className="updown-icon" icon={faChevronUp} />
              {upvotes}
            </button>
          </span>
          <span className="vote">
            <button>
              <FontAwesomeIcon className="updown-icon" icon={faChevronDown} />
              {downvotes}
            </button>
          </span>
        </section>
      </li>
    </>
  );
}

export default Comment;
