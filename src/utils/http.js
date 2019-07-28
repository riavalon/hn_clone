const TOP_POSTS_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const GET_ITEM_URL = id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
export const fetchTopPosts = async () => {
  try {
    const response = await fetch(TOP_POSTS_URL);
    const topPostIds = await response.json();
    const promiseArray = topPostIds.slice(0, 30).map(async (id) => {
      const response = await fetch(GET_ITEM_URL(id));
      const post = await response.json();
      return post;
    });
    const data = await Promise.all(promiseArray);
    return data;
  } catch (e) {
    console.log(e);
  }
};
