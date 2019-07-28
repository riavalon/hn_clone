import React from 'react';
import PropTypes from 'prop-types';


export const TopPostsComponent = ({ topPosts, getPosts }) => (
  <React.Fragment>
  { topPosts.length ? (
    <div>
      <p>Found posts!</p>
      <button onClick={getPosts}>
        Refetch top posts
      </button>
      {topPosts.map((post, idx) => (<p key={post.id}>{idx+1}) {post.title}</p>))}
    </div>
  ) : (
    <div>
      <p>No posts found!</p>
      <button onClick={getPosts}>
        Fetch posts
      </button>
    </div>
  )}
  </React.Fragment>
);

TopPostsComponent.defaultProps = {
  topPosts: [],
};

TopPostsComponent.propTypes = {
  topPosts: PropTypes.arrayOf(PropTypes.object),
  getPosts: PropTypes.func,
};