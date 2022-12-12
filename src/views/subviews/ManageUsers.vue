<template>
  <h1>Manage users</h1>
  <br />
  <div class="tablewha">
  <table>
  <tr class="header">
    <th>Username</th>
    <th>Email</th>
    <th>Change Password</th>
    <th>Date of creation</th>
    <th>Change perms</th>
    <th>Ban User</th>
  </tr>
  <UserCard v-for="user in this.users" :key="user.id" v-bind:user="user" />
  </table>
  </div>

  <div class="confirmButton">Confirm</div> 
</template>
<script>
import UserCard from "@/components/UserCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    UserCard
  },
  computed : {
    ...mapGetters({users:'allUsers'})
  },
  created(){
    console.log("created")
  }
};
</script>
<style>

.header{
  font: bold;
  font-size: larger;
  background-color: lightgray;
  color: black;
}

.tablewha{
  padding-left: 25%;
  border-spacing: 0px;
}

.table{
  border-spacing: 0px;
  border-collapse: collapse;
  border: 1px solid black;
  width: 100%;


}

th {
  text-align: center;
  padding: 8px;
  border: solid grey 2px;
  border-collapse: collapse;
  border-spacing: 0px;
  
}

.confirmButton{
  height: 50px;
  line-height: 50px;
  width: 80px;
  background-color: aqua;
  text-align: center;
  border: solid black 3px;
  border-radius: 45px;
  position: absolute;
  bottom: 20px;
  right: 50px;
}

</style>
