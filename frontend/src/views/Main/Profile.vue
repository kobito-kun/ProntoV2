<template>
  <section>
    <Navbar />
    <section class="mt-20">
      <div class="flex justify-center items-center flex-col">
        <img src="@/assets/absol.jpg" class="w-40 rounded-full border-black border-2" />
        <h2 class="font-bold text-2xl">{{username}}</h2>
      </div>
      <div class="flex flex-wrap justify-center items-center">
        <div v-for="product in products" :key="product._id" class="w-80">
          <div class="w-72 h-44 bg-gray-600 flex justify-center items-center">
            <img :src="validURL(product.image) ? product.image : 'https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png'" />
          </div>
          <h3>{{product.title}}</h3>
          <p class="truncate">{{product.description}}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

import Navbar from '@/components/Navbar.vue';

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
      axios.get(`http://localhost:5000/graphql?query={getAllProductsFromUser(user: "${ this.$route.params.id }"){_id title description date} getUser(_id: "${ this.$route.params.id }"){username}}`).then(response => {
        this.products = response["data"]["data"]["getAllProductsFromUser"];
        this.username = response["data"]["data"]["getUser"]["username"];
      })
    })()
  },
  components: {
    Navbar
  }
})
</script>
