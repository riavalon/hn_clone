import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { TopPostsComponent } from './top-posts.component';
import { POSTS } from './top-posts.actions';

const mapStateToProps = state => ({
  topPosts: state.posts.all.slice(0, 30),
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(POSTS.trigger()),
});

const onMountLifecycle = {
  componentDidMount() {
    const { getPosts, topPosts } = this.props;
    if (!topPosts.length) {
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