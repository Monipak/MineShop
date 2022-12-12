<template>
<div class="review">
    <h2>User: {{ review.username }}</h2>
    <p ref="rating">☆☆☆☆☆</p>
</div>
</template>

<script>
export default{
    created() {
        console.log("hihji")
    }
}
</script>

<style>

</style>