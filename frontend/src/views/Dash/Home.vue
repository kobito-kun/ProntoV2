<template>
  <section class="max-w-full lg:flex-row flex-col flex max-h-screen overflow-hidden">
    <div class="lg:w-60 bg-black h-screen text-white flex flex-col p-4 select-none">
      <router-link to="/" class="text-2xl text-center font-bold">Pronto</router-link>
      <br class="lg:block hidden" />
      <br class="lg:block hidden" />
      <h3 v-on:click="currentPanel = 'Main'" :class="currentPanel == 'Main' ? 'text-red-700' : ''" class="hover:text-blue-600 font-light my-4 duration-300 cursor-pointer text-lg"><i class="fas text-gray-600 mr-8 fa-home"></i> Home</h3>
      <h3 v-on:click="currentPanel = 'Products'" :class="currentPanel == 'Products' ? 'text-red-700' : ''" class="hover:text-blue-600 font-light my-4 duration-300 cursor-pointer text-lg"><i class="fas text-gray-600 mr-8 fa-box"></i> Products</h3>
      <h3 v-on:click="currentPanel = 'Orders'" :class="currentPanel == 'Orders' ? 'text-red-700' : ''" class="hover:text-blue-600 font-light my-4 duration-300 cursor-pointer text-lg"><i class="fas text-gray-600 mr-8 fa-folder"></i> Orders</h3>
      <h3 v-on:click="currentPanel = 'Account'" :class="currentPanel == 'Account' ? 'text-red-700' : ''" class="hover:text-blue-600 font-light my-4 duration-300 cursor-pointer text-lg"><i class="fas text-gray-600 mr-8 fa-user"></i> Account</h3>
    </div>
    <div class="w-full overflow-y-scroll p-10 bg-gray-100 min-h-screen">
      <main-dashboard v-if="currentPanel == 'Main'" />
      <order-dashboard v-else-if="currentPanel == 'Orders'" />
      <account-dashboard v-else-if="currentPanel == 'Account'" />
      <product-dashboard v-else-if="currentPanel == 'Products'"/>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import MainDashboard from '../../components/MainDashboard.vue';
import OrderDashboard from '../../components/OrderDashboard.vue';
import AccountDashboard from '../../components/AccountDashboard.vue';
import ProductDashboard from '../../components/ProductDashboard.vue';

export default defineComponent({
  name: "DashboardMain",
  data(){
    return {
      currentPanel: "Account"
    }
  },
  components: {
    MainDashboard,
    OrderDashboard,
    AccountDashboard,
    ProductDashboard
  }
})
</script>