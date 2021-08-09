<template>
  <section v-if="product">
    <div class="bg-blue-100 min-h-screen p-10 flex justify-center lg:flex-row flex-col">
      <div class="w-full h-full bg-white m-1 p-10 rounded-lg shadow">
        <h1 class="font-bold text-3xl">{{product.title}}</h1>
        <hr />
        <p>{{product.description}}</p>
      </div>
      <div class="lg:w-60 w-full h-full bg-white m-1 p-10 rounded-lg shadow">
        <p class="font-bold text-center">1 Qty. | ${{product.price}}</p>
        <p class="font-bold text-xs text-center text-gray-500">Disabled Payments and Ordering for Various Reasons.</p>
        <button class="px-4 py-2 bg-gray-500 cursor-not-allowed rounded-lg w-full shadow text-white my-2">Buy Now</button>
        <p class="text-xs text-gray-500 text-center hover:text-purple-600 duration-300 cursor-pointer" v-on:click="this.$router.push(`/profile/${product.user}`)">Back to the seller.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
  name: "ProductPage",
  data() {
    return {
      product: null
    }
  },
  mounted: function(){
    (() => {
      axios.get(`http://localhost:5000/graphql?query={getProduct(_id: "${ this.$route.params.id }"){ _id title price description image user }}`).then(data => {
        this.product = data["data"]["data"]["getProduct"]
      })
    })()
  }
})
</script>
