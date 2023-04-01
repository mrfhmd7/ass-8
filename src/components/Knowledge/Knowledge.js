import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Knowledge.css";

const Knowledge = () => {
  const [knowledge, setKnowledge] = useState([]);
  const [info, setInfo] = useState([]);
  const [anchor, setAnchor] = useState([]);

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
        <h2>Spent time on read:</h2>
        <h3>Bookmarked Blogs: {info.length}</h3>
      </div>
    </div>
  );
};

export default Knowledge;