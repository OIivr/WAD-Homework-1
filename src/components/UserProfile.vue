<template>
  <div class="userProfile" @click="toggleDropdown">
    <img :src="logo" alt="User Photo" id="userPhoto" />

    <ul class="dropdown-menu" v-show="showDropdown">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
      <li><a href="#" @click.prevent="logout">Logout</a></li>
    </ul>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  name: "UserProfile",
  data() {
    return {
      logo: logo,
      showDropdown: false,
      user: {
        name: "Orack Babama",
        email: "Obabama@ut.ee",
      },
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      // Perform logout operation here
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.userProfile {
  position: relative;
  margin-right: 1%;
  display: inline-block;
}

#userPhoto {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  top: 52px;
  right: -5px;
  width: 200px;
  background-color: #333;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 5px;
}

.dropdown-menu li {
  padding: 10px;
  color: #fff;
  display: block;
  transition: 0.2s;
  font-size: large;
}

.dropdown-menu li a {
  text-decoration: none;
  color: #fff;
  display: block;
  transition: 0.2s;
  font-size: large;
}

.dropdown-menu li a:hover {
  background-color: #444;
}
</style>