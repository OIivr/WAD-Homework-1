<template>
  <div>
    <div class="flex-container">
      <div class="login">
        <p class="bigText">Welcome to PostIt</p>
        <br/>
        <router-link to="/signup">Create an account</router-link>
        <br/>
        <p>or<br />Please log in</p>
        <br/>
        <form @submit.prevent="login">
          <input
            type="text"
            autocomplete="off"
            class="bigTextBlack"
            id="email"
            v-model="email"
            placeholder="Email"
            required
          /><br />
          <input
            type="password"
            autocomplete="off"
            class="bigTextBlack"
            id="pw"
            v-model="password"
            placeholder="Password"
            required
          /><br />
          <br /><br />
          <input
            type="submit"
            value="Log in"
            name="loginButton"
            class="button"
            id="loginButton"
          /><br />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login {
  text-align: center;
  background-color: rgb(103, 66, 66);
  color: white;
  border-radius: 25px;
  margin: auto;
  width: 25%;
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 1);
}

.login a {
  font-size: x-large;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s;
}

.login a:hover {
  color: rgb(223, 143, 143);
}

.flex-container > .login {
  border-radius: 25px;
  min-height: fit-content;
  min-width: fit-content;
  height: max-content;
}
#loginButton{
  background-color: rgb(221, 196, 196);
  font-size: 30px;
  border: 4px solid black;
  margin-bottom: 5%;
  margin-left: auto;
  margin-right: auto;
}
#loginButton:hover {
  background-color: rgb(189, 137, 137);
}
</style>