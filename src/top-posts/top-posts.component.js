import React from 'react';
import PropTypes from 'prop-types';

import {
  Body,
  NewsCard,
  CardLink,
  CardMetadata,
  CardMetaDate,
  CardVotes,
} from './top-posts.style';

export const TopPostsComponent = ({ topPosts, getPosts }) => {
  const sortedPosts = topPosts.slice(0);
  sortedPosts.sort((p1, p2) => p1.score > p2.score ? -1 : 1);
  console.log(sortedPosts);
  // returns true if show hn is found
  const isShowHN = ({ title }) => !!~title.indexOf('Show HN');
  return (
    <React.Fragment>
    { topPosts.length ? (
      <Body>
        <p>Found posts!</p>
        <button onClick={getPosts}>
          Refetch top posts
        </button>
        <div>
          {sortedPosts.map((post, idx) => (
            <NewsCard
              href={post.url}
              target="_blank"
              key={post.id}
              isShowHN={isShowHN(post)}
            >
              <CardLink id="card-link">
                {post.title}
              </CardLink>
              <CardVotes id="card-votes">{post.score}</CardVotes>
              <CardMetadata id="card-meta">
                <CardMetaDate>To be implemented</CardMetaDate>
                <div className="author">Posted by: {post.by}</div>
              </CardMetadata>
            </NewsCard>
          ))}
        </div>
      </Body>
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
}

TopPostsComponent.defaultProps = {
  topPosts: [],
};

TopPostsComponent.propTypes = {
  topPosts: PropTypes.arrayOf(PropTypes.object),
  getPosts: PropTypes.func,
  lastFetched: PropTypes.number,
};