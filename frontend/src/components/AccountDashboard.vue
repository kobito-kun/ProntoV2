<template>
  <section class="bg-white min-w-full min-h-full rounded-lg shadow flex justify-center items-center flex-col select-none">
    <form class="flex flex-col" v-if="input" v-on:submit.prevent="updateProfile">
      <img src="@/assets/absol.jpg" class="mx-auto w-40 rounded-full shadow-lg" />
      <p class="text-center text-gray-600">Disabled to solve test account usage.</p>
      <input disabled v-model="input.username" class="px-4 py-2 border shadow my-2 rounded outline-none" placeholder="Username" />
      <input disabled v-model="input.email" class="px-4 py-2 border shadow my-2 rounded outline-none" placeholder="Email"/>
      <input disabled class="px-4 py-2 bg-black text-white hover:bg-gray-800 duration-300 cursor-pointer" value="Update Profile" type="submit" />
    </form>
    <div v-else>
      <h3>Loading...</h3>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
  name: "AccountDashboardComponent",
  data(){
    return {
      input: {
        username: "",
        email: "",
        _id: ""
      }
    }
  },
  methods: {
    updateProfile(){
      const dataToPost = {
        _id: this.input["_id"],
        username: this.input["username"],
        email: this.input["email"]
      };
      axios.post("http://localhost:5000/updateProfile", dataToPost).then((response) => {
        axios.get(`http://localhost:5000/graphql?query={getUser(_id: "${localStorage.getItem("_id")}"){username _id email}}`).then(response => {
          this.input = response["data"]["data"]["getUser"]
        })
      })
    }
  },
  mounted: function(){
    (() => {
      axios.get(`http://localhost:5000/graphql?query={getUser(_id: "${localStorage.getItem("_id")}"){username _id email}}`).then(response => {
        this.input = response["data"]["data"]["getUser"]
      })
    })()
  }
})
</script>