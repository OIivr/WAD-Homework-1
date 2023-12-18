<template>
  <div class="post-page">
    <div class="post-container">
      <div class="post-header">
        <h1>Work in progress...</h1>
        <h1>{{ post.title }}</h1>
      </div>
      <div class="post-content">
        <p>{{ post.content }}</p>
      </div>
      <div class="post-footer">
        <div class="post-footer-left">
          <p>{{ post.author }}</p>
          <p>{{ post.date }}</p>
        </div>
        <div class="post-buttons">
          <button class="edit-button" @click="editPost">Edit</button>
          <button class="delete-button" @click="deletePost">Delete</button>
        </div>
        <div class="post-footer-right">
          <LikePost :post="post" :likes="post.likes" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LikePost from "../components/LikePost.vue";
export default {
  name: "PostPage",
  components: {
    LikePost,
  },
  data() {
    return {
      post: {},
    };
  },
  methods: {
    fetchPost() {
      fetch(`http://localhost:3000/api/posts/${this.$route.params.postId}`)
        .then((response) => response.json())
        .then((data) => {
          this.post = data;
        })
        .catch((err) => console.log(err.message));
    },
    editPost() {
      this.$router.push(`/editPost/${this.$route.params.postId}`);
    },
    deletePost() {
      fetch(`http://localhost:3000/api/posts/${this.$route.params.postId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          this.$router.push("/");
        })
        .catch((err) => console.log(err.message));
    },
  },
  created() {
    this.fetchPost();
  },
};
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.post-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(120, 80, 80);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  margin-top: 10%;
}
.post-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-header-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-buttons button {
  margin-left: 10px;
  color: white;
  background-color: rgb(69, 69, 69);
}
.post-content {
  width: 100%;
  margin: 20px 0;
}
.post-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-footer-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-footer-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-footer-right button {
  margin-left: 10px;
}
button:hover {
  background-color: rgb(120, 80, 80);
}
</style>