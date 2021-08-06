<template>
  <section v-if="product">
    {{product._id}}
    
    i'm too lazy to work on this go do this kobi in the future while i make the dashbaord
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
      axios.get(`http://localhost:5000/graphql?query={getProduct(_id: "${ this.$route.params.id }"){ _id title price description image }}`).then(data => {
        this.product = data["data"]["data"]["getProduct"]
      })
    })()
  }
})
</script>
