<template>
  <h1>Register</h1>
  <input type="text" v-model="this.username" />
  <input type="text" v-model="this.password" />
  <input type="text" v-model="this.passwordCheck" />
  <input type="text" v-model="this.email" />
  <input type="text" v-model="this.emailCheck" />
  <button @click="register">Register</button>
  <button @click="debug">debug</button>
  <div id="errorMessage" ref="errorMessage"></div>
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
        this.$refs.errorMessage.innerHTML = "Passwords don't match !";
        return;
      }
      if (this.email != this.emailCheck) {
        this.$refs.errorMessage.innerHTML = "Emails don't match !";
        return;
      }
    },
    debug() {
      console.log(this.$store.getters.userInfo);
    },
  },
};
</script>
<style scoped>
#errorMessage {
  color: red;
}


</style>
