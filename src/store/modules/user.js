// TODO: Build out the users module/service to get details from that endpoint

import BlogService from '@/services/BlogService';

export const namespaced = true;

export const state = {
  users: [],
  usersById: {},
  currentUserId: 1,
};

export const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_USERS_BY_ID(state, usersById) {
    state.usersById = usersById;
  },
};

export const actions = {
  // Get all users. Save the user list and a hash of users by id for easy lookup to the store.
  fetchUsers({ commit }) {
    BlogService.getUsers()
      .then((response) => {
        // TODO: check and handle http status codes accordingly
        const usersById = {};
        response.data.forEach((user) => { usersById[user.id] = user; });
        commit('SET_USERS', response.data);
        commit('SET_USERS_BY_ID', usersById);
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

