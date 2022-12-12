<template>
  <input type="text" @keypress.enter="search" v-model="query" placeholder="name or category"/>
  <ProductAdder v-if="this.$route.meta.role == 'admin'" /> <br />

  <div id="shop">
    <ItemComponent
      v-for="product in this.products"
      :key="product.id"
      v-bind:product="product"
      v-bind:rate="rates[product.id]"
      @qtEvent="incOrDecCart"
    />
  </div>
</template>
<script>
import ProductAdder from "../../components/ProductAdder.vue";
import ItemComponent from "@/components/ItemComponent.vue";
import { mapGetters } from "vuex";
export default {
  data(){
    return {
      query :""
    }
  },
  components: {
    ProductAdder,
    ItemComponent,
  },
  computed: {
    ...mapGetters({ rates: "rates", cart: "cart" }),
    products(){
      if (!this.query)
        return this.$store.getters.allProducts
      else 
      return this.$store.getters.allProducts.filter(product => product.name.toLowerCase().includes(this.query.toLowerCase()) || product.category.toLowerCase().includes(this.query.toLowerCase()) )
    }
  },
  methods: {
    incOrDecCart(itemComponent, mode) {
      var id = itemComponent.product.id;
      if (mode) {
        //addtocart
        if (itemComponent.qt) {
          if (itemComponent.qt == 1)
            itemComponent.setButtonColor("plus", false);

          if (this.cart[id]) this.cart[id] += 1;
          else this.cart[id] = 1;
          if (--itemComponent.qt) itemComponent.setButtonColor("minus", true);
        }
      } else {
        //putbackfromcart
        if (this.cart[id]) {
          if (!itemComponent.qt) itemComponent.setButtonColor("plus", true);
          if (this.cart[id] > 1) this.cart[id] -= 1;
          else {
            delete this.cart[id];
            itemComponent.setButtonColor("minus", false);
          }
          itemComponent.qt += 1;
        }
      }
      this.$store.commit("SET_CART", this.cart);
      if (itemComponent.qt <= 5) itemComponent.color();
    }
  },
};
</script>
<style scoped>
#shop {
  flex-wrap: wrap;
  position: static;
  display: flex;
}
</style>
