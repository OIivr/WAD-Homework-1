import { createStore } from "vuex";


export default createStore({
  strict: true,
  state: {
    likesReset: false
  },
  mutations: {
    toggleLikesReset(state) {
      state.likesReset = !state.likesReset;
    },
    likePostM(state, postId) {
      if (state.postLikes[postId] === undefined) {
        state.postLikes[postId] = false;
        // TODO: get likes from database
      }
    
      const postToUpdate = state.postList.find((p) => p.id === postId);
    
      if (postToUpdate) {
        if (!state.postLikes[postId]) {
          postToUpdate.likes++;
        } else {
          postToUpdate.likes--;
        }
    
        state.postLikes[postId] = !state.postLikes[postId];
      }
    },
    
  resetLikesM(state) {
    state.postList.forEach((post) => {
      post.likes = 0;
      state.postLikes[post.id] = false;
      // TODO: reset likes in database
    });
  },
  },
  actions: {
  },
  getters: {
  },
});