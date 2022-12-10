<template>
  <div id="title">
    <img src="https://i.ibb.co/RpkDz4C/background.png">
  </div>
  <nav>
    <div id="home">
      <router-link to="/">Home</router-link>
    </div>
    <div id="login" >
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#title img{
  height: 150px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}
nav div {
  border: 1px;
  border-style: solid;
}
#home {
  grid-column: 1;
}
#login{
  grid-column: 7;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
