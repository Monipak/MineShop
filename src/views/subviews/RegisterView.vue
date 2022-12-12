<template>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:700,600"
    rel="stylesheet"
    type="text/css"
  />

  <div class="box" @keypress.enter="register">
    <h1>Register</h1>
    <input type="text" placeholder="username" v-model="this.username" class="field"/>
    <input type="text" placeholder="password" v-model="this.password" class="field"/>
    <input type="text" placeholder="Retype password" v-model="this.passwordCheck" class="field"/>
    <input type="text" placeholder="email" v-model="this.email" class="field"/>
    <input type="text" placeholder="Retype email" v-model="this.emailCheck" class="field"/>
    <button @click="register" class="btn">Register</button>
    <div id="debugMessage" ref="debugMessage"></div>
    <br><br><br><br>Already have an account ?
    <router-link to="/login">Log in here</router-link>
  </div>

</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passwordCheck: "",
      email: "",
      emailCheck: "",
    };
  },
  methods: {
    register() {
      if (this.password != this.passwordCheck) {
        this.$refs.debugMessage.innerHTML = "Passwords don't match !";
        return;
      }
      if (this.email != this.emailCheck) {
        this.$refs.debugMessage.innerHTML = "Emails don't match !";
        return;
      }
      this.$store
        .dispatch("register", {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$refs.debugMessage.style.color = "#00AA00";
          this.$refs.debugMessage.innerHTML = "Successfully registered!";
          setTimeout(this.$router.push, 600, "/");
        })
        .catch((error) => {
          console.log("here")
          console.log(error)
          this.$refs.debugMessage.innerHTML =
            "Error while registering : " + error.response.data.message;
        });
    },
    debug() {
      console.log(this.$store.getters.userInfo);
    },
  },
};
</script>

<style scoped>
#debugMessage {
  color: #ff0000;
}

body {
  font-family: "Open Sans", sans-serif;
  background: #3498db;
  margin: 0 auto 0 auto;
  width: 100%;
  text-align: center;
  margin: 20px 0px 20px 0px;
}

p {
  font-size: 12px;
  text-decoration: none;
}

h1 {
  font-size: 1.5em;
  color: #525252;
}

.box {
  background: white;
  width: 300px;
  border-radius: 6px;
  margin: 20px auto 0 auto;
  padding: 0px 0px 70px 0px;
  border: #2980b9 4px solid;
}

.field {
  background: #ecf0f1;
  border: #ccc 1px solid;
  border-bottom: #ccc 2px solid;
  padding: 8px;
  width: 250px;
  color: #aaaaaa;
  margin-top: 10px;
  font-size: 1em;
  border-radius: 4px;
}

.password {
  border-radius: 4px;
  background: #ecf0f1;
  border: #ccc 1px solid;
  padding: 8px;
  width: 250px;
  font-size: 1em;
}

.btn {
  background: #2ecc71;
  width: 125px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  border-radius: 4px;
  border: #27ae60 1px solid;
  
  margin-top: 20px;
  margin-bottom: 10px;
  float: left;
  margin-left: 16px;
  font-weight: 800;
  font-size: 0.8em;
}

.btn:hover {
  background: #2cc06b;
}

#btn2 {
  text-decoration: none;
  float: left;
  background: #3498db;

  border: #2980b9 1px solid;
}

#btn2:hover {
  background: #3594d2;
}

</style>
