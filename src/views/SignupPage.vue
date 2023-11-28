<template>
    <div>
      <div class="flex-container">
        <div class="divEdge"></div>
        <div class="divMiddle" id="divMiddle">
          <div class="signup-box">
            <p class="bigText">Create an account</p>
            <form @submit.prevent="signup">
              <div class="input-group">
                <input
                  type="text"
                  autocomplete="off"
                  class="bigTextBlack"
                  id="email"
                  v-model="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="input-group">
                <input
                  type="password"
                  autocomplete="off"
                  class="bigTextBlack"
                  id="passw"
                  v-model="password"
                  placeholder="Password"
                  required
                />
              </div>
              <p v-if="!isPasswordValid" class="validation-message">
            Password must contain at least one uppercase letter, two lowercase letters, one numeric value, start with an uppercase letter, and include the character '_'.
          </p>
              <div class="input-group">
                <input
                  type="submit"
                  value="Sign up"
                  name="signupButton"
                  class="button"
                />
              </div>
            </form>
            
          </div>
        </div>
        <div class="divEdge"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignupPage",
    data() {
      return {
        email: "",
        password: "",
        isPasswordValid: true,
      };
    },
    methods: {
    validatePassword() {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_).{8,15}$/;
      this.isPasswordValid = passwordRegex.test(this.password);
    },
    signup() {
        this.validatePassword()
        if (this.isPasswordValid) {
            this.$router.push('/');
        }  
        
        
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
  
  .divMiddle::-webkit-scrollbar {
    display: none;
  }
  
  .validation-message {
    color: rgb(255, 227, 227);
    font-size: small;
    margin-bottom: 5px;
  }
  
  .signup-box {
    background-color: rgb(103, 66, 66);
    color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 1);
    max-width: 400px;
    width: 100%;
    text-align: center;
    margin: auto;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  input {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .button {
    font-size: 20px;
    color: white;
    background-color: rgb(103, 66, 66);
    border: 1px solid rgb(103, 66, 66);
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: rgb(123, 86, 86);
  }
  </style>
  