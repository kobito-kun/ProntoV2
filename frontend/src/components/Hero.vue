<template>
  <section class="p-10">
    <div class="flex justify-center items-center">
        <div class="relative flex justify-center items-center">
          <img src="@/assets/Richie_2.png" class="w-60 absolute z-10" />
          <div class="w-80 shadow-lg rounded-xl transform rotate-45 bg-gradient-to-br from-blue-500 to-blue-600 h-80"></div>
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