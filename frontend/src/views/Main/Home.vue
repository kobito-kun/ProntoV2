<template>
  <Navbar />
  <Hero />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from '@/components/Hero.vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  name: "Home",
  components: {
    Hero,
    Navbar
  }
});
</script>
