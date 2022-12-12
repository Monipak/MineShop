<template>
<div class="review">
    <h2>User: {{ review.username }}</h2>
    <p ref="rating">☆☆☆☆☆</p>
</div>
</template>

<script>
export default{
    props:{
        review : {
            type:Object,
            required:true
        }
    },
    beforeCreate() {
        console.log("hihi")
    }
}
</script>

<style scope>
.review {
    height: 200px;
    background-color: white;
}
</style>