<template>
    <form name="myForm">
        <!--
        <div class="Event_Type">
            <h1 >Product adder</h1></div>
             
        <div>
            <select v-model="category" required>
                <option disabled value="">Please select one category</option>
                <option value="Ecology" >Ecology</option>
                <option value="Entertainment" >Entertainment</option>
                <option value="Charity" >Charity</option>
                <option value="Animals" >Animals</option>
                <option value="Education" >Education</option>
                <option value="Housing" >Housing</option>
                <option value="Alimentation" >Alimentation</option>
            </select>
        </div>
        -->
        <div class="Event_Details">
            <p >Title</p>
            <input v-model="title" type="text" placeholder="Title" title="Give a title to your event" required>

            <p>Description</p>
            <input v-model="description" type="text" placeholder="Dexcription" title="Describe the event here" required>
        </div>

        <div class="Event_Location">
            <h1 >Where is your event ?</h1>
            <p >Location</p>
            <input v-model="location" type="text" placeholder="Location" title="Where is your event located ?" required>
        </div>

        <div class="Event_Time">
            <h1 >When is your event ?</h1>
            <p >Date</p>
            <input v-model="date" type="text" placeholder="Enter the date of your event" required>
            <p >Time</p>
            <input v-model="time" type="text" placeholder="Enter the time of your event" required>
        </div>
            <button v-on:click="submitEvent()" type="submit" style="margin-top: 20px;">Add New Event</button>
    </form>

</template>

<script>


</script>

<style>


</style>
