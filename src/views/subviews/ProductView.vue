<template>
    <EditProduct v-if="this.$route.meta.role == 'admin'"/>

    <div class="item">
    <h1>{{product.name}}</h1>
    <img :src="product.image">
    <div class="description"><p class="descriptionText">{{ product.description }}</p></div>
    <p>Cost: {{product.price}}</p>
    </div>

    <AddReview v-if="this.$route.meta.role == 'user'" @update="this.$forceUpdate"/>

    <ReviewCard v-for="review in reviews" :key="review.id" v-bind:review="review" />


</template>

<script>
import AddReview from '@/components/AddReview.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import EditProduct from '@/components/EditProduct.vue';
import { mapGetters } from 'vuex';
export default{
    computed:{
        ...mapGetters({reviews:'currentReviews'}),
        product(){
            return this.$store.getters.allProducts.filter(product => product.id == this.$route.params.id)[0]
        }
    },
    components: {
        AddReview,
        ReviewCard,
        EditProduct
    },
    methods:{
        test(){
            console.log(this.$store.getters.currentReviews,this.reviews)
            
        }
    },
    created(){
        console.log(this.reviews)
        this.$store.dispatch("getProductReviews",this.$route.params.id)
        setTimeout(this.$forceUpdate, 1000); //needed to display reviews :/
    }
}
</script>

<style scoped>
    .item{
        margin-top: 50px;
        height: 500px;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        border: solid black 5px;
        border-radius: 25px;
        background-color: rgba(64,64,64, 0.7);
    }
    .item h1{
        padding: 10px;
        font-size: 40px;
    }
    .item p{
        font-size: 25px;
    }
</style>