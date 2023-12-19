<template>
  <div class="like-button-container">
    <img :src="emptyLikeButton" @click.stop="toggleLike" v-if="!liked" />
    <img :src="likeButton" @click.stop="toggleLike" v-if="liked" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      liked: false,
      likeButton: require("@/assets/LikeButton.png"),
      emptyLikeButton: require("@/assets/emptyLikeButton.png"),
    };
  },
  props: {
    post: Object,
    likes: Number,
  },
  methods: {
    toggleLike(){
      this.liked = !this.liked;
    },
  },
  watch: {
    "$store.state.likesReset"() {
      this.liked = false;
    },
  },
};
</script>
  
<style scoped>
.like-button-container {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.like-button {
  font-size: 16px;
  color: white;
  background-color: rgb(124, 93, 93);
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
}

.like-button:hover {
  background-color: rgb(123, 86, 86);
}

.like-count {
  font-size: 14px;
  color: rgb(103, 66, 66);
  position: absolute;
  right: 0;
  bottom: 0;
}
img {
  width: 25px;
  height: 25px;
  cursor: default;
}
</style>
  