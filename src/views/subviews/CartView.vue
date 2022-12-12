<template>
    <h1>WELCOME TO YOUR CART</h1>
    <h2 id="cartValueH">Total Value of your Cart: </h2>
    <div>
      <cartBox v-for="item in items" :key="item.id" :item="item" />
    </div>
  </template>
  
  <script>
  import cartBox from "@/components/CartItemCard.vue";
  export default {
    components: {
    },
    data() {
      return{
        items: null,
        cartBox
      }
    }
  }
  </script>
  
  <style scoped>
  
  .cartItems{
    border:solid black 5px;
    margin: 20px;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
  }
  
  .description{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 28px;
  }
  </style>