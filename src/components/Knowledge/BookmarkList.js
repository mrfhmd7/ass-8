import React from "react";

const BookmarkList = ({ bookmark }) => {
  console.log(bookmark);
  return (
    <div className="bookmark">
      <p> {bookmark?.title} </p>
    </div>
  );
};

export default BookmarkList;
