<template>
  <nav>
    <div id="home">
      <router-link :to="{ name: 'adminHome' }">Home</router-link>
    </div>
    <div id="products">
      <router-link :to="{ name: 'adminProducts' }">Catalog</router-link>
    </div>
    <div id="manageUsers">
      <router-link to="/userTab">Manage Users</router-link>
    </div>
    <div id="name">
      {{ this.$store.getters.userInfo.username }}
    </div>
    <div id="login">
      <a @click="logout">Logout</a>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
    methods: {
    logout() {
      this.$store.commit("UNSET_USER_INFO");
      this.$router.push("/");
    },
  },
};
</script>
<style></style>
