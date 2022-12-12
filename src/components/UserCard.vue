<template>
  <tr>
    <th> {{user.username}} </th>
    <th> {{user.email}} </th>
    <th> <button>Change Password</button> </th>
    <th> {{user.createdAt}} </th>
    <th> <input type="checkbox"> Give Permissions</th>
    <th> <button>Ban</button></th>
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
<style scoped>

tr {
    border-collapse: collapse;
}

</style>
