<template>
  <nav>
    <div id="home">
      <router-link to="/">Home</router-link>
    </div>
    <div id="register"><router-link to="/register">Register</router-link></div>
    <div id="login" >
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
