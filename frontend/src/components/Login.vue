<template>
  <section class="mt-20 flex justify-center items-center lg:flex-row flex-col">
    <div class="p-10">
      <h3 class="uppercase text-blue-600 text-3xl font-bold text-center mb-4">Login</h3>
      <p class="text-red-700 text-center text-sm font-bold" v-if="errorMessage">{{errorMessage}}</p>
      <form class="flex flex-col w-72" v-on:submit.prevent="handleSubmit">
        <input v-model="input['email']" type="email" placeholder="Email" class="mb-4 px-4 py-2 shadow-lg rounded-lg outline-none">
        <input v-model="input['password']" type="password" placeholder="Password" class="mb-4 px-4 py-2 shadow-lg rounded-lg outline-none">
        <input type="submit" value="Login 🚀" class="px-4 py-2 rounded-lg shadow-lg bg-blue-600 text-white outline-none hover:bg-blue-700 duration-300 cursor-pointer">
      </form>
    </div>
    <img src="@/assets/Succes.png" alt="Success" class="w-80" />
  </section>
  <router-link to="/signup">
    <p class="text-center text-sm text-gray-400">Don't have an account? Signup here.</p>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
  name: "Login",
  data(){
    return {
      errorMessage: "",
      input: {
        email : "ito.kobilol@gmail.com",
        password: "kobiOWO"
      }
    }
  },
  methods: {
    handleSubmit(){
      const object = {
        email: this.input["email"],
        password: this.input["password"]
      };
      axios.post("http://localhost:5000/login", object).then(data => {
        if(data.status === 202){
          this.errorMessage = "Wrong Credentials."
        }else{
          const token = data["data"];
          localStorage.setItem("token", token);
          this.$router.push({name: "DashboardMain"})
        }
      })
    }
  }
})
</script>