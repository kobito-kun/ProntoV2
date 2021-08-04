<template>
  <Navbar />
  <Login />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Navbar from '@/components/Navbar.vue';
import Login from '@/components/Login.vue';

export default defineComponent({
  name: "LoginPage",
  components: {
    Navbar,
    Login
  }
})
</script>