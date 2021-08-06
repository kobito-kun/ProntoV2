<template>
  <section class="max-w-full lg:flex-row flex-col flex max-h-screen overflow-hidden">
    <div class="lg:w-60 bg-black h-screen text-white flex flex-col p-4">
      <h1 class="text-2xl font-bold">Pronto</h1>
      <br class="lg:block hidden" />
      <br class="lg:block hidden" />
      <h3 class="border-b my-2 hover:border-purple-600 duration-300 cursor-pointer text-lg">Home</h3>
      <h3 class="border-b my-2 hover:border-purple-600 duration-300 cursor-pointer text-lg">Orders</h3>
      <h3 class="border-b my-2 hover:border-purple-600 duration-300 cursor-pointer text-lg">Account</h3>
      <h3 class="border-b my-2 hover:border-purple-600 duration-300 cursor-pointer text-lg">Products</h3>
    </div>
    <div class="w-full overflow-y-scroll">
      <main-dashboard v-if="currentPanel == 'Main'" />
      <div v-else>OWO</div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import MainDashboard from '../../components/MainDashboard.vue';

export default defineComponent({
  name: "DashboardMain",
  data(){
    return {
      currentPanel: "Main"
    }
  },
  components: {
    MainDashboard
  }
})
</script>