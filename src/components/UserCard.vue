<template>
  <tr>
    <th> {{user}} </th>
    <th> {{Contact}} </th>
    <th> {{Country}} </th>
  </tr>
</template>
<script>
export default {
    props :{
        user : {
            type: Object,
            required: true
        }
    }
}
</script>
<style>
</style>
