<template>
  <nav>
    <div id="home">
      <router-link :to="{name : 'userHome'}">Home</router-link>
    </div>
    <div id="products">
      <router-link :to="{name : 'userProducts'}">Catalog</router-link>
    </div>
    <div id="name">
      {{ this.$store.getters.userInfo.username }}
    </div>
    <div id="login">
      <a>Logout</a>
    </div>
  </nav>
  <router-view/>
</template>
<script>
export default {
};
</script>
<style></style>
