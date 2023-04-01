import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Knowledge.css";
import BookmarkList from "./BookmarkList";

const Knowledge = () => {
  const [knowledge, setKnowledge] = useState([]);
  const [info, setInfo] = useState([]);
  const [anchor, setAnchor] = useState([]);
  console.log(anchor);

  if (anchor) {
    const totalTimeRead = anchor?.reduce((acc, curr) => {
      console.log(acc);
    }, 0);
  }
  let unique = [...new Set(info)];

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setKnowledge(data));
  }, []);

  const handleBookMark = (knowledge) => {
    const newInfo = [...info, knowledge];
    setInfo(newInfo);
    toast("already bookmarked");
    <ToastContainer />;
  };

  const handleAnchorTag = (knowledge) => {
    const newAnchor = [...anchor, knowledge];
    setAnchor(newAnchor);
  };

  return (
    <div className="knowledge-container">
      <div className="cafe">
        {knowledge.map((knowledge) => (
          <Profile
            key={knowledge.id}
            knowledge={knowledge}
            handleBookMark={handleBookMark}
            handleAnchorTag={handleAnchorTag}
          ></Profile>
        ))}
      </div>
      <div className="total-cafe">
        <h2>Spent time on read: </h2>
        <h3>Bookmarked Blogs: {unique?.length}</h3>
        <div>
          {unique?.map((bookmark) => (
            <BookmarkList bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
