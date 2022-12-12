<template>
  Manage users
  <br />
  <UserCard v-for="user in this.users" :key="user.id" v-bind:user="user" />
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
<style></style>
