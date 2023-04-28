import React from "react";
import "./style.css";

const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img src={cover} alt="cover" />
    </div>
  );
};

export default BlogItem;
