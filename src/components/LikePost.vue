<template>
  <div class="like-button-container">
    <button class="like-button" @click="toggleLike">
      {{ post.liked ? "Unlike" : "Like" }}
    </button>
  </div>
</template>
  
<script>
export default {
  props: {
    post: Object,
    likes: Number,
  },
  methods: {
    toggleLike() {
      this.$store.commit("likePostM", this.post.id);
    },
  },
};
</script>
  
<style scoped>
.like-button-container {
  display: flex;
  align-items: center;
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
}
</style>
  