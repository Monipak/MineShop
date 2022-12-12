<template>
<div class="items">
    <h2>{{ item.name }}</h2>
    <img :src="item.image">
    <p>{{ item.description }}</p>
    <p>QT: {{ item.qt}}   
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
        height: 520px;
        width: 400px;
        border-radius: 40px;
        background-color: #FFFFFF;
        }
    img {
        height: 240px;
    }


</style>