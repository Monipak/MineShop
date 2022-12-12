<template>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:700,600"
    rel="stylesheet"
    type="text/css"
  />
  <div class="box" @keypress.enter="login">
    <h1>Sign In</h1>

    <input
      type="text"
      v-model="this.username"
      placeholder="username"
      class="field"
    />

    <!-- à modifier !!!-->
    <input
      type="text"
      v-model="this.password"
      placeholder="password"
      class="field"
    />

    <div class="btn" @click="login">Sign In</div>

    <router-link class="btn" id="btn2" to="/register">Register</router-link>
  </div>
  <div id="errorMessage" ref="errorMessage"></div>
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
        .then(() => {
          this.$router.push({ name: "userHome" });
        })
        .catch(
          (error) =>{
            console.log(error)
            this.$refs.errorMessage.innerHTML =
              "Error while logging in : " + error.response.data.message
            
          }
        );
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
  margin-bottom: 20px;
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

#errorMessage {
  color: red;
}
</style>
