import React, { useState, useEffect } from "react";
import axios from "axios";

const FETCH_COUNT = 2;

function getBaseURL(start = 0, limit = FETCH_COUNT) {
  return `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`;
}

function PostsReducer() {
  const [initialFetchDone, setInitialFetchDone] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [start, setStart] = useState(0);

  function fetchMore() {
    setLoadMore(true);
    setStart((start) => start + FETCH_COUNT);
  }

  useEffect(() => {
    if (posts.length === 0) {
      setInitialFetchDone(false);
    }
  }, [posts, initialFetchDone]);

  useEffect(() => {
    let isMounted = true;

    async function fetchPosts() {
      if (isMounted) {
        setIsLoading(true);
      }

      try {
        const response = await axios.get(getBaseURL(start));

        if (isMounted) {
          setPosts((prevPosts) => {
            return [...prevPosts, ...response.data];
          });

          setIsLoading(false);
          setLoadMore(false);
          setHasError(false);
          setErrorMessage(null);
          setInitialFetchDone(true);
        }
      } catch (error) {
        if (isMounted) {
          setIsLoading(false);
          setLoadMore(false);
          setHasError(true);
          setErrorMessage(error.message);
        }
      }
    }

    if (!initialFetchDone || loadMore) {
      fetchPosts();
    }

    return () => {
      isMounted = false;
    };
  }, [start, loadMore, initialFetchDone]);

  return (
    <main className="container mt-5">
      <section className="row-cols-1">
        <div className="col mb-2">
          <h1>Posts</h1>
        </div>
        <div className="col mb-2">
          <hr />
        </div>
        {hasError && (
          <>
            <div className="col">
              <h2 className="h3">Something went wrong 👀</h2>
            </div>
            <div className="col">
              <code>{errorMessage}</code>
            </div>
          </>
        )}
        {isLoading && <div className="col mb-5">Loading data...</div>}
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id} className="col mb-5">
              <h2 className="h5">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
      </section>
      <section className="row-cols-1 mb-5">
        <div className="col">
          <hr />
        </div>
        <div className="col d-flex justify-content-center">
          <button
            onClick={fetchMore}
            className="btn btn-primary w-50"
            disabled={isLoading || loadMore}
          >
            {isLoading || loadMore ? "Loading more..." : "Load more"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default PostsReducer;
