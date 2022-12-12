<template>
    <div class="item" ref="item">
        <div class="name"><h4>{{product.name}}</h4></div>
        <img v-bind:src="product.image">
        <div class="bottom">
            ${{product.price}} <br> QT: {{qt}}
        </div>
        <div class="buttons" v-if="this.$route.meta.role == 'user'">
            <button @click="this.$emit('qtEvent',this,false); " class="minus" ref="minus">-</button>
            <button @click="this.$emit('qtEvent',this,true);" class="plus" ref="plus">+</button>
        </div>
        <div ref="emptystars" class="rating">
            <img  src="https://i.imgur.com/dm2TUZC.png" />
            <div ref="fullstarsdiv" class="rating-stars"><img ref="fullstars" src="https://imgur.com/eif22DG.png" /></div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            qt:0,
            rgb: [140,140,140]
        }
    },
    name : "ItemComponent",
    props: {
        product:{
            type: Object,
            required: true
        },
        rate:{
            type: Object,
            required: true
        }
    },
    created(){
        this.qt = this.product.quantity;
        
        
    },
    mounted() {
        this.$refs.fullstars.style.marginRight = "-" + (380-(76*this.rate)) + "px";
        if(this.$route.meta.role != 'user'){
            this.$refs.emptystars.style.marginTop = "25px";
            this.$refs.fullstarsdiv.style.bottom = "38px";
        }
    },
    updated(){
        this.$refs.fullstars.style.marginRight = "-" + (380-(76*this.rate)) + "px";
    },
    methods:{
        setButtonColor(button,mode){
            if (mode){
                if(button == "minus"){
                    this.$refs[button].style.backgroundColor = "red";
                }else
                    this.$refs[button].style.backgroundColor = "green";
            }else
                this.$refs[button].style.backgroundColor = "grey";
        },
        color(){
            switch(this.qt){
                case 5:
                    this.rgb = [255,255,255];
                    break;
                case 4:
                    this.rgb = [160,160,160];
                    break;
                case 3:
                    this.rgb = [140,140,140];
                    break;
                case 2:
                    this.rgb = [120,120,120];
                    break;
                case 1:
                    this.rgb = [100,100,100];
                    break;
                case 0:
                    this.rgb = [80,80,80]
                    break
                default:
                    console.log("How did this happen ???");

            }
            this.$refs.item.style.backgroundColor = "rgb(" + this.rgb[0] +',' + this.rgb[1] + ',' + this.rgb[2] + ')';
        },
        setButtonVisibility(button,mode){
            if (mode)
                this.$refs[button].style.visibility = "visible";
            else
                this.$refs[button].style.backgroundColor = "grey";
        },
        
    }
    
}
</script>
<style scoped>
.item {
    position: relative;
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-color: rgb(75, 75, 75);
    border-radius: 25px;
    height: 520px;
    width: 400px;
    margin:12px;
    font-size: 30px;
    padding-top: 20px;
}
.item *{
    margin:0;
    
}
.item img {
    height: 240px;
    margin-top: 5px;
}
.buttons{
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    justify-content: space-evenly;

}
.buttons button{
    font-size: 20px;
    font-weight: bold;
    color:#FFFFFF;
    width: 30%;
    
    
    
}
.buttons .minus {
    background-color: grey;
    border-radius: 10px 0px 0px 10px;
    border-collapse: collapse;
    border: 2px solid #000000;
    border-right: 0;
}
.buttons .plus {
    background-color: green;
    border-radius: 0px 10px 10px 0px;
    border-collapse: collapse;
    border: 2px solid #000000;
}
.bottom {
    border: solid black 5px;
    margin-left: 80px;
    margin-right: 80px;
    background-color: #692003;
    border-radius:8px;
}

.name {
    background-color: #692003;
    margin-left: 50px;
    margin-right: 50px;
    border: solid black 5px;
    border-radius:8px;
}


.rating img{
    height: auto;
    width:380px;
}
.rating-stars{
    position: absolute;
    bottom: 18px;
    left: 10px;
    overflow: hidden;
    
}

.rating-stars img{
    height: auto;
    width:380px;

}

</style>