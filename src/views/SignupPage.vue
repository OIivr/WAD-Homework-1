<template>
  <div class="form">
    <h3>Sign Up</h3>
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
      id="passw"
      type="password"
      name="password"
      required
      v-model="password"
      placeholder="Password"
    />
    <p v-if="isValid">Sign up successful!</p>
    <p v-else>{{ error }}</p>
    <button @click="signup" class="SignUp">Sign Up</button>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: "SignupPage",
  data() {
    return {
      email: "",
      password: "",
      isValid: false,
      error: "",
    };
  },
  methods: {
    validateInputs() {
      this.error = "";
      if (this.email.split("@").length <= 1) {
        this.error = "Email has to contain '@' ";
      }
      let password = this.password;
      if (password.length < 8 || password.length > 15) {
        this.error = "Password must be between 8 and 15 characters long";
      } else if (password.split(/[a-z]/).length <= 2) {
        this.error = "Password must contain atleast 2 lowercase letters";
      } else if (password.split(/[A-Z]/).length <= 1) {
        this.error = "Password must contain atleast 1 uppercase letter";
      } else if (password.split(/[0-9]/).length <= 1) {
        this.error = "Password must contain atleast 1 numeric value";
      } else if (password.at(0).toUpperCase() !== password.at(0)) {
        this.error = "Password must begin with uppercase letter";
      } else if (password.split(/[_]/).length <= 1) {
        this.error = "Password must contain '_' symbol";
      }
      if (this.error.length === 0) {
        this.isValid = true;
        return { email: this.email, password: this.password };
      }
      return null;
    },
    signup() {
      axios.post('http://localhost:3000/api/register', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log(response.data);
        this.$router.push("/HomePage");
      })
      .catch(error => {
        // TODO: Handle the error, e.g. show an error message to the user
        console.error(error);
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
  box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 0.3);
}
button:hover {
  background-color: rgb(142, 142, 142);
}
p {
  color: rgb(255, 227, 227);
  font-size: small;
  margin-bottom: 5px;
}
</style>
  