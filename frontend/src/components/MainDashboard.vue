<template>
  <section class="max-w-6xl mx-auto">
    <div class="flex flex-wrap justify-between items-center">
      <div class="w-full mx-4 my-2 lg:w-80 h-36 lg:h-40 rounded-lg shadow bg-white flex items-center flex-col justify-center">
        <h3 class="font-bold text-4xl">$500</h3>
        <span class="uppercase font-bold text-gray-500">all time income</span>
      </div>
      <div class="w-full mx-4 my-2 lg:w-80 h-36 lg:h-40 rounded-lg shadow bg-white flex items-center flex-col justify-center">
        <h3 class="font-bold text-4xl">$100</h3>
        <span class="uppercase font-bold text-gray-500">this months income</span>
      </div>
      <div class="w-full mx-4 my-2 lg:w-80 h-36 lg:h-40 rounded-lg shadow bg-white flex items-center flex-col justify-center">
        <h3 class="font-bold text-4xl">2</h3>
        <span class="uppercase font-bold text-gray-500">this months order</span>
      </div>
    </div>
    <div class="mx-4 my-2">
      <div class="bg-white w-full h-full rounded-lg shadow px-4 py-2">
        henlo
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: "DashboardMainComponent"
})
</script>