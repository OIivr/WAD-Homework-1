<template>
  <footer class="footer">
    <ul class="nav">
      <li><router-link to="/">Terms</router-link></li>
      <li><router-link to="/">Privacy</router-link></li>
    </ul>
    <div class="post-actions" v-if="$route.path === '/'">
      <button @click="addPost">Add Post</button>
      <button @click="deleteAllPosts">Delete All Posts</button>
    </div>
    <p>© 2023 My Company</p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  methods: {
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
          location.reload();
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: rgb(69, 69, 69);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
}

.footer .nav {
  list-style: none;
  display: flex;
}

.footer .nav li {
  margin-right: 10px;
}

.footer .nav li a {
  color: #fff;
  text-decoration: none;
}
.footer p {
  color: #fff;
  margin-right: 10px;
}
button {
  background: rgb(255, 103, 103);
  border: 0;
  padding: 8px 18px;
  border-radius: 5px;
  margin-right: 15px;
  margin-left: 15px;
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 0.3);
  cursor: pointer;
}
button:hover {
  background-color: #f18282;
  border-radius: 8px;
}
</style>