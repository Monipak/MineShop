<template>
<ProductAdder v-if="this.$route.meta.role == 'admin'"/> <br>
These are products !!!
</template>
<script>
import ProductAdder from '../../components/ProductAdder.vue'
export default{
    components:{
        ProductAdder
    }
}
</script>
<style>

</style>