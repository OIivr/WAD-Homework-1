<template>
  <div class="post-page">
    <div class="post-container">
      <div class="post-header">
        <label for="author">Author:</label>
        <input
          id="author"
          v-model="author"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div class="post-content">
        <textarea v-model="post.content" rows="4" cols="50"></textarea>
      </div>
      <div class="post-footer">
        <div class="post-buttons">
          <button class="edit-button" @click="addPost">Add Post</button>
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
  name: "AddPostPage",
  data() {
    return {
      post: {},
      timestamp: new Date().toISOString(),
    };
  },
  methods: {
    cancel() {
      this.$router.push("/");
    },
    addPost() {
      if (!this.author || !this.post.content) {
        alert("Author and post content cannot be empty");
      } else {
        this.post.author = this.author;
        this.post.date = new Date().toISOString();
        fetch(`http://localhost:3000/api/posts`, {
          method: "POST",
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
      }
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
  resize: none;
}
.post-buttons {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}
input {
  margin-left: 10px;
  width: 30%;
  height: 30px;
  border-radius: 5px;
  resize: none;
}
</style>