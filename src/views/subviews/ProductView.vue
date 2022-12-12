<template>
    <EditProduct v-if="this.$route.meta.role == 'admin'"/>
    {{product.name}}
    <AddReview v-if="this.$route.meta.role == 'user'"/>
    <ReviewCard v-for="review in reviews" :key="review.id" :review="review"/>

</template>

<script>
import AddReview from '@/components/AddReview.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import EditProduct from '@/components/EditProduct.vue';
export default{
    data(){
        return {
            product : {},
            reviews : {}
        }
    },
    components: {
        AddReview,
        ReviewCard,
        EditProduct
    },
    created(){
        this.product = this.$store.getters.allProducts.filter(product => product.id == this.$route.params.id)[0]
    }
}
</script>

<style>

</style>