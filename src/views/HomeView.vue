<template>
  <nav>
    <div id="home">
      <router-link to="/">Home</router-link>
    </div>
    <div id="products">
      <router-link :to="{name : 'guestProducts'}">Catalog</router-link>
    </div>
    <div id="register">
      <router-link to="/register">Register</router-link>
    </div>
    <div id="login">
      <router-link to="/login">Login</router-link>
    </div>
    
  </nav>
  <h1>This homework is not finished :( The backend & the authentification are done, there is a few frontend pages to finish and to link to the backend. Most features don't work !</h1>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

</template>

<script>



export default {
  name: "HomeView",
};
</script>
