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
    <th>Confirm</th>
  </tr>
  <UserCard v-for="user in users" :key="user.id" v-bind:user="user" />
  </table>
  </div>

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
  margin-left: 15%;
  margin-right: 15%;
  border-spacing: 0px;
  padding: 20px;
  background-color: rgba(64, 64, 64, 0.5);
  border-radius: 25px;
  border: 5px solid black;
  width: 70%;
}


th {
  text-align: center;
  padding: 8px;
  border: solid grey 2px;
  border-collapse: collapse;
  border-spacing: 0px;
  
}

</style>
