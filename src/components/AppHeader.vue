<template>
  <header class="header">
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <ul class="nav">
      <li v-if="$route.meta.showLogout !== false">
        <button class="logout-button" @click="logout">Log out</button>
      </li>
      <UserProfile />
    </ul>
  </header>
</template>


<script>
import UserProfile from "./UserProfile.vue";
export default {
  name: "AppHeader",
  components: {
    UserProfile,
  },
  methods: {
    logout() {
      fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        credentials: 'include', 
      }).then(() => {
        this.$router.push("/login");
      }).catch((error) => {
        console.error('Logout error:', error);
      });
    },
  },
};
</script>

<style scoped>
.header {
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0 1 auto;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: rgb(69, 69, 69);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
}
a {
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav {
  display: flex;
}
ul + a {
  margin-right: 10px;
}
.nav a {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: white;
  white-space: nowrap;
}
.nav a:hover {
  background-color: #1f1f1f;
  border-radius: 25px;
}

.logout-button {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: white;
  white-space: nowrap;
  background: none;
  border: none;
}
.logout-button:hover {
  background-color: #1f1f1f;
  border-radius: 25px;
}
</style>