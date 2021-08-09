<template>
  <section class="max-w-6xl mx-auto">
    <div class="flex flex-wrap justify-between items-center">
      <div class="w-full mx-4 my-2 lg:w-80 h-36 lg:h-40 rounded-lg shadow bg-white flex items-center flex-col justify-center">
        <h3 class="font-bold text-4xl">${{total}}</h3>
        <span class="uppercase font-bold text-gray-500">all time income</span>
      </div>
      <div class="w-full mx-4 my-2 lg:w-80 h-36 lg:h-40 rounded-lg shadow bg-white flex items-center flex-col justify-center">
        <h3 class="font-bold text-4xl">{{orders.length}}</h3>
        <span class="uppercase font-bold text-gray-500">all time orders</span>
      </div>
      <div class="w-full mx-4 my-2 lg:w-80 h-36 lg:h-40 rounded-lg shadow bg-white flex items-center flex-col justify-center">
        <h3 class="font-bold text-4xl">{{orders.length}}</h3>
        <span class="uppercase font-bold text-gray-500">this months order</span>
      </div>
    </div>
    <div class="mx-4 my-2">
      <div class="bg-white w-full h-full rounded-lg shadow px-4 py-2">
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Paid
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="order in orders" :key="order._id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src="https://cdn.discordapp.com/attachments/761005987574054932/873055908907847680/absol.jpg" alt="">
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{order.name}}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{order.email}}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{order.product}}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      ${{order.total}}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{convertDate(order.date)}}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-center">
                    <div class="w-full text-center">
                      <p class="rounded-lg shadow bg-green-300 py-1 text-white" v-if="order.paid == true">
                        Paid
                      </p>
                      <p class="rounded-lg shadow bg-red-300 py-1 text-white" v-else>
                        Not Paid
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
  name: "DashboardMainComponent",
  data(){
    return {
      orders: [],
      total: 0,
    }
  },
  methods: {
    convertDate(date: any){
      return new Date(Number(date)).toLocaleDateString()
    },
  },
  mounted: function(){
    (() => {
      axios.get(`http://localhost:5000/graphql?query={allOrders(user: "${localStorage.getItem("_id")}"){_id name email product total date paid}}`).then(response => {
        this.orders = response["data"]["data"]["allOrders"];
        this.orders.forEach(order => {
          if(order["paid"] == true){
            this.total += order["total"]
          }
        })
      })
    })()
  },
})
</script>