<template>
  <div>
    <div class="flex-container">
      <div class="divEdge"></div>
      <div class="divMiddle" id="divMiddle">
        <NewPost v-for="post in posts" :key="post.id" :post="post" />
        <div class="post-actions">
          <button @click="addPost">Add Post</button>
          <button @click="deleteAllPosts">Delete All Posts</button>
        </div>
      </div>
      <div class="divEdge">
        <button class="reset-button" @click="resetLikes">Reset Likes</button>
      </div>
    </div>
  </div>
</template>

<script>
import NewPost from "../components/NewPost.vue";

export default {
  name: "HomePage",
  components: {
    NewPost,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    likePost(postIndex) {
      this.$store.commit("likePostM", postIndex);
    },
    resetLikes() {
      this.$store.commit("resetLikesM");
      this.$store.commit("toggleLikesReset");
    },
    fetchPosts() {
      fetch("http://localhost:3000/api/posts")
        .then((response) => response.json())
        .then((data) => {
          this.posts = data ? data : [];
        })
        .catch((err) => console.log(err.message));
    },
    addPost() {
      this.$router.push("/addPost");
    },
    deleteAllPosts() {
      fetch("http://localhost:3000/api/posts", {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          this.fetchPosts();
        })
        .catch((err) => console.log(err.message));
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
.flex-container {
  flex: 1 1 auto;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  align-content: start;
}
.divEdge {
  background-color: rgb(37, 37, 37);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
  width: 15%;
  height: 80vh;
  border-radius: 10px;
}
#divMiddle {
  max-height: 85.5vh;
  overflow-y: scroll;
  width: 80%;
  padding-right: 6%;
  padding-left: 6%;
}

.divMiddle::-webkit-scrollbar {
  display: none;
}
@media (max-width: 650px) {
  .divEdge {
    width: 0%;
  }
  .divMiddle {
    width: 95%;
  }
}
.reset-button {
  font-size: 16px;
  color: white;
  background-color: rgb(124, 93, 93);
  padding: 5px 10px;
  cursor: pointer;
  bottom: 0;
  width: auto;
  border-radius: 10px;

  /* Temporary solution */
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.reset-button:hover {
  background-color: rgb(120, 80, 80);
}
.post-actions {
  display: flex;
  justify-content: space-between;
  padding: 1em;
}
</style>