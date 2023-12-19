<template>
  <div class="NewPost">
    <header>
      <a class="logo">
        <img :src="logo" width="25" height="25" alt="Logo" />
        <p>{{ post.author }}</p>
      </a>
      <p class="date">{{ formattedDate }}</p>
      <br />
    </header>
    <p>{{ post.content }}</p>
    <footer>
      <div class="likeButton">
        <img class="post-image" :src="post.image" alt="" />
        <LikePost :post="post" @like="likePost(index)" />
      </div>
      <span class="like-count">{{ post.likes }} likes</span>
    </footer>
  </div>
</template>

<script>
import LikePost from "./LikePost.vue";
import { mapState } from "vuex";
import logo from "../assets/logo.png";

export default {
  name: "NewPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {
    LikePost,
  },
  computed: {
    ...mapState(["postList"]),
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
  methods: {
    likePost(postIndex) {
      this.$emit("like", postIndex);
    },
  },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style>
.NewPost {
  background-color: rgb(103, 66, 66);
  color: white;
  border-radius: 25px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 25px;
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.like-count {
  font-size: 18px;
  color: rgb(223, 212, 212);
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 10px 15px;
}
.date {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 15px;
}
.NewPost header {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
}
.NewPost header ~ * {
  padding-top: 4px;
  border-radius: 30px;
  padding-left: 1em;
  padding-right: 1em;
  margin: 0;
  word-wrap: break-word;
}
.logo img {
  margin-right: 10px;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>