<template>
  <div>
    <div class="flex-container">
      <div class="divEdge"></div>
      <div class="divMiddle" id="divMiddle">
        <NewPost v-for="post in postList" :key="post.id" :post="post" />
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
  computed: {
    postList() {
      return this.$store.state.postList;
    },
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
  max-height: 85.5vh;
  overflow-y: scroll;
  width: 80%;
  padding-right: 6%;
  padding-left: 6%;
}

/* Hide divMiddle scrollbar*/
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
</style>