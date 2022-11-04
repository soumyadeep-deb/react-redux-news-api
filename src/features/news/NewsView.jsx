import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./newsSlice";
import './newsView.css'

export const NewsView = () => {
  const news = useSelector((state) => state.news);
  const category = useSelector((state) => state.menu.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(category));
  }, [category]);

  return (
    <div className="newsList">
      <h2>Displaying {category ? category : "all"} news</h2>
      {news.loading && <h3>Loading...</h3>}
      {!news.loading && news.error ? <div>Error: {news.error}</div> : null}
      {!news.loading && news.posts.length ? (
        <ul>
          {news.posts.map((post) => (
            <li key={post.id}>
              {post.name ? post.name : <h2>Nothing to show</h2>} |{" "}
              {post.category} | {<a href={post.url}>url</a>}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
