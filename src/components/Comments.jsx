import React from "react";

const Comments = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex bg-gray-100 shadow-lg rounded-lg">
      <img className="w-8 h-8 mr-2" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
      <div>
        <h1 className="font-bold text-base">{name}</h1>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comments;
