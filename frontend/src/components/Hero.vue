<template>
  <section class="p-10 mt-10">
    <div class="flex justify-center lg:flex-row flex-col items-center">
      <div class="im-4 max-w-md lg:text-left text-center">
        <h1 class="text-3xl uppercase font-bold text-blue-600">Pronto</h1>
        <h3 class="font-thin text-xl mb-2 text-gray-900">Data driven platform for digital selling, eased and improved. Start your ecommerce profile in less than a minute!</h3>
        <router-link to="/signup">
          <button class="px-4 py-2 bg-blue-500 rounded-lg shadow-lg text-white outline-none hover:bg-blue-700 duration-300">Create your account</button>
        </router-link>
      </div>
      <div class="m-4 relative flex justify-center items-center select-none">
        <img src="@/assets/hand.png" class="w-60 absolute z-10" />
        <div class="w-80 shadow-lg rounded-xl transform bg-gradient-to-br from-blue-300 to-blue-500 h-80"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",
})
</script>