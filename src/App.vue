<template>
  <div id="title">
    <img src="https://i.ibb.co/RpkDz4C/background.png">
  </div>
  <router-view/>
</template>

<style>
#title img{
  height: 150px;
}

#home {
  grid-column: 1;
}
#register {
  grid-column: 6;
}
#login {
  grid-column: 7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  border-left:0;
  border-right: 0;
  border-bottom: 1px;
  border-top:1px;
  border-style: solid;

  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}
nav div {
  height: 20px;
  border-left:1px;
  border-right: 1px;
  border-bottom: 0;
  border-top:0;
  border-style: solid;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
