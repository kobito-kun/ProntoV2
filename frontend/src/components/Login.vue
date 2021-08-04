<template>
  <section class="mt-20 flex justify-center items-center lg:flex-row flex-col">
    <div class="p-10">
      <h3 class="uppercase text-blue-600 text-3xl font-bold text-center mb-4">Login</h3>
      <form class="flex flex-col w-72">
        <input type="text" placeholder="Username" class="mb-4 px-4 py-2 shadow-lg rounded-lg outline-none">
        <input type="password" placeholder="Password" class="mb-4 px-4 py-2 shadow-lg rounded-lg outline-none">
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
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Login"
})
</script>