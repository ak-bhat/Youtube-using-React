import React from "react";
import Comments from "./Comments";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div className="p-2 m-2" key={index}>
      <Comments data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
