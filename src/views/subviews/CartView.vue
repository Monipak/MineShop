<template>
    <h1>WELCOME TO YOUR CART</h1>
    <h2>Total Value of your Cart: </h2>
    <div>
      <cartBox v-for="item in items" :key="item.id" :item="item" />
    </div>
  </template>
  
  <script>
  import cartBox from "@/components/CartItemCard.vue";
  export default {
    components: {
        cartBox
    },
    data() {
      return{
        items: [
            {
              "id": 0,
              "name":"Lightning",
              "description":"A unique light interceptor armed with rapid-fire 100mm artillery guns.",
              "img":"https://static.wikia.nocookie.net/highfleet-unofficial/images/8/86/Lightning.png",
              "qt":8,
              "maxQt":8,
              "price":20
            },
            {
              "id": 1,
              "name":"Gladiator",
              "description":"Hailing from the frigate line of the Romani Fleet, a true powerhouse in combat.",
              "img":"https://static.wikia.nocookie.net/highfleet-unofficial/images/4/44/Gladiator.png",
              "qt":53,
              "maxQt":53,
              "price":2
            }]
        
      }
    }
  }
  </script>
  
  <style scoped>
  
  .cartItems{
    border:solid black 5px;
    margin: 20px;
    width: 80%;
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