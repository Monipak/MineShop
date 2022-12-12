<template>
<div class="review">
    <h2>User: {{ review.user }}</h2>
    {{review.message}}
    <p ref="rating">{{'☆'.repeat(review.rate)}}</p>
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
    margin-top: 30px;
    margin-bottom: 0px;
    height: 150px;
    background-color: rgb(90, 31, 14);
    border: solid black 5px;
    border-radius: 25px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
}
</style>