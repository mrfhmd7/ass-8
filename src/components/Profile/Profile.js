import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";

const Profile = (props) => {
  const { url, profileUrl, name, date, id, title, read, mark } =
    props.knowledge;

  const handleBookMark = props.handleBookMark;
  const handleAnchorTag = props.handleAnchorTag;

  return (
    <div className="profile-container">
      <div className="image">
        <img src={url} alt="" />
      </div>
      <div className="info-container">
        <img src={profileUrl} alt="" />
      </div>
      <div className="flex">
        <h4>
          {name} <br /> <small>{date}</small>
        </h4>
        <p>
          {read}{" "}
          <button onClick={() => handleBookMark(props.knowledge)}>
            <FontAwesomeIcon icon={faBookmark} />
          </button>{" "}
        </p>
      </div>
      <div className="anchor">
        <h1>{title}</h1>
        <p>
          <small>Id: {id}</small>
        </p>
        <a onClick={() => handleAnchorTag(props.knowledge)} href="/mark">
          {mark}
        </a>
      </div>
    </div>
  );
};

export default Profile;