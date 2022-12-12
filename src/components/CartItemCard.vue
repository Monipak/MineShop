<template>
<div class="items">
    <p>{{ item.name }}</p>
    <img :src="item.img">
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
        padding: 20px;
        margin: 10px;
        max-width: 400px;
        max-height: 400px;
        }
    img {
        width: 200px;
        height: 200px;
    }


</style>