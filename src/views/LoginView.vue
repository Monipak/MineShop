<template>
  <h1>Login</h1>
  <input type="text" v-model="this.username" />
  <input type="text" v-model="this.password" />
  <button @click="login">Log in !</button>
  <div id="errorMessage" ref="errorMessage"></div>
  Don't have an account ?
  <router-link to="/register">Register here</router-link>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log("hihi" + response);
        })
        .catch(
          (error) =>
            (this.$refs.errorMessage.innerHTML =
              "Error while logging in : " + error.response.data.message)
        );
    },
  },
};
</script>
<style scoped>
#errorMessage {
  color: red;
}
</style>
