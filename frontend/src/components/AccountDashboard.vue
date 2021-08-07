<template>
  <section class="bg-white min-w-full min-h-full rounded-lg shadow flex justify-center items-center flex-col select-none">
    <form class="flex flex-col" v-if="profile">
      <img src="@/assets/absol.jpg" class="mx-auto w-40 rounded-full shadow-lg" />
      <input class="px-4 py-2 border shadow my-2 rounded outline-none" placeholder="Username" :value="profile['username']" />
      <input class="px-4 py-2 border shadow my-2 rounded outline-none" placeholder="Email" :value="profile['email']" />
      <input class="px-4 py-2 bg-black text-white hover:bg-gray-800 duration-300 cursor-pointer" value="Update Profile" type="submit" />
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
      profile: null
    }
  },
  mounted: function(){
    (() => {
      axios.get(`http://localhost:5000/graphql?query={getUser(_id: "60f470487fa26519907d72b9"){username _id email}}`).then(response => {
        this.profile = response["data"]["data"]["getUser"]
      }).then(

      )
    })()
  }
})
</script>