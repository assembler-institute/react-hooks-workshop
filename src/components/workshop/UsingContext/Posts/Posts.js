import React from "react";

import Post from "../Post/Post";
import { PostsContext } from "../context/PostsContext";
import { LocaleContext } from "../context/LocaleContext";

function Posts() {
  return (
    <section className="row row-cols-1">
      <LocaleContext.Consumer>
        {(locale) => (
          <PostsContext.Consumer>
            {(posts) =>
              posts.map((post) => (
                <div className="col" key={post.id}>
                  <Post locale={locale} post={post} />
                </div>
              ))
            }
          </PostsContext.Consumer>
        )}
      </LocaleContext.Consumer>
    </section>
  );
}

export default Posts;
