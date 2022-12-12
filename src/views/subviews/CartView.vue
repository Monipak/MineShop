<template>
    <h1>WELCOME TO YOUR CART</h1>
    <h2>Total Value of your Cart: </h2>
    <div class="cart">
      <cartBox v-for="item in items" :key="item.id" :item="item" />
    </div>
  </template>
  
  <script>
  import cartBox from "@/components/CartItemCard.vue";
// import { mapGetters } from "vuex";
  export default {
    components: {
        cartBox
    },
    computed:{
      items(){
        var items = []
        for (var cartItem in this.$store.getters.cart){
          var item = this.$store.getters.allProducts.filter(product => product.id == cartItem)[0]
          item.qt = this.$store.getters.cart[cartItem]
          items.push(item)
        }
        console.log(items)
        return items
      }
    }
  }
  </script>
  
  <style scoped>
  
  .cart {
    display : flex;
    flex-direction: row;
  }
  
  .description{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 28px;
  }
  </style>