<template>
  <nav className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-4 text-lg">
    <div className="px-4 py-2">
      <h1 className="font-bold tracking-tight">Pronto</h1>
    </div>
    <div className="px-4 py-2 bg-blue-500 rounded-lg text-white font-thin shadow-lg">
      <h2>Login / Signup</h2>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Navbar"
})
</script>