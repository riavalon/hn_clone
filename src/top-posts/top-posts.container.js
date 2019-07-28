import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { TopPostsComponent } from './top-posts.component';
import { POSTS } from './top-posts.actions';

const mapStateToProps = state => ({
  topPosts: state.posts.all.slice(0, 30),
  lastFetched: state.posts.lastFetched,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(POSTS.trigger()),
});

const onMountLifecycle = {
  componentDidMount() {
    const { lastFetched, getPosts, topPosts } = this.props;
    // should refetch if store hasn't been updated every thirty minutes.
    // Only triggers when navigating to and from the page.
    const shouldRefetch = prevTime => (Date.now() - prevTime) > (1000 * 60 * 30);
    if (!topPosts.length || shouldRefetch(lastFetched)) {
      getPosts();
    }
  }
};

export const TopPosts = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle(onMountLifecycle),
)(TopPostsComponent);