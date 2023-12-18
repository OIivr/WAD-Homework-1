<template>
  <div>
    <div class="flex-container">
      <div class="divEdge"></div>
      <div class="divMiddle" id="divMiddle">
        <NewPost
          id="newPost"
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @click="openPost(post.id)"
        />
        <p v-if="posts.length <= 0">Nothing to see here...</p>
      </div>
      <div class="divEdge"></div>
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
    openPost(postId) {
      // this.$router.push(`/post/${postId}`);
      // this.$router.push({ name: "aPost.vue", params: { postId: postId } });
      this.$router.push({ path: `/post/${postId}` });
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
  min-height: 85.5vh;
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
.reset-button:hover {
  background-color: rgb(120, 80, 80);
}
.post-actions {
  display: flex;
  justify-content: center;
  padding: 1em;
}
.divContainer {
  width: 70%;
  height: 85vh;
}
button {
  font-size: 16px;
  color: white;
  background-color: rgb(110, 110, 110);
  padding: 5px 10px;
  cursor: pointer;
  width: auto;
  border-radius: 10px;
}
p {
  color: rgb(107, 107, 107);
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
}
#newPost {
  cursor: pointer;
}
</style>