<template>
  <div id="title">
    <img src="https://i.ibb.co/RpkDz4C/background.png">
  </div>
  <button @click="debug">DEBUG</button>
  <router-view/>
</template>

<script>
export default{
  created(){
    this.$store.dispatch("loadProducts")
    this.$store.dispatch("getRates")
  },
  methods:{
    debug(){
      console.log(this.$store.getters.cart)
    }
  }
}
</script>

<style>
#title {
  height: 150px;
}
#title img {
  width: 100%;
}

#home {
  grid-column: 1;
}
#products {
  grid-column: 2;
}
#cart, #manageUsers{
  grid-column: 3;
}
#register, #name{
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
  color: #ffffff;
  background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ae1c281-ed89-448d-871b-a2e351a6ba6f/d3l1qoj-f1b1c676-9602-4c65-bd7d-ea518fbc8b88.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi84YWUxYzI4MS1lZDg5LTQ0OGQtODcxYi1hMmUzNTFhNmJhNmYvZDNsMXFvai1mMWIxYzY3Ni05NjAyLTRjNjUtYmQ3ZC1lYTUxOGZiYzhiODgucG5nIn1dXX0.ChYlYUMWvDqFfNJwGxhnAjBUhinzdpaz5kimb9erlbc);
}

nav {
  border-left:0;
  border-right: 0;
  border-bottom: 1px;
  border-top:1px;
  border-style: solid;

  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  background-color: #296600;
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
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #07ff8f;
}
</style>
