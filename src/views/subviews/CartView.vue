<template>
  <h1>WELCOME TO YOUR CART</h1>
  <h2 ref="prompt">Your cart is empty !</h2>
  <h2 ref="total">Total Value of your Cart: {{total}}$</h2>
  <div class="cart">
    <cartBox v-for="item in items" :key="item.id" :item="item" />
  </div>
  <div class="button">Confirm you cart's content</div>
  <br>
</template>

<script>
import cartBox from "@/components/CartItemCard.vue";
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      total: 0,
    };
  },
  components: {
    cartBox,
  },
  computed: {
    items() {
      var items = [];
      
      for (var cartItem in this.$store.getters.cart) {
        var item = this.$store.getters.allProducts.filter(
          (product) => product.id == cartItem
        )[0];
        item = JSON.parse(JSON.stringify(item)) // deepcopy
        item.qt = this.$store.getters.cart[cartItem];
        item.price = item.price * item.qt
        items.push(item);
      }
      return items;
    },
  },
  activated() {
    this.total = 0;
    this.items.forEach((item)=>{
      this.total += item.price
    })
    if (!this.total) {
      this.$refs.total.style.visibility = "hidden";
      this.$refs.prompt.style.visibility = "visible";
    } else {
      this.$refs.total.style.visibility = "visible";
      this.$refs.prompt.style.visibility = "hidden";
    }
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: row;
}

.description {
  margin-top: 20px;
  margin-bottom: 20px;
}

h1 {
  font-size: 28px;
}

.button{
  color: black;
  height: 50px;
  line-height: 50px;
  width: 250px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: aqua;
  border: solid rgb(65, 117, 61) 5px;
  border-radius: 25px;
  font-size: larger;
}
</style>
