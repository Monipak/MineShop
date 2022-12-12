<template>

    <div class="review">
        <h2>Add your review</h2>
        <textarea style="width: 500px;resize: none;" cols="40" rows="5" v-model="reviewText" type="text"
            placeholder="Add your review" required>
      </textarea>

        <div class="rating">
            <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label>
            <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label>
            <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label>
            <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label>
            <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label>
        </div>

        <button @click="confirm">Confirm</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviewText: '',
            rate: 5
        }
    },
    methods: {
        test() {
            console.log(this.$el.querySelector('input[name="rating"]:checked').value);
        },
        confirm() {
            this.rate = this.$el.querySelector('input[name="rating"]:checked').value;
            this.$store.dispatch("addReview", 
            { id: this.$route.params.id, 
            review: {message:this.reviewText,rate:this.rate} })
            .then(this.$emit('update'))
            
        }
    }
}
</script>

<style>
body {
    background: #222225;
    color: white;
    margin: 100px auto;
}

.rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
}

.rating>input {
    display: none;
}

.rating>label {
    position: relative;
    width: 1.1em;
    font-size: 5vw;
    color: #FFD700;
    cursor: pointer;
}

.rating>label::before {
    content: "\2605";
    position: absolute;
    opacity: 0;
}

.rating>label:hover:before,
.rating>label:hover~label:before {
    opacity: 1 !important;
}

.rating>input:checked~label:before {
    opacity: 1;
}

.rating:hover>input:checked~label:before {
    opacity: 0.4;
}

.review {
    margin-top: 50px;
    height: 350px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    border: solid black 5px;
    border-radius: 25px;
    background-color: rgba(64, 64, 64, 0.7);
}

.review h1 {
    padding: 10px;
    font-size: 40px;
}

.review p {
    font-size: 25px;
}



.review input,
button,
select {
    border-radius: 5px;
    border-color: rgb(75, 75, 75);
    width: 200px;
    margin: 10px;
}

.review {
    font-size: large;
}
</style>