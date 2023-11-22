<template>
  <div>
    <div class="flex-container">
      <div class="divEdge"></div>
      <div class="divMiddle" id="divMiddle">
        <!-- New posts go here-->
        <div class="NewPost" v-for="(post, index) in postList" :key="index">
          <header>
            <a class="logo">
              <img :src="logo" width="25" height="25" alt="Logo" />
            </a>
            <p class="date">{{ post.createTime }}</p>
          </header>
          <p>{{ post.content }}</p>
          <div v-if="post.image" style="margin: 10px">
            <img class="post-image" :src="post.image" alt="image" />
          </div>
        </div>
      </div>
      <div class="divEdge"></div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  name: "HomePage",
  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
  data() {
    return {
      logo: logo,
    };
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
.NewPost {
  background-color: rgb(103, 66, 66);
  color: white;
  border-radius: 25px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 1);
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