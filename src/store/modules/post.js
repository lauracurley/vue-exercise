import BlogService from '@/services/BlogService';

export const namespaced = true;

export const state = {
  posts: [],
};

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  // Gets all posts and save them to the store
  fetchPosts({ commit }) {
    BlogService.getPosts()
      .then((response) => {
        // TODO: check and handle http status codes accordingly
        commit('SET_POSTS', response.data);
        // TODO: set filter values on state
      })
      .catch((error) => {
        // TODO: Handle server errors and displaying of error notifications in the UI
        alert(`There was a problem getting blog users: ${error}`); // eslint-disable-line
      });
  },
};

// TODO: cache the filter values and set filterBy values on state inside fetchPosts
// export const getters = {
//   // TODO: research how best to memoize getters to improve performance
//   getPostsByUserId: state => id => state.posts.filter(({ userId }) => userId === id),
// };
