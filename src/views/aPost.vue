<template>
  <div class="post-page">
    <div class="post-container">
      <div class="post-header">
        <p>{{ post.author }}</p>
        <p>{{ formattedDate }}</p>
      </div>
      <div class="post-content">
        <textarea v-model="post.content" rows="4" cols="50"></textarea>
      </div>
      <div class="post-footer">
        <div class="post-buttons">
          <button class="edit-button" @click="updatePost">Update</button>
          <button class="delete-button" @click="deletePost">Delete</button>
        </div>
        <div class="cancel-button">
          <button @click="cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostPage",
  data() {
    return {
      post: {},
    };
  },
  methods: {
    cancel() {
      this.$router.push("/");
    },
    fetchPost() {
      fetch(`http://localhost:3000/api/posts/${this.$route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          this.post = data;
          console.log(this.post);
        })
        .catch((err) => console.log(err.message));
    },
    deletePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
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
    updatePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
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
  computed: {
    formattedDate() {
      let dateObj = new Date(this.post.date);
      let day = dateObj.getDate().toString().padStart(2, "0");
      let month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
      let year = dateObj.getFullYear().toString().slice(2);
      let hours = dateObj.getHours().toString().padStart(2, "0");
      let minutes = dateObj.getMinutes().toString().padStart(2, "0");
      return `${day}.${month}.${year} ${hours}:${minutes}`;
    },
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
  color: white;
  width: 40%;
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
button {
  margin-top: 10px;
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
  align-items: center;
  justify-content: space-between;
}
button:hover {
  background-color: rgb(120, 80, 80);
}
textarea {
  width: 99%;
  height: 150px;
}
.post-buttons {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}
</style>