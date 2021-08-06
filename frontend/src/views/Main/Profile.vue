<template>
  <section>
    <section>
      <div class="flex justify-center items-center flex-col p-8 mb-4 bg-blue-400 text-white select-none">
        <img src="@/assets/absol.jpg" class="w-40 rounded-full border-white border-2" />
        <h2 class="font-bold text-2xl">@{{username}}</h2>
      </div>
      <div class="flex flex-wrap justify-center items-center">
        <div v-on:click="this.$router.push(`/product/${product._id}`)" v-for="product in products" :key="product._id" class="select-none w-80 border flex justify-center items-center flex-col m-2 rounded-lg shadow-lg duration-300 hover:-translate-y-2 transform cursor-pointer">
          <div class="w-full bg-white flex justify-center items-center rounded-lg">
            <img class="rounded-t-lg" :src="validURL(product.image) ? product.image : 'https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png'" />
          </div>
          <h3 class="font-bold text-lg mt-2">{{product.title}}</h3>
          <div class="w-full px-4 py-2">
            <span class="float-left">stock here</span>
            <span class="float-right">${{product.price}}</span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: "ProfilePage",
  data() {
    return {
      products: [],
      username: null
    }
  },
  methods: {
    validURL(str){
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    }
  },
  mounted: function(){
    (() => {
      axios.get(`http://localhost:5000/graphql?query={getAllProductsFromUser(user: "${ this.$route.params.id }"){_id title price date} getUser(_id: "${ this.$route.params.id }"){username}}`).then(response => {
        this.products = response["data"]["data"]["getAllProductsFromUser"];
        this.username = response["data"]["data"]["getUser"]["username"];
      })
    })()
  },
})
</script>
