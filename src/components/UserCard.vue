<template>
  <tr>
    <th> {{user.username}} </th>
    <th> {{user.email}} </th>
    <th> <input type="text" v-model="newpassword"> </th>
    <th> {{user.createdAt}} </th>
    <th> <input type="checkbox" v-model="newperms"></th>
    <th> <button @click="ban">Ban</button></th>
    <th> <button @click="confirm">Confirm</button></th>
  </tr>
</template>
<script>
export default {
  mounted(){
    this.newperms = this.user.perms
  },
    data(){
      return {
        newpassword : '',
        newperms : false
      }
    },
    props :{
        user : {
            type: Object,
            required: true
        }
    },
    methods: {
      confirm(){
        if (this.newpassword){
          this.$store.dispatch("changePassword",{id:this.user.id,password:this.newpassword})
        }
        if (this.newperms != this.user.perms){
          this.$store.dispatch("makeUserAdmin",{id:this.user.id,perms:this.newperms})
        }
      },
      ban(){
        if (this.user.id == this.$store.getters.userInfo.userId){
          alert("Can't ban self !")
          return
        } else if (this.user.perms){
          alert("Can't ban admin !")
          return
        }
        this.$store.dispatch("banUser",this.user.id)
      }
    }
}
</script>
<style scoped>

tr {
    border-collapse: collapse;
}

</style>
