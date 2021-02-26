import React from "react";

import "./Post.scss";

function Post({ locale, post }) {
  return (
    <div className="Post mb-3">
      <h3 className="Post__locale text-muted">
        {locale === "en" ? "English" : "Español"}
      </h3>
      <div className="Post__contents">
        <h4 className="Post__title h5">{post.title}</h4>
        <p className="Post__body m-0">{post.body}</p>
      </div>
    </div>
  );
}

export default Post;
