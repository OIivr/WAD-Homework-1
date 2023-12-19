<template>
  <div class="form">
    <h3>LogIn</h3>
    <label for="email">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      required
      v-model="email"
      placeholder="Email"
    />
    <label for="password">Password</label>
    <input
      id="pw"
      type="password"
      name="password"
      required
      v-model="password"
      placeholder="Password"
    />
    <div class="container">
      <button @click="login" class="center" id="login">LogIn</button>
      <button @click="this.$router.push('/signup')" class="center">
        Sign up
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:3000/api/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log(response.data);
        this.$router.push("/HomePage");
      })
      .catch(error => {
        this.error = "Invalid email or password. Please try again.";
        console.error(error.response.data);
      });
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(103, 66, 66);
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 1);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: rgb(255, 255, 255);
}
label {
  color: rgb(255, 255, 255);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: rgb(0, 0, 0);
}
button {
  background: rgb(69, 69, 69);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
#login {
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 0.3);
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%;
}
.container {
  display: flex;
  justify-content: center;
}
button:hover {
  background-color: rgb(142, 142, 142);
}
</style>