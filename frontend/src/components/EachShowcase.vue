<template>
  <div class="w-full lg:w-48 m-2 flex select-none hover:scale-105 transform duration-300 hover:bg-gray-300 flex-col justify-center items-center p-4 rounded-lg">
    <img :src="require(`@/assets/${image}`)" class="w-32" alt="Secured">
    <h5 class="font-bold">{{title}}</h5>
    <p class="text-sm text-center">{{description}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "EachShowcase",
  props: {
    image: String,
    title: String,
    description: String,
  }
})
</script>