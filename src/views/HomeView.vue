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
  <h1>Now this is a proper website ! As not to take too much of your time (sorry again), this is our final Version !
  <br>To Help you a little, everything, as we have tested, works (front end backend etc) except :
  <br> - The possibility to delete a review
  <br> - The possibility to delete a product
  <br> - The possibility to edit the information of product (only the template is made, not linked to the database)
  <br>
  <br>You probably know it already but just in cause, to run all of this :  "npm install", "npm run start" then "npm run serve"
  <br>Thank you :)
  <br>Romain Foucher
  <br>Benjamin Corcos
  <br>Arthur Gagniare
</h1>
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
