<template>
  <div class="NewPost">
    <header>
      <a class="logo">
        <img :src="logo" width="25" height="25" alt="Logo" />
      </a>
      <p class="date">{{ post.createTime }}</p>
      <br>
    </header>
    <p>{{ post.content }}</p>
    <footer>
    <div>
      <img class="post-image" :src="post.image" alt="" />
      <LikePost :post="post" @like="likePost(index)" />
    </div>
      <span class="like-count">Likes:{{ post.likes }}</span>
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
  margin-bottom: 15px;
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 1);
  display: flex;
  flex-direction:column;
  justify-content: space-between; 
}

.like-count {
  font-size: 16px;
  color: rgb(223, 212, 212);
  margin-left:auto;

}
.date {
  margin: 0;
}
.NewPost header {
  align-items: center;
  display: flex;
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
  padding-bottom: 1em;
  margin: 0;
  word-wrap: break-word;
}
.post-image {
  max-width: 70%;
  max-height: 70%;
  border-radius: 30px;
}
</style>