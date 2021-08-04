<template>
  <section class="flex justify-center items-center p-6">
    <div class="w-3/4 flex justify-between items-center rounded-2xl shadow-lg p-14 border">
      <div>
        <h3 class="text-3xl">
          Ready to get started?
        </h3>
        <span>Create an account here</span>
      </div>
      <button class="bg-blue-600 px-8 py-4 hover:bg-blue-800 duration-300 rounded-lg text-white">Get Started</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Ready"
})
</script>