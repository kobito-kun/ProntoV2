<template>
  <section class="max-w-full lg:flex-row flex-col flex max-h-screen overflow-hidden">
    <div class="lg:w-60 bg-black h-screen text-white flex flex-col p-4 select-none">
      <router-link to="/" class="text-2xl font-bold">Pronto</router-link>
      <br class="lg:block hidden" />
      <br class="lg:block hidden" />
      <h3 v-on:click="currentPanel = 'Main'" :class="currentPanel == 'Main' ? 'border-red-600' : ''" class="font-bold border-b-2 my-2 hover:border-purple-600 duration-300 cursor-pointer text-lg"><i class="fas fa-home"></i> Home</h3>
      <h3 v-on:click="currentPanel = 'Orders'" :class="currentPanel == 'Orders' ? 'border-red-600' : ''" class="font-bold border-b-2 my-2 hover:border-purple-600 duration-300 cursor-pointer text-lg"><i class="fas fa-folder"></i> Orders</h3>
      <h3 v-on:click="currentPanel = 'Account'" :class="currentPanel == 'Account' ? 'border-red-600' : ''" class="font-bold border-b-2 my-2 hover:border-purple-600 duration-300 cursor-pointer text-lg"><i class="fas fa-user"></i> Account</h3>
      <h3 v-on:click="currentPanel = 'Products'" :class="currentPanel == 'Products' ? 'border-red-600' : ''" class="font-bold border-b-2 my-2 hover:border-purple-600 duration-300 cursor-pointer text-lg"><i class="fas fa-box"></i> Products</h3>
    </div>
    <div class="w-full overflow-y-scroll p-10 bg-gray-100 min-h-screen">
      <main-dashboard v-if="currentPanel == 'Main'" />
      <order-dashboard v-if="currentPanel == 'Orders'" />
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import MainDashboard from '../../components/MainDashboard.vue';
import OrderDashboard from '../../components/OrderDashboard.vue';

export default defineComponent({
  name: "DashboardMain",
  data(){
    return {
      currentPanel: "Main"
    }
  },
  components: {
    MainDashboard,
    OrderDashboard
  }
})
</script>