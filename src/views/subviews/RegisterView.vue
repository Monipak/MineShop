<template>
  <h1>Register</h1>
  <input type="text" placeholder="username" v-model="this.username" />
  <input type="text" placeholder="password" v-model="this.password" />
  <input
    type="text"
    placeholder="Retype password"
    v-model="this.passwordCheck"
  />
  <input type="text" placeholder="email" v-model="this.email" />
  <input type="text" placeholder="Retype email" v-model="this.emailCheck" />
  <button @click="register">Register</button>
  <button @click="debug">debug</button>
  <div id="debugMessage" ref="debugMessage"></div>
  Already have an account ?
  <router-link to="/login">Log in here</router-link>
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
</style>
