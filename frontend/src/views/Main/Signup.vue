<template>
  <Navbar />
  <Signup />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Navbar from '@/components/Navbar.vue';
import Signup from '@/components/Signup.vue';

export default defineComponent({
  name: "SignupPage",
  components: {
    Navbar,
    Signup
  }
})
</script>