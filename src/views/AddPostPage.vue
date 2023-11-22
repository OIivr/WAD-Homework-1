<template>
  <div>
    <div class="flex-container">
      <div class="CreatePost">
        <h1>Create Post</h1>
        <p class="bigText" id="createPostText">
          Post body
          <textarea
            name="postBody"
            class="postBody"
            maxlength="500"
            v-model="postBody"
          ></textarea>
        </p>
        <br />
        <p class="bigText" id="createPostText">
          Select file
          <input
            type="file"
            name="chooseFileButton"
            class="button"
            @change="onFileChange"
          />
        </p>
        <button @click="addPost" class="button">Add post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPostPage",
  data() {
    return {
      postBody: "",
      file: null,
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
    },
    addPost() {
      this.$router.push("/");
      // Handle post creation logic here
    },
  },
};
</script>

<style>
.bigText {
  font-size: x-large;
  font: arial;
  color: beige;
}
.bigTextBlack {
  font-size: x-large;
  font: arial;
  color: black;
}

@media (max-width: 1050px) {
  .bigText {
    display: block;
    text-align: center;
    margin-left: 0;
  }
  .postBody {
    width: 90%;
    margin-right: 10%;
    margin-top: 10px;
  }
  input[name="chooseFileButton"].button {
    display: flex;
    align-items: left;
    margin-left: 10%;
  }
  input[name="addPostButton"].button {
    display: flex;
    align-items: left;
    margin-left: 10%;
  }
}

@media (max-width: 1200px) {
  input[name="chooseFileButton"].button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0, 0, 0, 0);
  }
}
#createPostText {
  margin-left: 2em;
}

.CreatePost {
  background-color: rgb(103, 66, 66);
  color: white;
  border-radius: 25px;
  max-width: 80%;
  max-height: 100%;
  margin: auto;
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 1);
}
.flex-container > .CreatePost {
  border-radius: 10px;
  margin-bottom: 10%;
}
.flex-container {
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  align-content: start;
}

.postBody {
  height: 100px;
  width: 60%;
  height: 100px;
  width: 80%;
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 6, 20);
  margin-left: 10%;
  margin-left: 10%;
  resize: none;
}

h1 {
  margin-left: 5%;
}
.button {
  font-size: 30px;
  color: black;
  border-radius: 10px;
  margin-left: 20px;
  transition-duration: 0.2s;
}

input[name="addPostButton"] {
  background-color: rgb(151, 144, 144);
  font-size: 40px;
  border: 4px solid black;
  margin-bottom: 10%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
input[name="addPostButton"]:hover {
  background-color: rgb(189, 137, 137);
}

input[type="file"] {
  color: rgb(365, 365, 365, 100);
}
</style>