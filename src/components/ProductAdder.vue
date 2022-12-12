<template>
  <h2>Product adder</h2>
  <div class="ProductForm">
    <div class="ProductCategory">
      <h4>Product Category</h4>
      <select v-model="category" required>
        <option disabled value="">Please select one category</option>
        <option value="block">Block</option>
        <option value="tool">Tool</option>
        <option value="food">Food</option>
        <option value="mineral">Mineral</option>
        <option value="misc">Miscenaleous</option>
      </select>
    </div>
    <div class="ProductName">
      <h4>Name</h4>
      <input
        v-model="name"
        type="text"
        placeholder="Name of the product"
        required
      />
    </div>
    <div class="ProductDescription">
      <h4>Description</h4>
      <input
        v-model="description"
        type="text"
        placeholder="Description of the product"
        required
      />
    </div>

    <div class="ProductImage">
      <h4>Image</h4>
      <input
        v-model="image"
        type="text"
        placeholder="Link for the product's image"
        required
      />
    </div>
    <div class="ProductPrice">
      <h4>Price</h4>
      <input
        v-model="price"
        type="text"
        placeholder="Price of the product"
        required
      />
    </div>
    <div class="ProductQuantity">
      <h4>Quantity</h4>
      <input
        v-model="qt"
        type="text"
        placeholder="Amount of the product"
        required
      />
    </div>

    <button
      @click="addProduct"
      style="
        margin-top: 20px;
        margin-bottom: 10px;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
      "
    >
      Add New Event
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: "",
      name: "",
      description: "",
      image: "",
      price: 0,
      qt: 0,
    };
  },
  methods: {
    addProduct() {
      if (
        this.name == "" &&
        this.category == "" &&
        this.image == "" &&
        this.description == ""
      ) {
        alert("One of the fields shouldn't be empty !");
        return;
      }
      this.$store.dispatch("addProduct", {
        name: this.name,
        description: this.description,
        image: this.image,
        price: this.price,
        quantity: this.qt,
        category: this.category
      });
    },
  },
};
</script>

<style scoped>
.ProductForm {
  height: auto;
  width: 80%;
  background-color: white;
  color: black;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border: rgb(75, 75, 75) solid 2px;
  border-radius: 25px;
  flex-direction: row;
  justify-content: center;
}

.ProductForm input,
button,
select {
  border-radius: 5px;
  border-color: rgb(75, 75, 75);
  width: 200px;
  margin: 10px;
}
.ProductForm {
  font-size: large;
}
</style>
