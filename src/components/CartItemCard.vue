<template>
<div class="items">
    <h2>{{ item.name }}</h2>
    <img :src="item.image">
    <div class="description"><p class="descriptionText">{{ item.description }}</p></div>
    <p class="quantity">QT: {{ item.qt}}   
    <br>${{ item.price }}</p>
</div>
</template>
    
<script>


export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
} 
</script>
    
<style scoped>
    .items {
        display: inline-block;
        text-align: center;
        color: #2c3e50;
        border: solid black 5px;
        font-size: x-large;
        padding: 20px;
        margin: 10px;
        height: 500px;
        width: 400px;
        border-radius: 40px;
        background-color: #FFFFFF;
        flex-shrink: 0;
        }
    img {
        height: 240px;
    }
    .description{
        overflow: scroll;
        overflow-x: hidden;
        overflow-y:auto;
        height: 65px;
        border: solid black 3px;
        border-radius: 20px;
        margin: 5px;
    }

    .descriptionText{
        margin: 5px;
    }

</style>