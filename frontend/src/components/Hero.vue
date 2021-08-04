<template>
  <section class="p-10 mt-10">
    <div class="flex justify-center items-center">
      <div class="m-4 flex justify-center items-center flex-col max-w-md">
        <h1 class="text-3xl text-gray-900">Data driven platform for digital selling, eased and improved. Start your e-commerce profile in less than a minute!</h1>
      </div>
      <div class="m-4 relative flex justify-center items-center">
        <img src="@/assets/Richie_2.png" class="w-60 absolute z-10" />
        <div class="w-80 shadow-lg rounded-xl transform bg-gradient-to-br from-blue-500 to-blue-600 h-80"></div>
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