<template>
  <Navbar />
  <Hero />
  <Showcase />
  <Ready />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from '@/components/Hero.vue';
import Navbar from '@/components/Navbar.vue';
import Showcase from '@/components/Showcase.vue';
import Ready from '@/components/Ready.vue';

export default defineComponent({
  name: "Home",
  components: {
    Hero,
    Navbar,
    Showcase,
    Ready,
  }
});
</script>