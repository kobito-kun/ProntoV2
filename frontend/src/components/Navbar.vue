<template>
  <nav className="fixed top-0 left-0 w-full h-16 z-50 shadow-lg flex justify-between items-center px-4 text-lg glassmorphism">
    <div className="px-4 py-2">
      <router-link to="/">
        <h1 className="text-blue-600 font-bold tracking-tight">Pronto</h1>
      </router-link>
    </div>
    <router-link to="/login" className="px-4 py-2 bg-blue-500 rounded-lg text-white font-thin shadow-lg">
      <h2>Login / Signup</h2>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Navbar"
})
</script>

<style scoped>
.glassmorphism{
  background: rgba( 255, 255, 255, 0.5 );
  backdrop-filter: blur( 3px );
  -webkit-backdrop-filter: blur( 3px );  
}
</style>